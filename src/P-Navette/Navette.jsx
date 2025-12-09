import { useState } from "react";
import "./Navette.css";

export default function Navette() {
    const [date, setDate] = useState("");
    const [arrive, setArrive] = useState("");
    const [depart, setDepart] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch("http://localhost:3001/api/navette", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    date,
                    arrive,
                    depart
                })
            });

            if (!response.ok) {
                throw new Error("Erreur lors de l'enregistrement");
            }

            alert("Logs Navette enregistré ✅");

            setDate("");
            setArrive("");
            setDepart("");

        } catch (error) {
            console.error(error);
            alert("Erreur lors de l'enregistrement ❌");
        }
    };

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit} className="form-box">
                <h2>Suivi</h2>

                <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    required
                />

                <input
                    type="text"
                    placeholder="Arrivée de la navette"
                    value={arrive}
                    onChange={(e) => setArrive(e.target.value)}
                    required
                />

                <input
                    type="text"
                    placeholder="Départ de la navette"
                    value={depart}
                    onChange={(e) => setDepart(e.target.value)}
                />

                <button type="submit">Envoyer les données</button>
            </form>
        </div>
    );
}
