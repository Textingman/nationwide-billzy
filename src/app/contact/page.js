import Link from 'next/link';

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
          Ready to get started with Billzy wealth management? Fill out the form below and our team will reach out to discuss your account and available options.
        </p>
        <p style={{ marginBottom: '2rem', color: 'var(--text-light)' }}>
          You can also reach us directly at{' '}
          <a href="mailto:support@billzy1.com" style={{ color: 'var(--primary-color)' }}>support@billzy1.com</a>{' '}
          or call <a href="tel:+18883319521" style={{ color: 'var(--primary-color)' }}>+1 (888) 331-9521</a>.
        </p>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Link href="/contact-us" className="btn btn-primary">
            Contact Us
          </Link>
          <Link href="/early-access" className="btn btn-secondary">
            Get Early Access to AI
          </Link>
        </div>
      </div>
    </section>
  );
}
