import { FormEvent, useState } from "react";
import axios from "axios";
import { base } from "../../data/const.js";
import { useAuth } from "./UserContext.jsx";
export default function Login() {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const A = useAuth()
    const submit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response = await axios.post(base + "join", {
                name: name,
                email: email,
                password: password,
            },{
                headers:{
                    Accept:"application/json",
                    "Content-Type":"application/json"
                }
            });
            A?.saveUser(response.data)
        } catch (e) {
            // console.log(e)

            alert(e);
        }
    };
    return (
        <div className="login-cont">
            <form onSubmit={submit}>
                <div className="form-input">
                    <input
                        type="text"
                        name="name"
                        data-invalid={name.length > 2 ? "false" : "true"}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <label htmlFor="name">Name: </label>
                </div>
                <div className="form-input">
                    <input
                        type="email"
                        name="email"
                        value={email}
                        data-invalid={email.length > 5 ? "false" : "true"}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <label htmlFor="email">Email: </label>
                </div>
                <div className="form-input">
                    <input
                        type="text"
                        name="pw"
                        value={password}
                        data-invalid={password.length > 7 ? "false" : "true"}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <label htmlFor="pw">Password: </label>
                </div>
                <button type="submit">Join</button>
            </form>
        </div>
    );
}



export type User = {
    user: {
        name: string;
        email: string;
        id: number;
    };
    token: string;
};
