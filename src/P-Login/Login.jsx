import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./Login.css";

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const VALID_USERNAME = "Olivier Claude";
    const VALID_PASSWORD = "GIL30";

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();

        console.log("Username tapé :", username);
        console.log("Password tapé :", password);

        if (username === VALID_USERNAME && password === VALID_PASSWORD) {
            localStorage.setItem("isLogged", "True");
            navigate("/dashboard");
        } else {
            alert("Identifiants incorrects");
        }
    };

    return (
        <div className="login-container">
            <div className="page-title">Gestion C.I.S GIL</div>

            <form onSubmit={handleSubmit} className="login-box">
                <h2>Connexion</h2>

                <input
                    type="text"
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
