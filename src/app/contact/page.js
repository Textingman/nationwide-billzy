import ContactForm from '@/components/ContactForm';

export const metadata = {
  title: 'Contact Us - Billzy',
  description: 'Get in touch with Billzy for expert financial services and portfolio management solutions',
};

export default function Contact() {
  return (
    <section className="contact-section">
      <div className="container-small">
        <h1>Contact Us</h1>
        <p style={{ marginBottom: '2rem', fontSize: '1.1rem', color: 'var(--text-light)' }}>
          Get in touch with us to discuss how we can help optimize your portfolio performance. 
          Fill out the form below and our team will respond promptly.
        </p>
        <ContactForm />
      </div>
    </section>
  );
}
