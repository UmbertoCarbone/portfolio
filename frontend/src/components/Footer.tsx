import BasicContactForm from "./BasicContactForm";
import InfoFooter from "./InfoFooter";

export default function Footer() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 text-space-grotesk">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
        {/* Colonna sinistra – placeholder */}
        <InfoFooter />

        {/* Colonna destra – form */}
        <div className="flex-1 w-full">
          <BasicContactForm />
        </div>
      </div>
    </section>
  );
}
