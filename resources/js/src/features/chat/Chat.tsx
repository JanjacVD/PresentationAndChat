import Echo from "laravel-echo";
import { Component, FormEvent } from "react";
import Pusher from "pusher-js";
import { UCP } from "./UserContext.jsx";
import axios from "axios";
import { apiUrl } from "../../data/const.js";
type Message = {
    text: string;
    user_id: number;
    user_name: string;
};
interface ChatState {
    count: number;
    messages: Message[];
    text: string;
}
export default class Chat extends Component<{ auth: UCP }, ChatState> {
    private auth: UCP;
    private canSend = true;
    state: Readonly<ChatState> = {
        count: 0,
        messages: [],
        text: "",
    };
    constructor(props: { auth: UCP }) {
        super(props);
        this.auth = props.auth;
        this.submit.bind(this);
        window.Pusher = Pusher;
        window.Echo = new Echo({
            broadcaster: "pusher",
            key: "865454a2555137173dca",
            wsHost: "https://api-eu.pusher.com/",
            wsPort: 443,
            wssPort: 6001,
            forceTLS: false,
            encrypted: true,
            disableStats: true,
            cluster: "eu",
            auth: {
                headers: {
                    Authorization: "Bearer " + this.auth?.user?.token,
                    Accept: "application/json",
                },
            },
        });
    }
    componentDidMount(): void {
        window.Echo.join("chat")
            .joining(() => this.setState({ count: this.state.count + 1 }))
            .here((e: any) => this.setState({ count: e.length }))
            .leaving(() => this.setState({ count: this.state.count - 1 }))
            .error((e: any) => console.log(e))
            .subscribed(() => console.log(123));
        window.Echo.listen("chat", ".new.msg", (e: any) => {
            if (e?.msg) {
                this.setState((prev) => ({
                    ...prev,
                    messages: [...this.state.messages, e?.msg],
                }));
                setTimeout(() => {
                    window.scrollTo({ top: 10000000, behavior: "smooth" });
                }, 200);
            }
        });
    }
    componentWillUnmount() {
        window.Echo.disconnect();
    }
    async submit(e: FormEvent<HTMLFormElement>, selfClass: Chat) {
        e.preventDefault();
        if (selfClass.state.text && this.canSend) {
            this.canSend = false;
            const res = await axios.post(
                apiUrl + "msg",
                {
                    text: this.state.text,
                },
                {
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                        Authorization: "Bearer " + selfClass.auth?.user?.token,
                    },
                }
            );
            console.log(res.data);
            this.setState((prev) => ({ ...prev, text: "" }));
            setTimeout(() => {
                this.canSend = true;
            }, 400);
        }
    }
    render() {
        return (
            <div className="chat-cont">
                <h1>
                    <p>Number of people {this.state.count}</p>
                </h1>
                <div className="msg-cont">
                    {this.state.messages.map((msg, i) => (
                        <div
                            className={
                                msg.user_id === this.auth.user?.user.id
                                    ? "msg my"
                                    : "msg friend"
                            }
                            key={i}
                        >
                            <div>
                                <span>{msg.user_name}</span>
                                <p>{msg.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <form onSubmit={(e) => this.submit(e, this)}>
                    <input
                        type="text"
                        placeholder="Message"
                        value={this.state.text}
                        onChange={(e) =>
                            this.setState((prev) => ({
                                ...prev,
                                text: e.target.value,
                            }))
                        }
                    />
                    <button type="submit">Send</button>
                </form>
            </div>
        );
    }
}
declare global {
    interface Window {
        Pusher: any;
    }
    interface Window {
        Echo: Echo.default;
    }
}
