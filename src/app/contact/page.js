import ContactForm from '@/components/ContactForm';

export const metadata = {
  title: 'Contact Us - Billzy',
  description: 'Get in touch with Billzy for expert financial services and portfolio management solutions',
};

export default function Contact() {
  return (
    <>
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

      {/* Our Location */}
      <section style={{ padding: '80px 0', background: 'linear-gradient(135deg, #e8f0f7 0%, #f5f7fa 100%)' }}>
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: 'var(--text-dark)' }}>Our Location</h2>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-light)', marginBottom: '2rem', lineHeight: '1.8' }}>Based in Henderson, Nevada, we serve clients nationwide with our comprehensive financial services expertise.</p>
            <div className="location-details">
              <h4>Office Address</h4>
              <p>4300 E. Sunset Road Ste D1<br />Henderson, NV 89014</p>
              
              <h4>Business Hours</h4>
              <p>
                Monday-Thursday: 7:00 – 17:00 PST<br />
                Friday: 6:00 – 16:00 PST<br />
                Holidays and weekends: Closed
              </p>
              
              <h4>Contact</h4>
              <p>
                Phone: <a href="tel:888-331-9521">888-331-9521</a><br />
                Email: <a href="mailto:support@billzy1.com">support@billzy1.com</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
