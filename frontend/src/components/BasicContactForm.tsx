import { useRef, useState } from "react";
import type { ContactFormData } from "../../services/ContactService";
import { sendContactEmail } from "../../services/ContactService";

// Solo lettere (incluse accentate) e spazi
const nameRegex = /^[a-zA-ZÀ-ÿ\s]+$/;
// Deve contenere @ e avere formato email valido (gestito da type="email" + pattern)
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// Titolo: lettere, numeri, spazi e punteggiatura base (. , ! ? - _)
const titleRegex = /^[a-zA-ZÀ-ÿ0-9\s.,!?'\-_]+$/;
// Messaggio: lettere, numeri, spazi e punteggiatura base (no simboli speciali)
const messageRegex = /^[a-zA-ZÀ-ÿ0-9\s.,!?'\-\n]+$/;

export default function BasicContactForm() {
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const titleRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);
  const [status, setStatus] = useState<string | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);

  const validate = (data: ContactFormData): boolean => {
    const newErrors: Record<string, string> = {};
    if (!nameRegex.test(data.name))
      newErrors.name = "Il nome non può contenere numeri o simboli.";
    if (!emailRegex.test(data.email))
      newErrors.email = "Inserisci un'email valida con @.";
    if (!titleRegex.test(data.title))
      newErrors.title = "Il titolo può contenere lettere, numeri e punteggiatura base.";
    if (!messageRegex.test(data.message))
      newErrors.message = "Il messaggio non può contenere simboli speciali.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);
    const data: ContactFormData = {
      name: nameRef.current?.value || "",
      email: emailRef.current?.value || "",
      title: titleRef.current?.value || "",
      message: messageRef.current?.value || "",
    };
    if (!validate(data)) {
      setLoading(false);
      return;
    }
    const result = await sendContactEmail(data);
    setLoading(false);
    if (result.success) {
      setStatus("Messaggio inviato con successo!");
      if (nameRef.current) nameRef.current.value = "";
      if (emailRef.current) emailRef.current.value = "";
      if (titleRef.current) titleRef.current.value = "";
      if (messageRef.current) messageRef.current.value = "";
      setTimeout(() => setStatus(null), 3000);
      console.log("Messaggio inviato con successo!");
    } else {
      setStatus(result.error || "Errore nell'invio.");
      setTimeout(() => setStatus(null), 3000);
      console.log(result.error || "Errore nell'invio.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="relative flex flex-col bg-white/2 border border-white/10 rounded-3xl overflow-hidden p-8 gap-4 shadow-lg max-w-xl mx-auto w-full"
    >
      <h3 className="text-white font-semibold text-2xl mb-2">Contattami</h3>
      <div className="flex flex-col gap-1">
        <input
          name="name"
          placeholder="Nome"
          ref={nameRef}
          required
          onInput={(e) => {
            e.currentTarget.value = e.currentTarget.value.replace(/[^a-zA-ZÀ-ÿ\s]/g, "");
          }}
          className={`bg-white/5 border rounded-xl px-4 py-2 text-white placeholder-white/40 focus:border-violet-500 outline-none transition ${errors.name ? "border-red-500" : "border-white/10"}`}
        />
        {errors.name && <span className="text-red-400 text-xs">{errors.name}</span>}
      </div>
      <div className="flex flex-col gap-1">
        <input
          name="email"
          type="email"
          placeholder="Email"
          ref={emailRef}
          required
          className={`bg-white/5 border rounded-xl px-4 py-2 text-white placeholder-white/40 focus:border-violet-500 outline-none transition ${errors.email ? "border-red-500" : "border-white/10"}`}
        />
        {errors.email && <span className="text-red-400 text-xs">{errors.email}</span>}
      </div>
      <div className="flex flex-col gap-1">
        <input
          name="title"
          placeholder="Titolo"
          ref={titleRef}
          required
          className={`bg-white/5 border rounded-xl px-4 py-2 text-white placeholder-white/40 focus:border-violet-500 outline-none transition ${errors.title ? "border-red-500" : "border-white/10"}`}
        />
        {errors.title && <span className="text-red-400 text-xs">{errors.title}</span>}
      </div>
      <div className="flex flex-col gap-1">
        <textarea
          name="message"
          placeholder="Messaggio"
          ref={messageRef}
          required
          rows={4}
          onInput={(e) => {
            e.currentTarget.value = e.currentTarget.value.replace(/[^a-zA-ZÀ-ÿ0-9\s.,!?'\-\n]/g, "");
          }}
          className={`bg-white/5 border rounded-xl px-4 py-2 text-white placeholder-white/40 focus:border-violet-500 outline-none transition ${errors.message ? "border-red-500" : "border-white/10"}`}
        />
        {errors.message && <span className="text-red-400 text-xs">{errors.message}</span>}
      </div>
      <button
        type="submit"
        disabled={loading}
        className="mt-2 bg-violet-600 hover:bg-violet-700 text-white font-semibold py-2 rounded-xl transition disabled:opacity-60"
      >
        {loading ? "Invio..." : "Invia"}
      </button>
      {status && (
        <div className="fixed bottom-6 right-6 z-50 bg-violet-600 text-white text-sm font-semibold px-6 py-3 rounded-2xl shadow-lg">
          {status}
        </div>
      )}
    </form>
  );
}
