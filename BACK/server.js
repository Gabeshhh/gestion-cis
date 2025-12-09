import express from "express";
import sqlite3 from "sqlite3";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const PORT = 3001;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dbPath = path.join(__dirname, "navettes.db");


// Middlewares
app.use(cors());
app.use(express.json());

// SQLite

const db = new sqlite3.Database("./navettes.db", (err) => {
  if (err) {
    console.error("❌ Erreur SQLite :", err.message);
  } else {
    console.log("✅ Connecté à la base SQLite");
  }
});

// Création de la table
db.run(`
  CREATE TABLE IF NOT EXISTS navettes (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    date TEXT NOT NULL,
    arrive TEXT NOT NULL,
    depart TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  )
`);

// Route test
app.get("/api/health", (req, res) => {
  res.json({
    status: "OK",
    message: "Backend opérationnel ✅"
  });
});

// Ajouter une navette
app.post("/api/navette", (req, res) => {
  const { date, arrive, depart } = req.body;

  if (!date || !arrive) {
    return res.status(400).json({ error: "Champs obligatoires manquants" });
  }

  const sql = `
    INSERT INTO navettes (date, arrive, depart)
    VALUES (?, ?, ?)
  `;

  db.run(sql, [date, arrive, depart], function (err) {
    if (err) {
      console.error(err.message);
      return res.status(500).json({ error: err.message });
    }

    res.json({ success: true, id: this.lastID });
  });
});

// Récupérer les navettes
app.get("/api/navettes", (req, res) => {
  db.all(
    "SELECT * FROM navettes ORDER BY created_at DESC LIMIT 5",
    [],
    (err, rows) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }

      res.json(rows);
    }
  );
});

// Lancement serveur
app.listen(PORT, () => {
  console.log(`🚒 Backend CIS lancé sur http://localhost:${PORT}`);
});
