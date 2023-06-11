import { Route, Routes } from "react-router-dom";
import Homepage from "./src/features/homepage/Homepage.jsx";
import Definition from "./src/features/definition/Definition.jsx";
import TypesEnc from "./src/features/definition/TypesEnc.jsx";
import HashFunc from "./src/features/definition/HashFunc.jsx";
import Examples from "./src/features/definition/Examples.jsx";
import Ws from "./src/features/ws/Ws.jsx";
import Login from "./src/features/chat/Login.jsx";
import { useAuth } from "./src/features/chat/UserContext.jsx";
import Chat from "./src/features/chat/Chat.jsx";

export default function AppRouter(){
    const Auth = useAuth()
    const paths = [
        {path: '/', component: <Homepage />},
        {path: '/definition', component: <Definition />},
        {path: '/types', component: <TypesEnc />},
        {path: '/cipher', component: <HashFunc />},
        {path: '/examples', component: <Examples />},
        {path: '/ws', component: <Ws />},
        {path: '/join', component: <Login />},
    ]
    if(Auth?.user){
        return <Chat auth={Auth}/>
    }
    return(
        <Routes>
            {paths.map(p => <Route key={p.path} path={p.path} element={p.component}/>)}
        </Routes>
    )
}