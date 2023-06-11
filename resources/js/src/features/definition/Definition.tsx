import logo from '../../assets/enc.png';
import { useNavigate } from "react-router-dom";
export default function Definition() {
    const nav = useNavigate()
    window.addEventListener('keydown', (e) => {
        if(e.key === 'ArrowRight'){
            nav('/types')
        }
        else if(e.key === 'ArrowLeft'){
        }
    })
    return (
        <div className="container-def" onClick={() => nav('/types')}>
            <h1>What is encryption?</h1>
            <p>
                Encryption is the process of converting plaintext (unencrypted
                data) into ciphertext (encrypted data) using an algorithm or
                mathematical function called a cipher.{" "}
            </p>
            <p>
                Encryption uses cryptographic keys to transform the original
                data into a form that is unreadable and unintelligible without
                the corresponding key or password. The encrypted data can only
                be decrypted and restored to its original form by authorized
                parties who possess the correct key.
            </p>
            <img  src={logo} alt="test" />
        </div>
    );
}
