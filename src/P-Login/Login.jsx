import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./Login.css";

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    
    const navigate = useNavigate();

    const handleSumbit = async (event) => {
        event.preventDefault();

        try {
            const authResponse = await fetch( "http://localhost:3001/api/login",
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        "userNameOrEmailAddress": username,
                        "password": password
                    }),
                }
            );

            const authData = await authResponse.json();
            console.log("Réponse Auth :", authData);

            // Token
            const token = authData.result.accessToken;

            localStorage.setItem("token", token);

            navigate("/dashboard");
        } catch (error) {
            console.error("Erreur login Smart.CS ", error);
            alert("Erreur de connexion");
        };

        console.log("Entrez votre username : ", username, password);
        alert("Connexion en cours !");
        navigate("/dashboard")
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