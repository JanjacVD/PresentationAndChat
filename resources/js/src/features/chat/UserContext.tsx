import { createContext, useContext, useEffect, useState } from "react";
import { User } from "./Login.jsx";
import Chat from "./Chat.jsx";

const UserContext = createContext<UCP | null>(null);

export default function UserContextProvider({
    children,
}: {
    children: JSX.Element;
}) {
    const [user, setUser] = useState<User | null>(null);
    function saveUser(u: User) {
        setUser(u);
        localStorage.setItem("@engUser", JSON.stringify(u));
    }
    useEffect(() => {
        const u = localStorage.getItem("@engUser");
        if (u) {
            setUser(JSON.parse(u));
        }
    }, []);
    return (
        <UserContext.Provider value={{ user, saveUser }}>
            {children}
        </UserContext.Provider>
    );
}
export type UCP = {
    user: User | null;
    saveUser: (u: User) => void;
};
export const useAuth = () => useContext(UserContext);
