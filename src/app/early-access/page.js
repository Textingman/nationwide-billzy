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
          <h1 style={{ color: '#fff', fontSize: '2.75rem', marginBottom: '0.75rem', lineHeight: '1.2' }}>
            Meet Billi
          </h1>
          <p style={{ color: '#4CAF50', fontSize: '1rem', fontWeight: '600', marginBottom: '1.25rem', letterSpacing: '0.05em' }}>
            BY BILLZY — YOUR AI WEALTH ASSISTANT
          </p>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.2rem', maxWidth: '650px', margin: '0 auto 2.5rem', lineHeight: '1.7' }}>
            Billi monitors your financial portfolio in real time. She tells you what to double down on, flags anything at risk of becoming a liability, and takes action on your behalf — so you never miss a move.
          </p>
        </div>
      </section>

      {/* Features */}
      <section style={{ padding: '4rem 0', background: '#f8f9fa' }}>
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: '0.5rem' }}>What Billi Does For You</h2>
          <p style={{ textAlign: 'center', color: '#666', marginBottom: '3rem' }}>Real-time intelligence. Proactive alerts. Autonomous action.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            <div style={{ background: '#fff', borderRadius: '12px', padding: '2rem', boxShadow: '0 2px 12px rgba(0,0,0,0.08)', borderTop: '4px solid #4CAF50' }}>
              <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>📈</div>
              <h3 style={{ marginBottom: '0.75rem' }}>Double Down Alerts</h3>
              <p style={{ color: '#666', lineHeight: '1.6' }}>When an asset is outperforming and there is an opportunity to increase your position, Billi flags it immediately so you never miss a window.</p>
            </div>
            <div style={{ background: '#fff', borderRadius: '12px', padding: '2rem', boxShadow: '0 2px 12px rgba(0,0,0,0.08)', borderTop: '4px solid #ff9800' }}>
              <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>⚠️</div>
              <h3 style={{ marginBottom: '0.75rem' }}>Liability Risk Warnings</h3>
              <p style={{ color: '#666', lineHeight: '1.6' }}>Billi detects early warning signs of mismanaged or underperforming assets before they become a liability. Get notified before it costs you.</p>
            </div>
            <div style={{ background: '#fff', borderRadius: '12px', padding: '2rem', boxShadow: '0 2px 12px rgba(0,0,0,0.08)', borderTop: '4px solid #2196f3' }}>
              <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>🔔</div>
              <h3 style={{ marginBottom: '0.75rem' }}>Real-Time Monitoring</h3>
              <p style={{ color: '#666', lineHeight: '1.6' }}>Your portfolio is watched around the clock. Receive SMS and account alerts the moment something changes that requires your attention.</p>
            </div>
            <div style={{ background: '#fff', borderRadius: '12px', padding: '2rem', boxShadow: '0 2px 12px rgba(0,0,0,0.08)', borderTop: '4px solid #9c27b0' }}>
              <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>🤖</div>
              <h3 style={{ marginBottom: '0.75rem' }}>Autonomous Action</h3>
              <p style={{ color: '#666', lineHeight: '1.6' }}>On the Pro plan, Billi doesn't just alert you — she acts. Rebalancing, flagging advisors, and managing issues on your behalf automatically.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard Preview */}
      <section style={{ padding: '4rem 0', background: '#fff' }}>
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: '0.5rem' }}>Your Billi Dashboard</h2>
          <p style={{ textAlign: 'center', color: '#666', marginBottom: '3rem' }}>A live view of your portfolio health, alerts, and AI recommendations.</p>

          {/* Fake Dashboard */}
          <div style={{ background: '#1a1a2e', borderRadius: '16px', padding: '2rem', color: '#fff', maxWidth: '900px', margin: '0 auto', boxShadow: '0 8px 40px rgba(0,0,0,0.3)' }}>
            {/* Dashboard Header */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
              <div>
                <div style={{ fontSize: '0.8rem', color: '#4CAF50', fontWeight: '600', letterSpacing: '0.1em' }}>BILLI DASHBOARD</div>
                <div style={{ fontSize: '1.1rem', fontWeight: '700' }}>Good morning, Alex 👋</div>
              </div>
              <div style={{ background: 'rgba(76,175,80,0.2)', border: '1px solid #4CAF50', borderRadius: '20px', padding: '4px 12px', fontSize: '0.8rem', color: '#4CAF50' }}>● Live</div>
            </div>

            {/* Portfolio Stats */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem', marginBottom: '1.5rem' }}>
              <div style={{ background: 'rgba(255,255,255,0.05)', borderRadius: '10px', padding: '1rem' }}>
                <div style={{ fontSize: '0.75rem', color: '#aaa', marginBottom: '0.25rem' }}>Total Portfolio Value</div>
                <div style={{ fontSize: '1.5rem', fontWeight: '700', color: '#fff' }}>,500</div>
                <div style={{ fontSize: '0.8rem', color: '#4CAF50' }}>↑ +3.2% this month</div>
              </div>
              <div style={{ background: 'rgba(255,255,255,0.05)', borderRadius: '10px', padding: '1rem' }}>
                <div style={{ fontSize: '0.75rem', color: '#aaa', marginBottom: '0.25rem' }}>Assets Monitored</div>
                <div style={{ fontSize: '1.5rem', fontWeight: '700', color: '#fff' }}>12</div>
                <div style={{ fontSize: '0.8rem', color: '#aaa' }}>Across 4 categories</div>
              </div>
              <div style={{ background: 'rgba(255,255,255,0.05)', borderRadius: '10px', padding: '1rem' }}>
                <div style={{ fontSize: '0.75rem', color: '#aaa', marginBottom: '0.25rem' }}>Active Alerts</div>
                <div style={{ fontSize: '1.5rem', fontWeight: '700', color: '#ff9800' }}>3</div>
                <div style={{ fontSize: '0.8rem', color: '#ff9800' }}>2 require attention</div>
              </div>
            </div>

            {/* Alert Feed */}
            <div style={{ background: 'rgba(255,255,255,0.03)', borderRadius: '10px', padding: '1rem' }}>
              <div style={{ fontSize: '0.8rem', color: '#aaa', fontWeight: '600', marginBottom: '0.75rem', letterSpacing: '0.05em' }}>BILLI ALERTS — TODAY</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', padding: '0.75rem', background: 'rgba(76,175,80,0.1)', borderRadius: '8px', borderLeft: '3px solid #4CAF50' }}>
                  <span style={{ fontSize: '1rem' }}>📈</span>
                  <div>
                    <div style={{ fontSize: '0.85rem', fontWeight: '600', color: '#4CAF50' }}>Opportunity Detected</div>
                    <div style={{ fontSize: '0.8rem', color: '#ccc' }}>Your real estate holding in Henderson, NV is up 18% YTD. Billi recommends increasing your position before Q3 closes.</div>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', padding: '0.75rem', background: 'rgba(255,152,0,0.1)', borderRadius: '8px', borderLeft: '3px solid #ff9800' }}>
                  <span style={{ fontSize: '1rem' }}>⚠️</span>
                  <div>
                    <div style={{ fontSize: '0.85rem', fontWeight: '600', color: '#ff9800' }}>Liability Risk — Action Needed</div>
                    <div style={{ fontSize: '0.8rem', color: '#ccc' }}>Your auto loan account has missed 2 payment cycles. This asset is trending toward a liability. Billi has flagged it for your advisor.</div>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', padding: '0.75rem', background: 'rgba(33,150,243,0.1)', borderRadius: '8px', borderLeft: '3px solid #2196f3' }}>
                  <span style={{ fontSize: '1rem' }}>🔔</span>
                  <div>
                    <div style={{ fontSize: '0.85rem', fontWeight: '600', color: '#2196f3' }}>Account Update</div>
                    <div style={{ fontSize: '0.8rem', color: '#ccc' }}>Your savings account balance dropped below your ,000 threshold. Billi has sent you an SMS alert.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Example Alerts */}
      <section style={{ padding: '4rem 0', background: '#f8f9fa' }}>
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: '0.5rem' }}>How Billi Reaches You</h2>
          <p style={{ textAlign: 'center', color: '#666', marginBottom: '3rem' }}>Alerts delivered via SMS, email, and in-app — wherever you are.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', maxWidth: '900px', margin: '0 auto' }}>

            {/* SMS Example */}
            <div>
              <div style={{ fontSize: '0.8rem', fontWeight: '700', color: '#666', letterSpacing: '0.1em', marginBottom: '0.75rem' }}>📱 SMS ALERT</div>
              <div style={{ background: '#1a1a2e', borderRadius: '16px', padding: '1.25rem', color: '#fff', fontFamily: 'monospace', fontSize: '0.9rem', lineHeight: '1.6' }}>
                <div style={{ color: '#4CAF50', fontWeight: '700', marginBottom: '0.5rem' }}>Billi by Billzy</div>
                <div>Hi Alex — Billi here. ⚠️ Your LendNation account has been flagged. Payment activity has stopped and this account is at risk of becoming a liability. Call us at (888) 331-9521 to resolve. Reply STOP to opt out.</div>
              </div>
            </div>

            {/* Email Example */}
            <div>
              <div style={{ fontSize: '0.8rem', fontWeight: '700', color: '#666', letterSpacing: '0.1em', marginBottom: '0.75rem' }}>📧 EMAIL ALERT</div>
              <div style={{ background: '#fff', borderRadius: '16px', padding: '1.25rem', border: '1px solid #e0e0e0', fontSize: '0.9rem', lineHeight: '1.6' }}>
                <div style={{ fontWeight: '700', marginBottom: '0.25rem' }}>Subject: Billi Alert — Opportunity in Your Portfolio</div>
                <div style={{ color: '#666', fontSize: '0.8rem', marginBottom: '0.75rem' }}>From: billi@billzy1.com</div>
                <div style={{ color: '#333' }}>Hi Alex,<br /><br />Billi has identified a high-confidence opportunity in your portfolio. Your Henderson real estate holding is outperforming the market by 18% YTD. Based on current trends, this is an ideal window to increase your position.<br /><br />Log in to your Billi dashboard to review the full analysis and take action.<br /><br />— Billi, your Billzy AI Assistant</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section style={{ padding: '4rem 0', background: '#fff' }}>
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: '0.5rem' }}>Simple, Transparent Pricing</h2>
          <p style={{ textAlign: 'center', color: '#666', marginBottom: '3rem' }}>Start free. Upgrade when Billi starts working for you.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', maxWidth: '700px', margin: '0 auto' }}>

            {/* Free Tier */}
            <div style={{ border: '1px solid #e0e0e0', borderRadius: '16px', padding: '2rem', textAlign: 'center' }}>
              <div style={{ fontSize: '0.85rem', fontWeight: '700', color: '#666', letterSpacing: '0.1em', marginBottom: '0.75rem' }}>BILLI FREE</div>
              <div style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '0.25rem' }}>/bin/zsh</div>
              <div style={{ color: '#666', marginBottom: '1.5rem', fontSize: '0.9rem' }}>Forever free</div>
              <ul style={{ listStyle: 'none', padding: 0, textAlign: 'left', marginBottom: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                {['Portfolio monitoring & alerts', 'SMS + email notifications', 'Billi dashboard access', 'Up to 5 assets tracked', 'Weekly summary reports'].map(f => (
                  <li key={f} style={{ display: 'flex', gap: '0.5rem', fontSize: '0.9rem', color: '#333' }}><span style={{ color: '#4CAF50' }}>✓</span>{f}</li>
                ))}
              </ul>
              <Link href="/early-access" className="btn btn-secondary" style={{ display: 'block', textAlign: 'center' }}>Get Early Access</Link>
            </div>

            {/* Pro Tier */}
            <div style={{ border: '2px solid #4CAF50', borderRadius: '16px', padding: '2rem', textAlign: 'center', background: '#f1f8f1', position: 'relative' }}>
              <div style={{ position: 'absolute', top: '-14px', left: '50%', transform: 'translateX(-50%)', background: '#4CAF50', color: '#fff', borderRadius: '20px', padding: '4px 16px', fontSize: '0.75rem', fontWeight: '700', whiteSpace: 'nowrap' }}>MOST POPULAR</div>
              <div style={{ fontSize: '0.85rem', fontWeight: '700', color: '#4CAF50', letterSpacing: '0.1em', marginBottom: '0.75rem' }}>BILLI PRO</div>
              <div style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '0.25rem' }}>0.75%</div>
              <div style={{ color: '#666', marginBottom: '1.5rem', fontSize: '0.9rem' }}>of assets under management / year</div>
              <ul style={{ listStyle: 'none', padding: 0, textAlign: 'left', marginBottom: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                {['Everything in Free', 'Unlimited assets tracked', 'Billi acts on your behalf', 'Automatic issue resolution', 'Advisor coordination', 'Priority SMS alerts', 'Monthly performance review'].map(f => (
                  <li key={f} style={{ display: 'flex', gap: '0.5rem', fontSize: '0.9rem', color: '#333' }}><span style={{ color: '#4CAF50' }}>✓</span>{f}</li>
                ))}
              </ul>
              <Link href="/early-access" className="btn btn-primary" style={{ display: 'block', textAlign: 'center' }}>Get Early Access</Link>
              <p style={{ fontSize: '0.75rem', color: '#888', marginTop: '0.75rem' }}>Example: ,000 portfolio = ~,875/year (/mo)</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sign Up with SMS Opt-In */}
      <section style={{ padding: '4rem 0', background: '#f8f9fa' }}>
        <div className="container-small">
          <h2 style={{ textAlign: 'center', marginBottom: '0.75rem' }}>Join the Billi Early Access List</h2>
          <p style={{ textAlign: 'center', color: '#666', marginBottom: '2.5rem', lineHeight: '1.6' }}>
            Be among the first to access Billi when she launches. Early access members receive priority onboarding, exclusive features, and 3 months of Pro free.
          </p>
          <ContactForm />
        </div>
      </section>

      {/* Back to main */}
      <section style={{ padding: '2rem 0', background: '#fff', textAlign: 'center' }}>
        <Link href="/" style={{ color: '#4CAF50', textDecoration: 'none', fontWeight: '600' }}>
          ← Back to Billzy Wealth Management
        </Link>
      </section>
    </>
  );
}
