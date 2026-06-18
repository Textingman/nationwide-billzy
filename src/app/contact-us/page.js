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
          Have a question or need help? Send us a message and we will get back to you as soon as possible.
        </p>
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
            <textarea id="message" name="message" rows={6} required style={{ width: "100%", padding: "0.75rem", borderRadius: "6px", border: "1px solid var(--border)", fontSize: "1rem", fontFamily: "inherit", resize: "vertical" }} />
          </div>
          <button type="submit" className="btn btn-primary btn-large">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
