import express from "express";
import type { Request, Response } from "express";
import { createRequire } from "module";

const require = createRequire(import.meta.url);

const router = express.Router();

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
  return require("../data/progetti.json") as Progetto[];
};

router.get("/", (req: Request, res: Response) => {
  try {
    const progetti = leggiProgetti();
    res.json(progetti);
  } catch (err) {
    res.status(500).json({ error: "Errore nel caricamento" });
  }
});

router.get("/:id", (req: Request, res: Response) => {
  try {
    const progetti = leggiProgetti();
    const progetto = progetti.find((p) => p.id === Number(req.params.id));

    if (!progetto) {
      res.status(404).json({ error: "Progetto non trovato" });
      return;
    }

    res.json(progetto);
  } catch (err) {
    res.status(500).json({ error: "Errore nel caricamento" });
  }
});

export default router;
