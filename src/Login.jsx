import { useState } from "react";
import "./Login.css";

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSumbit = (e) => {
        e.preventDefault();
        console.log("Entrez votre username : ", username, password);
        alert("Connexion en cours !");
    };

    return (
        <div className="login-container">
             <div className="page-title">Gestion C.I.S GIL</div>

             
            <form onSubmit={handleSumbit} className="login-box">
                <h2>Connexion</h2>

                <input
                    type="username"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />

                <input 
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />

                <button type="submit">Connexion</button>
            </form>
        </div>
    );
}