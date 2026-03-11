import { useState, type FormEvent } from "react";
import type { ContactFormData } from "../../services/ContactService";
import { sendContactEmail } from "../../services/ContactService";

// --- Configurazione campi ---
const FIELDS = [
  {
    name: "name",
    label: "NOME",
    placeholder: "Nome / Azienda",
    type: "text",
    rows: undefined,
    uppercase: true,
  },
  {
    name: "email",
    label: undefined,
    placeholder: "Email",
    type: "email",
    rows: undefined,
    uppercase: false,
  },
  {
    name: "title",
    label: "TITOLO",
    placeholder: "Titolo",
    type: "text",
    rows: undefined,
    uppercase: true,
  },
  {
    name: "message",
    label: "MESSAGGIO",
    placeholder: "Messaggio",
    type: "textarea",
    rows: 4,
    uppercase: true,
  },
] as const;

// --- Regex di validazione per campo ---
const VALIDATORS: Record<string, { regex: RegExp; error: string }> = {
  name: {
    regex: /^[a-zA-ZÀ-ÿ\s]+$/,
    error: "Il nome non può contenere numeri o simboli.",
  },
  email: {
    regex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    error: "Inserisci un'email valida con @.",
  },
  title: {
    regex: /^[a-zA-ZÀ-ÿ0-9\s.,!?'\-_]+$/,
    error: "Il titolo può contenere lettere, numeri e punteggiatura base.",
  },
  message: {
    regex: /^[a-zA-ZÀ-ÿ0-9\s.,!?'\-\n]+$/,
    error: "Il messaggio non può contenere simboli speciali.",
  },
};

// --- Sanitizzazione input per campo ---
const SANITIZERS: Record<string, RegExp> = {
  name: /[^a-zA-ZÀ-ÿ\s]/g,
  message: /[^a-zA-ZÀ-ÿ0-9\s.,!?'\-\n]/g,
};

const INPUT_CLASS =
  "bg-white/5 border rounded-xl px-4 py-2 text-white placeholder-white/40 focus:border-violet-500 outline-none transition";

const EMPTY_FORM: ContactFormData = {
  name: "",
  email: "",
  title: "",
  message: "",
};

export default function BasicContactForm() {
  const [form, setForm] = useState<ContactFormData>({ ...EMPTY_FORM });
  const [errors, setErrors] = useState<Partial<Record<string, string>>>({});
  const [status, setStatus] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const UPPERCASE_FIELDS = ["name", "title", "message"];

  const handleChange = (name: string, value: string) => {
    const sanitizer = SANITIZERS[name];
    let sanitized = sanitizer ? value.replace(sanitizer, "") : value;
    if (UPPERCASE_FIELDS.includes(name)) sanitized = sanitized.toUpperCase();
    setForm((prev) => ({ ...prev, [name]: sanitized }));
  };

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};
    for (const [field, { regex, error }] of Object.entries(VALIDATORS)) {
      if (!regex.test(form[field as keyof ContactFormData] ?? "")) {
        newErrors[field] = error;
      }
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    setStatus(null);

    const result = await sendContactEmail(form);
    setLoading(false);

    if (result.success) {
      setForm({ ...EMPTY_FORM });
      setStatus("Messaggio inviato con successo!");
    } else {
      setStatus(result.error || "Errore nell'invio.");
    }

    setTimeout(() => setStatus(null), 3000);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="relative flex flex-col bg-white/2 border border-white/10 rounded-3xl overflow-hidden p-8 gap-4 shadow-lg max-w-xl mx-auto w-full"
    >
      <h3 className="text-white font-semibold text-2xl mb-2">Contattami</h3>

      {FIELDS.map(({ name, placeholder, type, rows, label }) => (
        <div key={name} className="flex flex-col gap-1">
          {label && (
            <span className="text-white/50 text-xs uppercase tracking-widest font-semibold">
              {label}
            </span>
          )}
          {type === "textarea" ? (
            <textarea
              name={name}
              placeholder={placeholder}
              value={form[name as keyof ContactFormData]}
              onChange={(e) => handleChange(name, e.target.value)}
              required
              rows={rows}
              className={`${INPUT_CLASS} ${errors[name] ? "border-red-500" : "border-white/10"}`}
            />
          ) : (
            <input
              name={name}
              type={type}
              placeholder={placeholder}
              value={form[name as keyof ContactFormData]}
              onChange={(e) => handleChange(name, e.target.value)}
              required
              className={`${INPUT_CLASS} ${errors[name] ? "border-red-500" : "border-white/10"}`}
            />
          )}
          {errors[name] && (
            <span className="text-red-400 text-xs">{errors[name]}</span>
          )}
        </div>
      ))}

      <button
        type="submit"
        disabled={loading}
        className="mt-2 bg-violet-600 hover:bg-violet-700 text-white font-semibold py-2 rounded-xl transition disabled:opacity-60"
      >
        {loading ? "Invio..." : "Invia"}
      </button>

      {status && (
        <div
          className={`mt-4 min-h-8 text-center text-lg font-bold transition-colors duration-300 ${status ? "text-violet-400" : "text-transparent"}`}
        >
          {status || " "}
        </div>
      )}
    </form>
  );
}
