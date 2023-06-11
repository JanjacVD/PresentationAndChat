import Chat from "./Chat.jsx";
import { useAuth } from "./UserContext.jsx";

export default function HocHook(){
    const Auth = useAuth()
    if(!Auth)return null
    return (
        <Chat auth={Auth} />
    )
}