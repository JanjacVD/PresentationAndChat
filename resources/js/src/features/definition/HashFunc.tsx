import { useNavigate } from "react-router-dom";
export default function HashFunc() {
    const nav = useNavigate();
    window.addEventListener('keydown', (e) => {
        if(e.key === 'ArrowRight'){
            nav('/examples')
        }
        else if (e.key === "ArrowLeft") {
            nav("/types");
        }
    })
    return (
        <div className="container-def" onClick={() => nav("/examples")}>
            <h1>Ciphers</h1>
            <p>
                <span style={{ color: "#C586C0" }}>
                    A cipher, or encryption cipher,
                </span>{" "}
                is an algorithm or method used for encrypting and decrypting
                data.{" "}
            </p>
            <p>
                Ciphers can further be classified based on the specific
                techniques they employ. Some common types of ciphers include:
                    <p>
                        <span style={{ color: "#4EC9B0" }}>
                            Substitution Ciphers:
                            </span>{' '}
                        These ciphers replace plaintext characters with
                        different characters based on a predefined substitution
                        rule. Examples include the Caesar cipher, Atbash cipher,
                        and the famous Enigma machine used during World War II.
                    </p>
                    <p>
                        <span style={{ color: "#4EC9B0" }}>
                            Transposition Ciphers:
                        </span>{' '}
                        Transposition ciphers rearrange the order of characters
                        in the plaintext to form the ciphertext. The Rail Fence
                        cipher and Columnar Transposition cipher are examples of
                        transposition ciphers.
                    </p>
                    <p>
                        <span style={{ color: "#4EC9B0" }}>
                            Stream Ciphers:
                            </span>{' '}
                        Stream ciphers encrypt individual characters or bits of
                        the plaintext one at a time. They generate a keystream
                        based on the key and use it to encrypt the plaintext.
                        The RC4 cipher is a well-known stream cipher.
                    </p>
                    <p>
                        <span style={{ color: "#4EC9B0" }}>Block Ciphers: </span>
                        Block ciphers encrypt fixed-size blocks of plaintext at
                        a time. The plaintext is divided into blocks, and each
                        block is encrypted using the same key. AES and DES are
                        examples of block ciphers.
                    </p>
            </p>
        </div>
    );
}
