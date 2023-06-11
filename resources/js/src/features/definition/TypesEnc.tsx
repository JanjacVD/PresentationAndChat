import { useNavigate } from "react-router-dom";
export default function TypesEnc() {
    const nav = useNavigate();
    window.addEventListener("keydown", (e) => {
        if (e.key === "ArrowRight") {
            nav("/cipher");
        } else if (e.key === "ArrowLeft") {
            nav("/definition");
        }
    });
    return (
        <div className="container-def" onClick={() => nav("/cipher")}>
            {" "}
            <h1>Types of encryption</h1>
            <p>
                <span style={{ color: "#4EC9B0" }}>Symmetric Encryption:</span>{" "}
                In symmetric encryption, the same key is used for both
                encryption and decryption. The sender and the recipient of the
                encrypted message must share this secret key in advance.
                Symmetric encryption algorithms, such as Advanced Encryption
                Standard (AES), are generally faster and more efficient for
                encrypting large amounts of data.
            </p>
            <p>
                <span style={{ color: "#4EC9B0" }}>Asymmetric Encryption:</span>{" "}
                Also known as public-key encryption, asymmetric encryption uses
                a pair of mathematically related keys: a public key and a
                private key. The public key is widely distributed and used to
                encrypt data, while the private key is kept secret and used for
                decryption. Asymmetric encryption algorithms, such as RSA
                (Rivest-Shamir-Adleman), provide mechanisms for secure key
                exchange and digital signatures.
            </p>
        </div>
    );
}
