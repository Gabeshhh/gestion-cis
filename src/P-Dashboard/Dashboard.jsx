import { useEffect, useState } from 'react';

import './Dashboard.css'

export default function Dashboard() {
    const [pojCount, setPojCount] = useState(0);

    useEffect(() => {
        const fetchPOJ = async () => {
            try {
                const response = await fetch(
                    "http://localhost:3001/api/poj",
                    {
                        headers: {
                            "Content-Type": "application/json",
                            "Authorization": "Bearer TOKENTOKEN"
                        }
                    }
                );

                const data = await response.json();
                console.log("POJ :", data)

                const nombre = data.result.length;
                setPojCount(nombre);
            } catch (error) {
                console.error("Erreur POJ : ", error);
            }
        };

        fetchPOJ();
    }, []);

    return (
        <div className="dashboard-container">
            <h1 className="dasboard-title">Gestion C.I.S GIL</h1>
            <div className="card-container">
                <div className="card">
                    <h2>Personnels présents de garde</h2>
                    <p className="card-number">{pojCount}</p>
                </div>
            </div>
        </div>
    );
}