import Link from 'next/link';

export const metadata = {
  title: 'About Us - Billzy',
  description: 'Licensed independent financial services company based in Henderson, Nevada, operating on a national scale',
};

export default function About() {
  return (
    <>
      {/* About Hero */}
      <section className="about-hero">
        <div className="container">
          <h1>About Billzy</h1>
          <p className="subtitle">Licensed Independent Financial Services Excellence</p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="about-content">
        <div className="container">
          <div className="about-text" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <h2>Who We Are</h2>
            <p>Billzy is a licensed independent financial services company based in Henderson, Nevada, operating on a national scale. We specialize in the acquisition and management of non-performing portfolios, bringing expertise and tailored strategies to every engagement.</p>
            <p>Our commitment to excellence and results-driven approach has established us as a trusted partner in the financial services industry. We understand that every portfolio is unique, and we create customized solutions that drive optimal financial outcomes.</p>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="our-values">
        <div className="container">
          <h2>Our Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">🎯</div>
              <h3>Excellence</h3>
              <p>We maintain the highest standards in everything we do, from portfolio analysis to client communication.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🤝</div>
              <h3>Integrity</h3>
              <p>We operate with transparency and honesty, building trust through ethical business practices.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">💡</div>
              <h3>Innovation</h3>
              <p>We leverage cutting-edge strategies and technology to deliver superior results.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">📊</div>
              <h3>Results-Driven</h3>
              <p>We focus on measurable outcomes and optimal financial performance for our clients.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="location-section">
        <div className="container">
          <div className="location-content">
            <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
              <h2>Our Location</h2>
              <p>Based in Henderson, Nevada, we serve clients nationwide with our comprehensive financial services expertise.</p>
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
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2>Ready to Work With Us?</h2>
          <p>Contact us today to learn how we can help optimize your portfolio performance</p>
          <Link href="/contact" className="btn btn-primary">
            Get In Touch
          </Link>
        </div>
      </section>
    </>
  );
}
