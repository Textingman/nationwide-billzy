import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>Transforming Non-Performing Portfolios Into Financial Success</h1>
            <p className="hero-subtitle">
              Licensed independent financial services company operating nationwide with expertise in acquiring and managing non-performing portfolios
            </p>
            <Link href="/contact" className="btn btn-primary">
              Get Started Today
            </Link>
          </div>
          <div className="hero-image">
            <Image 
              src="/hero-image.png" 
              alt="Billzy Financial Services" 
              width={600} 
              height={400}
              priority
              style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
            />
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="services">
        <div className="container">
          <h2>Our Expertise</h2>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">
                <div className="icon-placeholder">📊</div>
              </div>
              <h3>Portfolio Acquisition</h3>
              <p>Strategic acquisition of non-performing portfolios with comprehensive due diligence and market analysis</p>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <div className="icon-placeholder">💼</div>
              </div>
              <h3>Portfolio Management</h3>
              <p>Expert management strategies designed to maximize recovery and optimize financial outcomes</p>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <div className="icon-placeholder">📈</div>
              </div>
              <h3>Tailored Solutions</h3>
              <p>Customized strategies that drive optimal results based on your unique portfolio characteristics</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2>Ready to Optimize Your Portfolio?</h2>
          <p>Contact us today to discuss how we can help you achieve optimal financial results</p>
          <Link href="/contact" className="btn btn-primary">
            Contact Us Now
          </Link>
        </div>
      </section>
    </>
  );
}
