"use client";
import Link from 'next/link';
import ContactForm from '@/components/ContactForm';

export default function EarlyAccess() {
  return (
    <>
      {/* Hero - Clean white with green accent */}
      <section style={{ background: '#fff', borderBottom: '1px solid #e8f5e9', padding: '5rem 0 4rem' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: '#e8f5e9', borderRadius: '20px', padding: '6px 16px', marginBottom: '1.5rem' }}>
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#4CAF50', display: 'inline-block' }}></span>
            <span style={{ fontSize: '0.8rem', color: '#2e7d32', fontWeight: '700', letterSpacing: '0.08em' }}>COMING SOON</span>
          </div>
          <h1 style={{ fontSize: '3rem', fontWeight: '800', color: '#111', marginBottom: '0.5rem', lineHeight: '1.15' }}>
            Meet Billi
          </h1>
          <p style={{ fontSize: '1rem', color: '#4CAF50', fontWeight: '600', marginBottom: '1.25rem', letterSpacing: '0.05em' }}>
            Your AI Wealth Assistant by Billzy
          </p>
          <p style={{ fontSize: '1.15rem', color: '#555', maxWidth: '600px', margin: '0 auto 2.5rem', lineHeight: '1.75' }}>
            Billi watches your portfolio 24/7. She tells you what to double down on, flags anything trending toward a liability, and on the Pro plan — takes action on your behalf.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="#signup" className="btn btn-primary">Get Early Access — Free</a>
            <a href="#pricing" className="btn btn-secondary">See Pricing</a>
          </div>
        </div>
      </section>

      {/* Dashboard Preview - Clean Billzy style */}
      <section style={{ padding: '4rem 0', background: '#f9fafb' }}>
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: '0.5rem' }}>Your Billi Dashboard</h2>
          <p style={{ textAlign: 'center', color: '#666', marginBottom: '3rem' }}>A clear view of your portfolio health, alerts, and what needs your attention.</p>

          <div style={{ background: '#fff', borderRadius: '16px', border: '1px solid #e0e0e0', overflow: 'hidden', maxWidth: '860px', margin: '0 auto', boxShadow: '0 4px 24px rgba(0,0,0,0.06)' }}>
            {/* Dashboard Top Bar */}
            <div style={{ background: '#4CAF50', padding: '1rem 1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ color: '#fff', fontWeight: '700', fontSize: '1rem' }}>Billi Dashboard</div>
              <div style={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.85rem' }}>Good morning, Alex 👋</div>
            </div>

            {/* Stats Row */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', borderBottom: '1px solid #f0f0f0' }}>
              <div style={{ padding: '1.25rem 1.5rem', borderRight: '1px solid #f0f0f0' }}>
                <div style={{ fontSize: '0.75rem', color: '#999', fontWeight: '600', marginBottom: '0.25rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Portfolio Value</div>
                <div style={{ fontSize: '1.6rem', fontWeight: '800', color: '#111' }}>,500</div>
                <div style={{ fontSize: '0.8rem', color: '#4CAF50', fontWeight: '600' }}>↑ +3.2% this month</div>
              </div>
              <div style={{ padding: '1.25rem 1.5rem', borderRight: '1px solid #f0f0f0' }}>
                <div style={{ fontSize: '0.75rem', color: '#999', fontWeight: '600', marginBottom: '0.25rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Assets Tracked</div>
                <div style={{ fontSize: '1.6rem', fontWeight: '800', color: '#111' }}>12</div>
                <div style={{ fontSize: '0.8rem', color: '#666' }}>Across 4 categories</div>
              </div>
              <div style={{ padding: '1.25rem 1.5rem' }}>
                <div style={{ fontSize: '0.75rem', color: '#999', fontWeight: '600', marginBottom: '0.25rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Active Alerts</div>
                <div style={{ fontSize: '1.6rem', fontWeight: '800', color: '#e65100' }}>3</div>
                <div style={{ fontSize: '0.8rem', color: '#e65100' }}>2 need attention</div>
              </div>
            </div>

            {/* Alert Feed */}
            <div style={{ padding: '1.25rem 1.5rem' }}>
              <div style={{ fontSize: '0.75rem', color: '#999', fontWeight: '700', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Today's Alerts from Billi</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <div style={{ display: 'flex', gap: '1rem', padding: '1rem', background: '#f1f8f1', borderRadius: '10px', borderLeft: '4px solid #4CAF50' }}>
                  <span style={{ fontSize: '1.25rem', flexShrink: 0 }}>📈</span>
                  <div>
                    <div style={{ fontWeight: '700', color: '#2e7d32', fontSize: '0.9rem', marginBottom: '0.2rem' }}>Opportunity — Double Down</div>
                    <div style={{ color: '#555', fontSize: '0.85rem', lineHeight: '1.5' }}>Your Henderson, NV real estate holding is up 18% YTD. Billi recommends increasing your position before Q3 closes.</div>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '1rem', padding: '1rem', background: '#fff8f0', borderRadius: '10px', borderLeft: '4px solid #ff9800' }}>
                  <span style={{ fontSize: '1.25rem', flexShrink: 0 }}>⚠️</span>
                  <div>
                    <div style={{ fontWeight: '700', color: '#e65100', fontSize: '0.9rem', marginBottom: '0.2rem' }}>Liability Risk — Action Needed</div>
                    <div style={{ color: '#555', fontSize: '0.85rem', lineHeight: '1.5' }}>Your auto loan has missed 2 payment cycles and is trending toward a liability. Billi has flagged this for your advisor.</div>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '1rem', padding: '1rem', background: '#f0f7ff', borderRadius: '10px', borderLeft: '4px solid #2196f3' }}>
                  <span style={{ fontSize: '1.25rem', flexShrink: 0 }}>🔔</span>
                  <div>
                    <div style={{ fontWeight: '700', color: '#1565c0', fontSize: '0.9rem', marginBottom: '0.2rem' }}>Account Update</div>
                    <div style={{ color: '#555', fontSize: '0.85rem', lineHeight: '1.5' }}>Savings balance dropped below your ,000 threshold. Billi sent you an SMS alert at 8:14 AM.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How Billi Reaches You */}
      <section style={{ padding: '4rem 0', background: '#fff' }}>
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: '0.5rem' }}>How Billi Reaches You</h2>
          <p style={{ textAlign: 'center', color: '#666', marginBottom: '3rem' }}>Alerts via SMS, email, and your dashboard — wherever you are.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', maxWidth: '860px', margin: '0 auto' }}>
            <div>
              <div style={{ fontSize: '0.75rem', fontWeight: '700', color: '#4CAF50', letterSpacing: '0.1em', marginBottom: '0.75rem', textTransform: 'uppercase' }}>📱 SMS Alert</div>
              <div style={{ background: '#f9fafb', border: '1px solid #e0e0e0', borderRadius: '12px', padding: '1.25rem', fontSize: '0.9rem', lineHeight: '1.7', color: '#333' }}>
                <div style={{ fontWeight: '700', color: '#4CAF50', marginBottom: '0.5rem' }}>Billi · Billzy</div>
                Hi Alex — Billi here. ⚠️ Your account has been flagged. Payment activity has stopped and this account is at risk of becoming a liability. Call (888) 331-9521 to resolve. Reply STOP to opt out.
              </div>
            </div>
            <div>
              <div style={{ fontSize: '0.75rem', fontWeight: '700', color: '#4CAF50', letterSpacing: '0.1em', marginBottom: '0.75rem', textTransform: 'uppercase' }}>📧 Email Alert</div>
              <div style={{ background: '#f9fafb', border: '1px solid #e0e0e0', borderRadius: '12px', padding: '1.25rem', fontSize: '0.9rem', lineHeight: '1.7', color: '#333' }}>
                <div style={{ fontWeight: '700', marginBottom: '0.2rem' }}>Billi Alert — Opportunity Detected</div>
                <div style={{ color: '#999', fontSize: '0.8rem', marginBottom: '0.75rem' }}>from billi@billzy1.com</div>
                Hi Alex, Billi has identified a high-confidence opportunity. Your Henderson real estate holding is outperforming the market by 18% YTD. This is an ideal window to increase your position. — Billi
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" style={{ padding: '4rem 0', background: '#f9fafb' }}>
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: '0.5rem' }}>Simple Pricing</h2>
          <p style={{ textAlign: 'center', color: '#666', marginBottom: '3rem' }}>Start free. Let Billi prove her value. Upgrade when you're ready for her to act.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', maxWidth: '680px', margin: '0 auto' }}>
            <div style={{ background: '#fff', border: '1px solid #e0e0e0', borderRadius: '16px', padding: '2rem' }}>
              <div style={{ fontSize: '0.8rem', fontWeight: '700', color: '#999', letterSpacing: '0.1em', marginBottom: '1rem', textTransform: 'uppercase' }}>Billi Free</div>
              <div style={{ fontSize: '2.25rem', fontWeight: '800', color: '#111', marginBottom: '0.25rem' }}>/bin/zsh</div>
              <div style={{ color: '#666', fontSize: '0.9rem', marginBottom: '1.5rem' }}>Always free</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', marginBottom: '1.75rem' }}>
                {['Portfolio monitoring & alerts', 'SMS + email notifications', 'Billi dashboard', 'Up to 5 assets', 'Weekly summary'].map(f => (
                  <div key={f} style={{ display: 'flex', gap: '0.6rem', fontSize: '0.9rem', color: '#444', alignItems: 'center' }}>
                    <span style={{ color: '#4CAF50', fontWeight: '700', flexShrink: 0 }}>✓</span>{f}
                  </div>
                ))}
              </div>
              <a href="#signup" className="btn btn-secondary" style={{ display: 'block', textAlign: 'center' }}>Get Started Free</a>
            </div>

            <div style={{ background: '#fff', border: '2px solid #4CAF50', borderRadius: '16px', padding: '2rem', position: 'relative' }}>
              <div style={{ position: 'absolute', top: '-13px', left: '1.5rem', background: '#4CAF50', color: '#fff', borderRadius: '20px', padding: '3px 14px', fontSize: '0.75rem', fontWeight: '700' }}>RECOMMENDED</div>
              <div style={{ fontSize: '0.8rem', fontWeight: '700', color: '#4CAF50', letterSpacing: '0.1em', marginBottom: '1rem', textTransform: 'uppercase' }}>Billi Pro</div>
              <div style={{ fontSize: '2.25rem', fontWeight: '800', color: '#111', marginBottom: '0.1rem' }}>0.75% <span style={{ fontSize: '1rem', fontWeight: '400', color: '#666' }}>AUM / yr</span></div>
              <div style={{ color: '#666', fontSize: '0.85rem', marginBottom: '1.5rem' }}>~/mo on a K portfolio</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', marginBottom: '1.75rem' }}>
                {['Everything in Free', 'Unlimited assets', 'Billi acts on your behalf', 'Automatic issue resolution', 'Advisor coordination', 'Priority alerts', 'Monthly performance review'].map(f => (
                  <div key={f} style={{ display: 'flex', gap: '0.6rem', fontSize: '0.9rem', color: '#444', alignItems: 'center' }}>
                    <span style={{ color: '#4CAF50', fontWeight: '700', flexShrink: 0 }}>✓</span>{f}
                  </div>
                ))}
              </div>
              <a href="#signup" className="btn btn-primary" style={{ display: 'block', textAlign: 'center' }}>Get Early Access</a>
              <p style={{ fontSize: '0.75rem', color: '#aaa', textAlign: 'center', marginTop: '0.75rem' }}>3 months Pro free for early access members</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sign Up */}
      <section id="signup" style={{ padding: '4rem 0', background: '#fff' }}>
        <div className="container-small">
          <h2 style={{ textAlign: 'center', marginBottom: '0.75rem' }}>Join the Billi Early Access List</h2>
          <p style={{ textAlign: 'center', color: '#666', marginBottom: '2.5rem', lineHeight: '1.7' }}>
            Be among the first to access Billi when she launches. Early access members get priority onboarding and 3 months of Pro free.
          </p>
          <ContactForm />
        </div>
      </section>

      <section style={{ padding: '2rem 0', background: '#f9fafb', textAlign: 'center' }}>
        <Link href="/" style={{ color: '#4CAF50', textDecoration: 'none', fontWeight: '600', fontSize: '0.9rem' }}>
          ← Back to Billzy Wealth Management
        </Link>
      </section>
    </>
  );
}
