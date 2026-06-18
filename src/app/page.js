import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>Your Wealth, Monitored 24/7 by AI</h1>
            <p className="hero-subtitle">
              Billzy helps consumers take control of their financial future. Our AI assistant continuously monitors your assets, alerts you to opportunities worth doubling down on, and flags anything that could become a liability before it costs you.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link href="/contact" className="btn btn-primary">
                Get Early Access
              </Link>
              <Link href="/about" className="btn btn-secondary">
                Learn More
              </Link>
            </div>
          </div>
          <div className="hero-image">
            <Image
              src="/hero-image.png"
              alt="Billzy Wealth Management"
              width={600}
              height={400}
              priority
              style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
            />
          </div>
        </div>
      </section>

      {/* AI Assistant Banner */}
      <section style={{ background: '#4CAF50', color: '#fff', padding: '2.5rem 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ color: '#fff', marginBottom: '0.75rem', fontSize: '1.5rem', fontWeight: '700' }}>
            Introducing the Billzy AI Assistant
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.92)', maxWidth: '680px', margin: '0 auto 1.5rem', fontSize: '1.05rem', lineHeight: '1.6' }}>
            Our AI assistant monitors your financial portfolio in real time. Get instant alerts when an asset needs attention, when you have an opportunity to maximize returns, or when something is at risk of becoming a liability.
          </p>
          <Link href="/contact" className="btn" style={{ background: '#fff', color: '#4CAF50', fontWeight: '700', border: '2px solid #fff', padding: '12px 28px', borderRadius: '6px', textDecoration: 'none', display: 'inline-block' }}>
            Get Early Access
          </Link>
        </div>
      </section>

      {/* Services Overview */}
      <section className="services">
        <div className="container">
          <h2>How Billzy Works For You</h2>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">
                <div className="icon-placeholder">📈</div>
              </div>
              <h3>Asset Opportunity Alerts</h3>
              <p>Billzy identifies assets in your portfolio that are performing well and flags opportunities to increase your position before the window closes.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <div className="icon-placeholder">⚠️</div>
              </div>
              <h3>Liability Risk Detection</h3>
              <p>Our AI monitors for early warning signs — assets that are underperforming, mismanaged, or trending toward becoming a financial liability.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <div className="icon-placeholder">📊</div>
              </div>
              <h3>Wealth Management Guidance</h3>
              <p>Personalized recommendations from licensed financial professionals, backed by AI-driven data analysis across your entire portfolio.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2>Stop Leaving Money on the Table</h2>
          <p>Most people don't know which of their assets are working for them and which ones are quietly draining value. Billzy changes that.</p>
          <Link href="/contact" className="btn btn-primary">
            Get Early Access
          </Link>
        </div>
      </section>
    </>
  );
}
