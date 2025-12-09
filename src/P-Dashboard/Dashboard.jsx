import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";

import './Dashboard.css';

export default function Dashboard() {
    const navigate = useNavigate();

    useEffect(() => {
        const loggedIn = localStorage.getItem("isLogged");

        if (loggedIn !== "True") {
            navigate("/");
        }
    }, [navigate]);

    return (
        <div className="dashboard-container">
            <h1 className="dashboard-title">Bienvenue sur le Dashboard du C.I.S GIL</h1>


            <div className="left-panel">
                <button className="menu-button" onClick={() => navigate("/navette")}>
                    Navette
                </button>

                <button className="menu-button">
                    Interventions
                </button>

                <button className="menu-button">
                    Véhicules
                </button>

                <button className="menu-button">
                    POJ
                </button>
                <button className="menu-button" onClick={() => navigate("/navette")}>
                    Navette
                </button>

                <button className="menu-button">
                    Interventions
                </button>

                <button className="menu-button">
                    Véhicules
                </button>

                <button className="menu-button">
                    POJ
                </button>
                <button className="menu-button" onClick={() => navigate("/navette")}>
                    Navette
                </button>

                <button className="menu-button">
                    Interventions
                </button>

                <button className="menu-button">
                    Véhicules
                </button>

                <button className="menu-button">
                    POJ
                </button>
            </div>

        </div>
    );
}