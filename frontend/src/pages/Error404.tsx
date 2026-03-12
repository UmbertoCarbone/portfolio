import { Link } from "react-router-dom";

export default function Error404() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-7xl font-extrabold text-violet-500 mb-4 drop-shadow-lg">
        404
      </h1>
      <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
        Pagina non trovata
      </h2>
      <p className="text-slate-300 mb-8 text-center max-w-md">
        Oops! La pagina che cerchi non esiste o è stata spostata.
        <br />
        Torna indietro e continua a esplorare il portfolio!
      </p>
      <div className="flex gap-4">
        <Link
          to="/"
          className="px-6 py-2 rounded-lg bg-violet-600 hover:bg-violet-700 text-white font-semibold shadow transition"
        >
          Home
        </Link>
        <Link
          to="/profilo"
          className="px-6 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white font-semibold border border-white/20 transition"
        >
          Profilo
        </Link>
      </div>
    </div>
  );
}
