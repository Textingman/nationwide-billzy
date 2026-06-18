"use client";
import Link from 'next/link';
import ContactForm from '@/components/ContactForm';

export default function EarlyAccess() {
  return (
    <>
      {/* Hero */}
      <section style={{ background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)', color: '#fff', padding: '5rem 0 4rem' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <div style={{ display: 'inline-block', background: 'rgba(76,175,80,0.2)', border: '1px solid #4CAF50', borderRadius: '20px', padding: '6px 16px', marginBottom: '1.5rem', fontSize: '0.85rem', color: '#4CAF50', fontWeight: '600', letterSpacing: '0.05em' }}>
            COMING SOON
          </div>
          <h1 style={{ color: '#fff', fontSize: '2.75rem', marginBottom: '1.25rem', lineHeight: '1.2' }}>
            Meet the Billzy AI Assistant
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.2rem', maxWidth: '650px', margin: '0 auto 2.5rem', lineHeight: '1.7' }}>
            The first AI built specifically for personal wealth management. It monitors your assets 24/7, tells you what to double down on, and alerts you the moment something needs your attention.
          </p>
        </div>
      </section>

      {/* Features */}
      <section style={{ padding: '4rem 0', background: '#f8f9fa' }}>
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>What the AI Does For You</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            <div style={{ background: '#fff', borderRadius: '12px', padding: '2rem', boxShadow: '0 2px 12px rgba(0,0,0,0.08)', borderTop: '4px solid #4CAF50' }}>
              <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>📈</div>
              <h3 style={{ marginBottom: '0.75rem' }}>Double Down Alerts</h3>
              <p style={{ color: '#666', lineHeight: '1.6' }}>When an asset in your portfolio is outperforming and there is an opportunity to increase your position, the AI flags it immediately so you never miss a window.</p>
            </div>
            <div style={{ background: '#fff', borderRadius: '12px', padding: '2rem', boxShadow: '0 2px 12px rgba(0,0,0,0.08)', borderTop: '4px solid #ff9800' }}>
              <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>⚠️</div>
              <h3 style={{ marginBottom: '0.75rem' }}>Liability Risk Warnings</h3>
              <p style={{ color: '#666', lineHeight: '1.6' }}>The AI detects early warning signs of mismanaged or underperforming assets before they become a liability. Get notified before it costs you.</p>
            </div>
            <div style={{ background: '#fff', borderRadius: '12px', padding: '2rem', boxShadow: '0 2px 12px rgba(0,0,0,0.08)', borderTop: '4px solid #2196f3' }}>
              <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>🔔</div>
              <h3 style={{ marginBottom: '0.75rem' }}>Real-Time Monitoring</h3>
              <p style={{ color: '#666', lineHeight: '1.6' }}>Your portfolio is watched around the clock. Receive SMS and account alerts the moment something changes that requires your attention.</p>
            </div>
            <div style={{ background: '#fff', borderRadius: '12px', padding: '2rem', boxShadow: '0 2px 12px rgba(0,0,0,0.08)', borderTop: '4px solid #9c27b0' }}>
              <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>🧠</div>
              <h3 style={{ marginBottom: '0.75rem' }}>AI-Powered Insights</h3>
              <p style={{ color: '#666', lineHeight: '1.6' }}>Backed by machine learning and financial data, the AI provides personalized recommendations based on your unique portfolio, goals, and risk profile.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sign Up with SMS Opt-In */}
      <section style={{ padding: '4rem 0', background: '#fff' }}>
        <div className="container-small">
          <h2 style={{ textAlign: 'center', marginBottom: '0.75rem' }}>Get Early Access</h2>
          <p style={{ textAlign: 'center', color: '#666', marginBottom: '2.5rem', lineHeight: '1.6' }}>
            Be among the first to access the Billzy AI Assistant when it launches. Sign up below to join the early access list and opt in to receive AI-powered account alerts and updates via SMS.
          </p>
          <ContactForm />
        </div>
      </section>

      {/* Back to main */}
      <section style={{ padding: '2rem 0', background: '#f8f9fa', textAlign: 'center' }}>
        <Link href="/" style={{ color: '#4CAF50', textDecoration: 'none', fontWeight: '600' }}>
          ← Back to Billzy Wealth Management
        </Link>
      </section>
    </>
  );
}
