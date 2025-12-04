process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

import express from "express";
import fetch from "node-fetch";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

// AUTHENTIFICATION
app.post("/api/login", async (req, res) => {
  try {
    const response = await fetch(
      "https://smartcs.sdis30.fr/api/TokenAuth/Authenticate",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userNameOrEmailAddress: req.body.userNameOrEmailAddress,
          password: req.body.password
        }),
      }
    );

    const data = await response.json();
    return res.json(data);

  } catch (err) {
    console.error("Erreur login backend :", err);
    return res.status(500).json({ error: "Erreur backend login" });
  }
});

// POJ
app.get("/api/poj", async (req, res) => {
  try {
    const token = req.headers.authorization;

    const response = await fetch(
      "https://smartcs.sdis30.fr/api/services/app/Dispo/GetCurrentPojAsync?Filter=GIL",
      {
        headers: {
          "Authorization": token,
          "Content-Type": "application/json"
        },
      }
    );

    const data = await response.json();
    return res.json(data);

  } catch (err) {
    console.error("Erreur backend POJ :", err);
    return res.status(500).json({ error: "Erreur backend POJ" });
  }
});

app.listen(3001, () => console.log("Backend lancé sur port 3001"));
