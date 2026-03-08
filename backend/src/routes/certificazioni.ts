import express from 'express';
import type { Request, Response } from 'express';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

const router = express.Router();

interface Certificazione {
  id: number;
  nome: string;
  imgUrl: string;
  ente: string;
  data?: string;
  descrizione?: string;
}

const leggiCertificazioni = (): Certificazione[] => {
  return require('../data/certificazioni.json') as Certificazione[];
};

router.get('/', (req: Request, res: Response) => {
  try {
    const certificazioni = leggiCertificazioni();
    res.json(certificazioni);
  } catch (err) {
    res.status(500).json({ error: 'Errore nel caricamento' });
  }
});

router.get('/:id', (req: Request, res: Response) => {
  try {
    const certificazioni = leggiCertificazioni();
    const certificazione = certificazioni.find(c => c.id === Number(req.params.id));
    
    if (!certificazione) {
      res.status(404).json({ error: 'Certificazione non trovata' });
      return;
    }
    
    res.json(certificazione);
  } catch (err) {
    res.status(500).json({ error: 'Errore nel caricamento' });
  }
});

export default router;