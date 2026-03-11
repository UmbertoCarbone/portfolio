
# Portfolio — Umberto Carbone

[🌐 Sito online](https://umbertocarbone.vercel.app/)

Portfolio personale di **Umberto Carbone**, Junior Full Stack Developer.  
Sviluppato interamente in React + TypeScript con animazioni WebGL, routing client-side e invio email senza backend.

> 🚀 Deploy su **Vercel** 

---

## Struttura del progetto

```
portfolio/
└── frontend/           # Applicazione React (Vite)
    ├── public/         # Asset statici (immagini, PDF, favicon)
    │   ├── certificazioni/   # Immagini certificazioni
    │   └── projects/         # Screenshot e video dei progetti
    ├── services/       # Servizi separati dalla UI (es. invio email)
    └── src/
        ├── assets/         # Asset importati via bundler
        ├── components/     # Componenti React riutilizzabili
        ├── data/           # Dati JSON (progetti, certificazioni)
        ├── layout/         # Layout globale (navbar, outlet)
        ├── lib/            # Utility e componenti generici (Lightning, cn)
        └── pages/          # Pagine dell'app (Homepage, Profilo)
```

---



## Componenti principali

| Componente | Descrizione |
|---|---|
| `MainLayout` | Layout globale con navbar floating animata e bottone pausa |
| `HeroContent` | Hero della homepage: foto profilo, titolo, link e social |
| `IconsHero` | Icone social (GitHub, LinkedIn, Email) con animazione bordo rotante |
| `Lightning` | Animazione WebGL full-screen con shader GLSL generativo |
| `PauseFrameButton` | Bottone nella navbar per mettere in pausa l'animazione |
| `Section_AboutMe` | Sezione biografia con testo e foto profilo |
| `Section_Skills` | Carousel infinito a doppia riga con icone delle tecnologie conosciute |
| `Section_Project` | Grid dei progetti con modal per immagini e video |
| `Section_Certifications` | Grid delle certificazioni con modal di anteprima |
| `VideoModal` | Modal fullscreen per visualizzare immagini o video a schermo intero |
| `BasicContactForm` | Form di contatto con validazione lato client e invio via EmailJS |
| `Footer` | Footer con form di contatto e informazioni di contatto |
| `InfoFooter` | Colonna sinistra del footer con messaggio e link social |

---

## Tecnologie core

| Tecnologia | Versione | Ruolo |
|---|---|---|
| **React** | ^19.2 | Libreria UI dichiarativa con rendering efficiente |
| **TypeScript** | ~5.9 | Tipizzazione statica su tutto il codebase |
| **Vite** | ^7.3 | Build tool e dev server ultra-rapido (ESM nativo) |
| **Tailwind CSS** | ^4.2 | Framework utility-first per lo styling inline |
| **React Router DOM** | ^7.13 | Routing client-side con `BrowserRouter` e `Outlet` |

---

## Dipendenze di produzione

| Pacchetto | Versione | Descrizione |
|---|---|---|
| `react` + `react-dom` | ^19.2 | Librerie core React per UI e rendering nel DOM |
| `react-router-dom` | ^7.13 | Routing client-side, layout condiviso via `<Outlet>`, contesto tra pagine |
| `framer-motion` | ^12.34 | Animazioni React — entrata navbar, hover/tap scale |
| `three` + `@react-three/fiber` + `@react-three/drei` | ^0.183 / ^9.5 / ^10.7 | Stack 3D WebGL con Three.js e relativi helper React |
| `@emailjs/browser` | ^4.4 | Invio email direttamente dal browser senza backend |
| `lucide-react` | ^0.575 | Icone SVG come componenti React (social, azioni UI) |
| `devicon` + `devicon-react-svg` | ^2.17 / ^0.2 | Icone delle tecnologie nella sezione Skills |
| `clsx` + `tailwind-merge` | ^2.1 / ^3.5 | Composizione sicura di classi CSS Tailwind (usate nella funzione `cn()`) |

---

## Dipendenze di sviluppo

### `vite` — `^7.3.1`
Build tool moderno basato su ESM nativo. Offre un dev server velocissimo con HMR (Hot Module Replacement) e build ottimizzate con Rollup.

### `@vitejs/plugin-react` — `^5.1.1`
Plugin Vite che abilita il supporto a React: Fast Refresh (HMR dei componenti), trasformazione JSX con Babel/SWC.

### `typescript` — `~5.9.3`
Compilatore TypeScript. Usato da Vite nella pipeline di build (`tsc -b && vite build`).

### `tailwindcss` — `^4.2.0`
Framework CSS utility-first. La versione 4 usa una configurazione semplificata ed è integrata direttamente come plugin PostCSS.

### `@tailwindcss/postcss` — `^4.2.0`
Plugin PostCSS ufficiale per Tailwind CSS v4. Permette a PostCSS di processare ed iniettare le classi Tailwind nel CSS finale.

### `postcss` — `^8.5.6`
Toolchain di trasformazione CSS. Esegue i plugin (Tailwind, Autoprefixer) sul CSS sorgente prima del bundle.

### `autoprefixer` — `^10.4.24`
Plugin PostCSS che aggiunge automaticamente i prefissi vendor (`-webkit-`, `-moz-`, ecc.) per garantire la compatibilità cross-browser.

### `eslint` — `^9.39.1`
Linter JavaScript/TypeScript per rilevare errori e imporre convenzioni stilistiche.

### `@eslint/js` — `^9.39.1`
Configurazione base di ESLint per JavaScript (regole consigliate).

### `typescript-eslint` — `^8.48.0`
Integrazione TypeScript per ESLint: parser e regole specifiche per il codice TS.

### `eslint-plugin-react-hooks` — `^7.0.1`
Regole ESLint per l'uso corretto degli Hook React (es. `exhaustive-deps`, `rules-of-hooks`).

### `eslint-plugin-react-refresh` — `^0.4.24`
Regola ESLint che avvisa se un componente non è compatibile con React Fast Refresh.

### `globals` — `^16.5.0`
Definizioni delle variabili globali (browser, Node, ecc.) per ESLint.

### `@types/node` — `^24.10.1`
Tipi TypeScript per le API di Node.js.

### `@types/react` & `@types/react-dom` — `^19.x`
Definizioni TypeScript per React e ReactDOM.

---

## Font e asset esterni

- **Space Grotesk** — Font sans-serif geometrico, usato per testi generali dell'interfaccia.
- **Libre Caslon Text** — Font serif elegante, disponibile come alternativa decorativa.
- **Devicon CDN** — Caricato via `<link>` in `index.html` per le icone animabili nella sezione Skills.

---




---

## Script disponibili

| Comando | Descrizione |
|---|---|
| `npm run dev` | Avvia il dev server Vite con HMR su `http://localhost:5173` |
| `npm run build` | Compila TypeScript e produce il bundle ottimizzato in `dist/` |
| `npm run preview` | Serve il bundle di produzione in locale per il testing |
| `npm run lint` | Esegue ESLint sull'intero codebase |

---

## Deploy

Il progetto è configurato per il deploy su **Vercel** tramite `vercel.json`:

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "installCommand": "npm install",
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
