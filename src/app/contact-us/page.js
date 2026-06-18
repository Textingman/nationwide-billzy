export const metadata = {
  title: 'Contact Us - Billzy',
  description: 'Contact Billzy with questions or feedback',
};

export default function ContactUs() {
  return (
    <section className="contact-section">
      <div className="container-small">
        <h1>Contact Us</h1>
        <p style={{ marginBottom: '2rem', fontSize: '1.1rem', color: 'var(--text-light)' }}>
          Have a question or need help? Reach out to us directly or send us a message below.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', marginBottom: '3rem' }}>
          <div>
            <h2 style={{ fontSize: '1.25rem', marginBottom: '1.5rem' }}>Get in Touch</h2>
            <div style={{ marginBottom: '1rem' }}>
              <strong>Email</strong><br />
              <a href="mailto:support@billzy1.com" style={{ color: 'var(--primary)' }}>support@billzy1.com</a>
            </div>
            <div style={{ marginBottom: '1rem' }}>
              <strong>Phone</strong><br />
              <a href="tel:+18883319521" style={{ color: 'var(--primary)' }}>+1 (888) 331-9521</a>
            </div>
            <div style={{ marginBottom: '1rem' }}>
              <strong>Address</strong><br />
              Billzy, LLC<br />
              Las Vegas, NV
            </div>
          </div>

          <div>
            <h2 style={{ fontSize: '1.25rem', marginBottom: '1.5rem' }}>Send a Message</h2>
            <form className="contact-form" action="mailto:support@billzy1.com" method="post" encType="text/plain">
              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea id="message" name="message" rows={5} required style={{ width: "100%", padding: "0.75rem", borderRadius: "6px", border: "1px solid var(--border)", fontSize: "1rem", fontFamily: "inherit", resize: "vertical" }} />
              </div>
              <button type="submit" className="btn btn-primary">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
