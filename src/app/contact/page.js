import ContactForm from '@/components/ContactForm';

export const metadata = {
  title: 'Request Consultation - Billzy',
  description: 'Request a consultation with Billzy to discuss account management and payment solutions',
};

export default function RequestConsultation() {
  return (
    <section className="contact-section">
      <div className="container-small">
        <h1>Request Consultation</h1>
        <p style={{ marginBottom: '2rem', fontSize: '1.1rem', color: 'var(--text-light)' }}>
          Ready to get started? Fill out the form below and our team will reach out to discuss
          your account and available options.
        </p>
        <ContactForm />
      </div>
    </section>
  );
}
