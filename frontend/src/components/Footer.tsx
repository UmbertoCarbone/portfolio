import BasicContactForm from "./BasicContactForm";
import InfoFooter from "./InfoFooter";


export default function Footer() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 text-space-grotesk">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center text-center lg:items-start lg:text-left">
        {/* Colonna sinistra */}
        <InfoFooter />
        
        {/* Colonna destra */}
        <div className="flex-1 w-full">
          <BasicContactForm />
        </div>
      </div>
    </section>
  );
}
