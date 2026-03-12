import { useState, type FormEvent } from "react";
import type { ContactFormData } from "../../services/ContactService";
import { sendContactEmail } from "../../services/ContactService";
import "../css/footer.css";

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
    label: "EMAIL",
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
      className="contact-form"
    >
      <h3 className="contact-form-title">Contattami</h3>

      {FIELDS.map(({ name, placeholder, type, rows, label }) => (
        <div key={name} className="contact-field">
          {label && (
            <span className="contact-label">
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
              className={`contact-input ${errors[name] ? "border-red-500" : "border-white/10"}`}
            />
          ) : (
            <input
              name={name}
              type={type}
              placeholder={placeholder}
              value={form[name as keyof ContactFormData]}
              onChange={(e) => handleChange(name, e.target.value)}
              required
              className={`contact-input ${errors[name] ? "border-red-500" : "border-white/10"}`}
            />
          )}
          {errors[name] && (
            <span className="contact-error">{errors[name]}</span>
          )}
        </div>
      ))}

      <button
        type="submit"
        disabled={loading}
        className="contact-submit"
      >
        {loading ? "Invio..." : "Invia"}
      </button>

      {status && (
        <div
          className={`contact-status ${status ? "text-violet-400" : "text-transparent"}`}
        >
          {status || " "}
        </div>
      )}
    </form>
  );
}
