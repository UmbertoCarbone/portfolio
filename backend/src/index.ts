// Carica le variabili d'ambiente dal file .env
import "dotenv/config";
// Importa il middleware CORS per abilitare le richieste cross-origin
import cors from "cors";
// Importa Express
import express from "express";
// Importa i tipi per le richieste e risposte Express (solo per TypeScript)
import type { Request, Response } from "express";
// Importa le route personalizzate
import progettiRoutes from "./routes/progetti.js";
import certificazioniRoutes from "./routes/certificazioni.js";

// Inizializza l'app Express
const app = express();
// Porta su cui ascoltare (presa da variabile d'ambiente)
const port = process.env.PORT
// Abilita CORS per tutte le origini
app.use(cors());
// Abilita il parsing del body JSON nelle richieste
app.use(express.json());
// Serve la cartella "public" e tutte le sue sottocartelle come file statici
app.use(express.static("public"));

// Usa le route per /api/progetti e /api/certificazioni
app.use("/api/progetti", progettiRoutes);
app.use("/api/certificazioni", certificazioniRoutes);

// Rotta di test per la root
app.get("/", (req: Request, res: Response) => {
  try {
    res.status(200).json({ message: "Server VERCEL funzionante" });
  } catch (err) {
    res.status(500).json({ message: "Errore del server VERCEL" });
  }
});
// Avvia il server sulla porta specificata
app.listen(port, () => {
  console.log(`Server in ascolto sulla porta ${port}`);
});


