"use client";
import Link from 'next/link';
import { useState } from 'react';

export default function EarlyAccess() {
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

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

      {/* Sign Up */}
      <section style={{ padding: '4rem 0', background: '#fff' }}>
        <div className="container" style={{ maxWidth: '560px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ marginBottom: '0.75rem' }}>Join the Early Access List</h2>
          <p style={{ color: '#666', marginBottom: '2rem', lineHeight: '1.6' }}>
            Be among the first to access the Billzy AI Assistant when it launches. Early access members receive priority onboarding and exclusive features.
          </p>
          {submitted ? (
            <div style={{ background: '#e8f5e9', border: '1px solid #4CAF50', borderRadius: '8px', padding: '2rem', color: '#2e7d32' }}>
              <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>✅</div>
              <h3 style={{ color: '#2e7d32', marginBottom: '0.5rem' }}>You are on the list!</h3>
              <p>We will reach out as soon as early access opens. Keep an eye on your inbox.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div className="form-group">
                <label htmlFor="ea-name">Full Name *</label>
                <input type="text" id="ea-name" value={name} onChange={(e) => setName(e.target.value)} required placeholder="Your name" />
              </div>
              <div className="form-group">
                <label htmlFor="ea-email">Email Address *</label>
                <input type="email" id="ea-email" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder="your@email.com" />
              </div>
              <button type="submit" className="btn btn-primary btn-large" style={{ marginTop: '0.5rem' }}>
                Request Early Access
              </button>
              <p style={{ fontSize: '0.85rem', color: '#999', marginTop: '0.5rem' }}>
                No spam. We will only contact you about early access.
              </p>
            </form>
          )}
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
