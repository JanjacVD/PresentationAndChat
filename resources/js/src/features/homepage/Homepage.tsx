import {  useState } from "react";
import { cipherRot13 } from "../../utils/cyphers.js";
import { useNavigate } from "react-router-dom";
export default function Homepage() {
    const nav = useNavigate()
    const originalString = "websockets and encryption ";
    const [string, setString] = useState("");
    const [is, setIs] = useState(false)
    function begingEnc() {
        let index = 0;
        const length = originalString.length;
        const interval = setInterval(() => {
            index++;
            setString(
                cipherRot13(originalString.slice(0, index), length - index)
            );
            if (index === originalString.length) {
                setString(originalString);
                clearInterval(interval);
                setTimeout(() => nav('definition'), 2000)
            }
        }, 150);
    }
    const doStuff = () => {
        if(is)return
        setIs(true)
        setTimeout(() => {
            begingEnc();
        }, 500);
    }

    return (
        <div className="container" onClick={doStuff}>
            {string}
        </div>
    );
}
// Background Color: #1E1E1E
// Text Color: #D4D4D4
// Accent Color 1: #569CD6 (Blue)
// Accent Color 2: #CE9178 (Orange)
// Accent Color 3: #C586C0 (Purple)
// Accent Color 4: #9CDCFE (Light Blue)
// Accent Color 5: #4EC9B0 (Teal)
// Error Color: #F44747 (Red)
// Warning Color: #FFCC66 (Yellow)
// Success Color: #98C379 (Green)
