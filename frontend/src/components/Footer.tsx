import BasicContactForm from "./BasicContactForm";
import InfoFooter from "./InfoFooter";
import "../css/footer.css";


export default function Footer() {
  return (
    <section className="footer-section">
      <div className="footer-inner">
        {/* Colonna sinistra */}
        <InfoFooter />
        
        {/* Colonna destra */}
        <div className="footer-form-col">
          <BasicContactForm />
        </div>
      </div>
    </section>
  );
}
