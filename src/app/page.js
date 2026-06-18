import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      {/* Hero Section - Traditional Wealth Management */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>Expert Wealth Management for Every Stage of Life</h1>
            <p className="hero-subtitle">
              Billzy provides personalized financial guidance to help you grow, protect, and preserve your wealth. From portfolio management to retirement planning, our licensed professionals are here to help you build lasting financial security.
            </p>
            <Link href="/contact" className="btn btn-primary">
              Contact Us
            </Link>
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
            Our new AI assistant monitors your financial portfolio in real time. Get instant alerts when an asset needs attention, when you have an opportunity to maximize returns, or when something is at risk of becoming a liability.
          </p>
          <Link href="/early-access" className="btn" style={{ background: '#fff', color: '#4CAF50', fontWeight: '700', border: '2px solid #fff', padding: '12px 28px', borderRadius: '6px', textDecoration: 'none', display: 'inline-block' }}>
            Get Early Access
          </Link>
        </div>
      </section>

      {/* Services Overview */}
      <section className="services">
        <div className="container">
          <h2>Our Wealth Management Services</h2>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">
                <div className="icon-placeholder">📊</div>
              </div>
              <h3>Portfolio Management</h3>
              <p>Strategic investment management tailored to your financial goals, risk tolerance, and time horizon. We actively monitor and rebalance your portfolio to maximize long-term performance.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <div className="icon-placeholder">🏦</div>
              </div>
              <h3>Retirement Planning</h3>
              <p>Comprehensive retirement strategies designed to ensure you have the income and security you need throughout your retirement years. Start planning today for a confident tomorrow.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <div className="icon-placeholder">🛡️</div>
              </div>
              <h3>Asset Protection</h3>
              <p>Protect what you've built with proven strategies to shield your assets from risk, liability, and market volatility. Our advisors help you preserve wealth for future generations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2>Ready to Take Control of Your Financial Future?</h2>
          <p>Speak with a licensed Billzy advisor today and get a personalized wealth management plan built around your goals.</p>
          <Link href="/contact" className="btn btn-primary">
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
