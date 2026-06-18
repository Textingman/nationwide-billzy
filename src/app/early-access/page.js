"use client";
import Link from 'next/link';
import ContactForm from '@/components/ContactForm';

export default function EarlyAccess() {
  return (
    <>
      {/* Hero + Dashboard as one unified section */}
      <section style={{ background: '#fff', paddingBottom: '0' }}>
        <div className="container" style={{ textAlign: 'center', paddingTop: '4rem', paddingBottom: '2.5rem' }}>
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
            Billi monitors your financial accounts and assets around the clock. She tells you what to double down on, flags anything trending toward a liability, and on the Pro plan — takes action on your behalf before it costs you.
          </p>
        </div>

        {/* Dashboard — part of hero, no background break */}
        <div style={{ padding: '0 1.5rem 0', maxWidth: '960px', margin: '0 auto' }}>
          <div style={{ borderRadius: '20px 20px 0 0', overflow: 'hidden', boxShadow: '0 -4px 40px rgba(0,0,0,0.12)', border: '1px solid #e0e0e0', borderBottom: 'none' }}>

            {/* Browser chrome bar */}
            <div style={{ background: '#f5f5f5', padding: '0.6rem 1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', borderBottom: '1px solid #e0e0e0' }}>
              <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ff5f57', display: 'inline-block' }}></span>
              <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#febc2e', display: 'inline-block' }}></span>
              <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#28c840', display: 'inline-block' }}></span>
              <div style={{ flex: 1, background: '#e8e8e8', borderRadius: '6px', padding: '3px 12px', fontSize: '0.75rem', color: '#888', marginLeft: '0.5rem', maxWidth: '280px' }}>app.billzy1.com/dashboard</div>
            </div>

            {/* Dashboard App */}
            <div style={{ background: '#fff', display: 'grid', gridTemplateColumns: '220px 1fr', minHeight: '480px' }}>

              {/* Sidebar */}
              <div style={{ background: '#1b2a3b', padding: '1.5rem 0', display: 'flex', flexDirection: 'column' }}>
                <div style={{ padding: '0 1.25rem', marginBottom: '1.5rem' }}>
                  <div style={{ color: '#4CAF50', fontWeight: '800', fontSize: '1.1rem' }}>Billi</div>
                  <div style={{ color: '#aaa', fontSize: '0.75rem' }}>by Billzy</div>
                </div>
                {[
                  { icon: '📊', label: 'Overview', active: true },
                  { icon: '🔔', label: 'Alerts', badge: '3' },
                  { icon: '📈', label: 'Opportunities' },
                  { icon: '⚠️', label: 'Liabilities' },
                  { icon: '📁', label: 'Accounts' },
                  { icon: '⚙️', label: 'Settings' },
                ].map(item => (
                  <div key={item.label} style={{ padding: '0.6rem 1.25rem', display: 'flex', alignItems: 'center', gap: '0.6rem', background: item.active ? 'rgba(76,175,80,0.15)' : 'transparent', borderLeft: item.active ? '3px solid #4CAF50' : '3px solid transparent', cursor: 'pointer' }}>
                    <span style={{ fontSize: '0.9rem' }}>{item.icon}</span>
                    <span style={{ fontSize: '0.85rem', color: item.active ? '#fff' : '#aaa', fontWeight: item.active ? '600' : '400' }}>{item.label}</span>
                    {item.badge && <span style={{ marginLeft: 'auto', background: '#ff9800', color: '#fff', borderRadius: '10px', padding: '1px 7px', fontSize: '0.7rem', fontWeight: '700' }}>{item.badge}</span>}
                  </div>
                ))}
                <div style={{ marginTop: 'auto', padding: '1rem 1.25rem', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                    <div style={{ width: '30px', height: '30px', borderRadius: '50%', background: '#4CAF50', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.8rem', fontWeight: '700', color: '#fff' }}>A</div>
                    <div>
                      <div style={{ fontSize: '0.8rem', color: '#fff', fontWeight: '600' }}>Alex M.</div>
                      <div style={{ fontSize: '0.7rem', color: '#aaa' }}>Pro Plan</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Main Content */}
              <div style={{ padding: '1.5rem', background: '#fafafa' }}>
                {/* Top row */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
                  <div>
                    <div style={{ fontSize: '1.1rem', fontWeight: '700', color: '#111' }}>Good morning, Alex 👋</div>
                    <div style={{ fontSize: '0.8rem', color: '#888' }}>Wednesday, June 18 · 3 alerts need your attention</div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', background: '#e8f5e9', borderRadius: '20px', padding: '4px 12px', fontSize: '0.75rem', color: '#2e7d32', fontWeight: '600' }}>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#4CAF50', display: 'inline-block' }}></span>
                    Billi is watching
                  </div>
                </div>

                {/* Stats */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.75rem', marginBottom: '1.25rem' }}>
                  <div style={{ background: '#fff', borderRadius: '12px', padding: '1rem', border: '1px solid #eee', boxShadow: '0 1px 4px rgba(0,0,0,0.04)' }}>
                    <div style={{ fontSize: '0.7rem', color: '#999', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.3rem' }}>Portfolio Value</div>
                    <div style={{ fontSize: '1.4rem', fontWeight: '800', color: '#111' }}>,500</div>
                    <div style={{ fontSize: '0.75rem', color: '#4CAF50', fontWeight: '600' }}>↑ +3.2% this month</div>
                  </div>
                  <div style={{ background: '#fff', borderRadius: '12px', padding: '1rem', border: '1px solid #eee', boxShadow: '0 1px 4px rgba(0,0,0,0.04)' }}>
                    <div style={{ fontSize: '0.7rem', color: '#999', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.3rem' }}>Accounts Tracked</div>
                    <div style={{ fontSize: '1.4rem', fontWeight: '800', color: '#111' }}>9</div>
                    <div style={{ fontSize: '0.75rem', color: '#888' }}>Across 3 categories</div>
                  </div>
                  <div style={{ background: '#fff', borderRadius: '12px', padding: '1rem', border: '1px solid #eee', boxShadow: '0 1px 4px rgba(0,0,0,0.04)' }}>
                    <div style={{ fontSize: '0.7rem', color: '#999', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.3rem' }}>Active Alerts</div>
                    <div style={{ fontSize: '1.4rem', fontWeight: '800', color: '#e65100' }}>3</div>
                    <div style={{ fontSize: '0.75rem', color: '#e65100' }}>2 need attention</div>
                  </div>
                </div>

                {/* Alert Feed */}
                <div style={{ background: '#fff', borderRadius: '12px', border: '1px solid #eee', overflow: 'hidden', boxShadow: '0 1px 4px rgba(0,0,0,0.04)' }}>
                  <div style={{ padding: '0.75rem 1rem', borderBottom: '1px solid #f0f0f0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ fontSize: '0.8rem', fontWeight: '700', color: '#333' }}>Billi Alerts — Today</div>
                    <div style={{ fontSize: '0.75rem', color: '#4CAF50', fontWeight: '600', cursor: 'pointer' }}>View all →</div>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <div style={{ display: 'flex', gap: '0.75rem', padding: '0.875rem 1rem', borderBottom: '1px solid #f8f8f8', alignItems: 'flex-start' }}>
                      <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: '#e8f5e9', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.9rem', flexShrink: 0 }}>📈</div>
                      <div style={{ flex: 1 }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.2rem' }}>
                          <div style={{ fontWeight: '700', color: '#2e7d32', fontSize: '0.82rem' }}>Opportunity — Double Down</div>
                          <div style={{ fontSize: '0.7rem', color: '#aaa' }}>9:02 AM</div>
                        </div>
                        <div style={{ color: '#666', fontSize: '0.8rem', lineHeight: '1.4' }}>Henderson, NV real estate up 18% YTD. Billi recommends increasing your position before Q3 closes.</div>
                      </div>
                    </div>
                    <div style={{ display: 'flex', gap: '0.75rem', padding: '0.875rem 1rem', borderBottom: '1px solid #f8f8f8', alignItems: 'flex-start', background: '#fffbf5' }}>
                      <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: '#fff3e0', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.9rem', flexShrink: 0 }}>⚠️</div>
                      <div style={{ flex: 1 }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.2rem' }}>
                          <div style={{ fontWeight: '700', color: '#e65100', fontSize: '0.82rem' }}>Liability Risk — Action Needed</div>
                          <div style={{ fontSize: '0.7rem', color: '#aaa' }}>8:47 AM</div>
                        </div>
                        <div style={{ color: '#666', fontSize: '0.8rem', lineHeight: '1.4' }}>EZ Pass unpaid balance .50 — 38 days past due. Risk of registration hold. Billi flagged for resolution.</div>
                      </div>
                    </div>
                    <div style={{ display: 'flex', gap: '0.75rem', padding: '0.875rem 1rem', alignItems: 'flex-start' }}>
                      <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: '#e3f2fd', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.9rem', flexShrink: 0 }}>🔔</div>
                      <div style={{ flex: 1 }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.2rem' }}>
                          <div style={{ fontWeight: '700', color: '#1565c0', fontSize: '0.82rem' }}>Account Update</div>
                          <div style={{ fontSize: '0.7rem', color: '#aaa' }}>8:14 AM</div>
                        </div>
                        <div style={{ color: '#666', fontSize: '0.8rem', lineHeight: '1.4' }}>Savings balance dropped below ,000 threshold. SMS alert sent.</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Billi Texts You Directly — SMS Examples */}
      <section style={{ padding: '5rem 0 4rem', background: '#fff' }}>
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: '0.5rem' }}>Billi Texts You Directly</h2>
          <p style={{ textAlign: 'center', color: '#666', marginBottom: '3rem' }}>Real-time SMS alerts for every type of account activity — straight to your phone.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem', maxWidth: '960px', margin: '0 auto' }}>
            <div>
              <div style={{ fontSize: '0.7rem', fontWeight: '700', color: '#2e7d32', letterSpacing: '0.1em', marginBottom: '0.6rem', textTransform: 'uppercase' }}>📈 Opportunity Alert</div>
              <div style={{ background: '#f9fafb', border: '1px solid #e0e0e0', borderRadius: '12px', padding: '1rem 1.25rem', fontSize: '0.85rem', lineHeight: '1.65', color: '#333' }}>
                <div style={{ fontWeight: '700', color: '#4CAF50', marginBottom: '0.4rem', fontSize: '0.8rem' }}>Billi · Billzy</div>
                Alex, your Henderson property is up 18% this quarter. This may be a good time to review your position. Reply STOP to opt out. Msg & data rates may apply.
              </div>
            </div>
            <div>
              <div style={{ fontSize: '0.7rem', fontWeight: '700', color: '#e65100', letterSpacing: '0.1em', marginBottom: '0.6rem', textTransform: 'uppercase' }}>⚠️ Liability Alert</div>
              <div style={{ background: '#f9fafb', border: '1px solid #e0e0e0', borderRadius: '12px', padding: '1rem 1.25rem', fontSize: '0.85rem', lineHeight: '1.65', color: '#333' }}>
                <div style={{ fontWeight: '700', color: '#4CAF50', marginBottom: '0.4rem', fontSize: '0.8rem' }}>Billi · Billzy</div>
                Alex, your EZ Pass account has an unpaid balance that is 38 days past due. Please review to avoid penalties. Reply STOP to opt out. Msg & data rates may apply.
              </div>
            </div>
            <div>
              <div style={{ fontSize: '0.7rem', fontWeight: '700', color: '#1565c0', letterSpacing: '0.1em', marginBottom: '0.6rem', textTransform: 'uppercase' }}>🔔 Account Update</div>
              <div style={{ background: '#f9fafb', border: '1px solid #e0e0e0', borderRadius: '12px', padding: '1rem 1.25rem', fontSize: '0.85rem', lineHeight: '1.65', color: '#333' }}>
                <div style={{ fontWeight: '700', color: '#4CAF50', marginBottom: '0.4rem', fontSize: '0.8rem' }}>Billi · Billzy</div>
                Alex, your savings balance has dropped below your $10,000 alert threshold. Log in to review. Reply STOP to opt out. Msg & data rates may apply.
              </div>
            </div>
            <div>
              <div style={{ fontSize: '0.7rem', fontWeight: '700', color: '#6a1b9a', letterSpacing: '0.1em', marginBottom: '0.6rem', textTransform: 'uppercase' }}>📊 Weekly Summary</div>
              <div style={{ background: '#f9fafb', border: '1px solid #e0e0e0', borderRadius: '12px', padding: '1rem 1.25rem', fontSize: '0.85rem', lineHeight: '1.65', color: '#333' }}>
                <div style={{ fontWeight: '700', color: '#4CAF50', marginBottom: '0.4rem', fontSize: '0.8rem' }}>Billi · Billzy</div>
                Alex, your weekly summary is ready. Portfolio: $284,500 (+3.2%). 1 opportunity, 1 item needs attention. View your dashboard for details. Reply STOP to opt out.
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
                {['Account monitoring & alerts', 'SMS + email notifications', 'Billi dashboard', 'Up to 5 accounts tracked', 'Weekly summary reports'].map(f => (
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
                {['Everything in Free', 'Unlimited accounts tracked', 'Billi acts on your behalf', 'Automatic issue resolution', 'Advisor coordination', 'Priority SMS alerts', 'Monthly performance review'].map(f => (
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
