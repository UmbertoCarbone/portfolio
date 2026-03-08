import emailjs from "@emailjs/browser";

export type ContactFormData = {
  name: string;
  email: string;
  title: string;
  message: string;
  time?: string; // opzionale, verrà aggiunto in automatico
};

export async function sendContactEmail(data: ContactFormData): Promise<{ success: boolean; error?: string }> {
  try {
    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    // Aggiungi il campo time se non presente
    const dataWithTime = {
      ...data,
      time: data.time || new Date().toLocaleString()
    };
    await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      dataWithTime,
      PUBLIC_KEY
    );
    return { success: true };
  } catch (error) {
    console.error("Errore invio EmailJS:", error);
    return { success: false, error: "Errore nell'invio. Riprova più tardi." };
  }
}
