import express from "express";
import type { Request, Response } from "express";
import progettiRoutes from "./routes/progetti.js";
import certificazioniRoutes from "./routes/certificazioni.js";

const app = express();
const port = process.env.PORT

app.use(express.json());

app.use("/api/progetti", progettiRoutes);
app.use("/api/certificazioni", certificazioniRoutes);

app.get("/", (req: Request, res: Response) => {
  try {
    res.status(200).json({ message: "Server VERCEL funzionante" });
  } catch (err) {
    res.status(500).json({ message: "Errore del server VERCEL" });
  }
});
app.listen(port, () => {
  console.log(`Server in ascolto sulla porta ${port}`);
});


