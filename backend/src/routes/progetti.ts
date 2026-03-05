import express from "express";
import type { Request, Response } from "express";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const router = express.Router();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.join(__dirname, "../data/progetti.json");

interface Progetto {
  id: number;
  title: string;
  imgUrl?: string;
  VideoUrl?: string;
  description: string;
  technologies: string[];
  liveDemoUrl?: string;
  githubUrl?: string;
  download?: string;
}

const leggiProgetti = (): Progetto[] => {
  const data = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(data);
};

const salvaProgetti = (progetti: Progetto[]): void => {
  fs.writeFileSync(filePath, JSON.stringify(progetti, null, 2));
};

router.get("/", (req: Request, res: Response) => {
  try {
    const progetti = leggiProgetti();
    res.json(progetti);
  } catch (err) {
    res.status(500).json({ error: "Errore nel caricamento" });
  }
});

router.get('/:id', (req: Request, res: Response) => {
  try {
    const progetti = leggiProgetti();
    const progetto = progetti.find(p => p.id === Number(req.params.id));
    
    if (!progetto) {
      res.status(404).json({ error: 'Progetto non trovato' });
      return;
    }
    
    res.json(progetto);
  } catch (err) {
    res.status(500).json({ error: 'Errore nel caricamento' });
  }
});

router.post("/", (req: Request, res: Response) => {
  try {
    const progetti = leggiProgetti();
    const nuovoId =
      progetti.length > 0 ? Math.max(...progetti.map((p) => p.id)) + 1 : 1;
    const nuovoProgetto: Progetto = { id: nuovoId, ...req.body };
    progetti.push(nuovoProgetto);
    salvaProgetti(progetti);
    res.json(nuovoProgetto);
  } catch (err) {
    res.status(400).json({ error: "Errore nella creazione" });
  }
});

router.patch("/:id", (req: Request, res: Response) => {
  try {
    const progetti = leggiProgetti();
    const index = progetti.findIndex((p) => p.id === Number(req.params.id));

    if (index === -1) {
      res.status(404).json({ error: "Progetto non trovato" });
      return;
    }

    progetti[index] = { ...progetti[index], ...req.body };
    salvaProgetti(progetti);
    res.json(progetti[index]);
  } catch (err) {
    res.status(400).json({ error: "Errore nell'aggiornamento" });
  }
});

router.delete("/:id", (req: Request, res: Response) => {
  try {
    const progetti = leggiProgetti();
    const index = progetti.findIndex((p) => p.id === Number(req.params.id));

    if (index === -1) {
      res.status(404).json({ error: "Progetto non trovato" });
      return;
    }

    const progettoEliminato = progetti.splice(index, 1);
    salvaProgetti(progetti);
    res.json({ message: "Progetto eliminato", progetto: progettoEliminato[0] });
  } catch (err) {
    res.status(400).json({ error: "Errore nell'eliminazione" });
  }
});

export default router;
