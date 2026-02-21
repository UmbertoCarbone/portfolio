import express from 'express';
import type { Request, Response } from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const router = express.Router();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.join(__dirname, '../data/certificazioni.json');

interface Certificazione {
  id: number;
  nome: string;
  ente: string;
  data: string;
}

const leggiCertificazioni = (): Certificazione[] => {
  const data = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(data);
};

const salvaCertificazioni = (certificazioni: Certificazione[]): void => {
  fs.writeFileSync(filePath, JSON.stringify(certificazioni, null, 2));
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

router.post('/', (req: Request, res: Response) => {
  try {
    const certificazioni = leggiCertificazioni();
    const nuovoId = certificazioni.length > 0 ? Math.max(...certificazioni.map(c => c.id)) + 1 : 1;
    const nuovaCertificazione: Certificazione = { id: nuovoId, ...req.body };
    certificazioni.push(nuovaCertificazione);
    salvaCertificazioni(certificazioni);
    res.json(nuovaCertificazione);
  } catch (err) {
    res.status(400).json({ error: 'Errore nella creazione' });
  }
});

router.patch('/:id', (req: Request, res: Response) => {
  try {
    const certificazioni = leggiCertificazioni();
    const index = certificazioni.findIndex(c => c.id === Number(req.params.id));
    
    if (index === -1) {
      res.status(404).json({ error: 'Certificazione non trovata' });
      return;
    }
    
    certificazioni[index] = { ...certificazioni[index], ...req.body };
    salvaCertificazioni(certificazioni);
    res.json(certificazioni[index]);
  } catch (err) {
    res.status(400).json({ error: 'Errore nell\'aggiornamento' });
  }
});

router.delete('/:id', (req: Request, res: Response) => {
  try {
    const certificazioni = leggiCertificazioni();
    const index = certificazioni.findIndex(c => c.id === Number(req.params.id));
    
    if (index === -1) {
      res.status(404).json({ error: 'Certificazione non trovata' });
      return;
    }
    
    const certificazioneEliminata = certificazioni.splice(index, 1);
    salvaCertificazioni(certificazioni);
    res.json({ message: 'Certificazione eliminata', certificazione: certificazioneEliminata[0] });
  } catch (err) {
    res.status(400).json({ error: 'Errore nell\'eliminazione' });
  }
});

export default router;