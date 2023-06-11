import { useNavigate } from "react-router-dom";
import {  useState } from "react";
import {  Railencode, cipherRot13 } from "../../utils/cyphers.js";
import * as CryptoJS from 'crypto-js'
export default function Examples() {
    const nav = useNavigate();
    const [text, setText] = useState("");
    const [radio, setRadio] = useState<any>(null);
    const op = ["Caesar Cipher", "RC4", "AES", "Rail Fence cipher"];
    const ops = ["NUM", "KEY", "KEY", "NUM"];
    const [num, setNum] = useState(0);
    const [key, setKey] = useState("");
    const encryptedRC4 = CryptoJS.RC4.encrypt(CryptoJS.enc.Utf8.parse(text), key);
    const encryptedAES = CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(text), key);
    const ceasar = cipherRot13(text, num);
    const rail = Railencode(text, num)
    // const de2 = CryptoJS.RC4.decrypt(encryptedAES, key)
    const o = op.map((x, i) => ({
        name: x,
        type: ops[i],

    }));
    window.addEventListener('keydown', (e) => {
        if(e.key === 'ArrowRight'){
            nav('/ws')
        }
        else if (e.key === "ArrowLeft") {
            nav("/cipher");
        }
    })
    return (
        <div className="container-def">
            <h1>Examples of encyrptions</h1>
            {radio?.type === "KEY" && (
                <label>
                    Secret key:
                    <input
                        type="text"
                        value={key}
                        onChange={(e) => setKey(e.target.value)}
                    />{" "}
                </label>
            )}
            {radio?.type === "NUM" && (
                <label>
                    Number of rounds: 
                    {" "}
                    {num}
                    <input
                        type="range"
                        min={0}
                        max={100}
                        value={num}
                        onChange={(e) => setNum(+e.target.value)}
                    />
                </label>
            )}
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            {o.map((x, i) => (
                <label key={i}>
                    <input
                        type="radio"
                        // value={x.name}
                        checked={radio?.name === x?.name}
                        onClick={() => setRadio(x)}
                    />{" "}
                    {x.name}
                </label>
            ))}{
                text &&
            <h2 style={{lineBreak:'anywhere'}}>
                {radio?.name === "Caesar Cipher" && ceasar}
                {radio?.name === "RC4" && encryptedRC4.toString()}
                {radio?.name === "AES" && encryptedAES.toString()}
                {radio?.name === "Rail Fence cipher" && rail}
            </h2>
            }
            <div className="next" onClick={() => nav('/ws')}>
                Next
            </div>

            {/* <h2>
                {radio?.name === "AES" && CryptoJS.AES.decrypt(encryptedAES, key).toString(CryptoJS.enc.Utf8)}
                {radio?.name === "RC4" && CryptoJS.RC4.decrypt(encryptedRC4, key).toString(CryptoJS.enc.Utf8)}
                {radio?.name === "Rail Fence cipher" && Raildecode(rail, num)}
            </h2> */}
        </div>
    );
}
