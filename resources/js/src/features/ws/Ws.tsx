import { useNavigate } from "react-router-dom";
export default function Ws() {
    const nav = useNavigate();
    window.addEventListener("keydown", (e) => {
        if (e.key === "ArrowRight") {
        } else if (e.key === "ArrowLeft") {
            nav("/examples");
        }
    });
    return (
        <div className="container-ws">
            <h1>Websockets</h1>
            <p>
                WebSockets is a communication protocol that enables real-time,
                bidirectional communication between a client (typically a web
                browser) and a server over a single, long-lived connection.
                Unlike traditional web communication protocols like HTTP, which
                follow a request-response model, WebSockets allow for
                full-duplex communication, where both the client and the server
                can send data to each other simultaneously.
            </p>
            <div className="grid">
                <div>
                    <p className="tit">Key features:</p>
                    <p>Persistent Connection</p>
                    <p>Bi-Directional Communication</p>
                    <p>Low Latency</p>
                    <p>Event-Driven Model</p>
                    <p>Cross-Domain Support</p>
                </div>
                <div>
                    <p className="tit">
                        High-level overview of how the WebSocket protocol works:
                    </p>
                    <p>Handshake</p>
                    <p>Upgrade</p>
                    <p>WebSocket Connection</p>
                    <p>Data Exchange</p>
                    <p>Connection Termination</p>
                </div>
            </div>
        </div>
    );
}
