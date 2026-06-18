"use client";
import Link from 'next/link';
import { useState } from 'react';

export default function RequestConsultation() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    consultationType: '',
    selectedDate: '',
    selectedTime: '',
    notes: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const consultationTypes = [
    { id: 'portfolio', label: 'Portfolio Review', desc: 'Review your current investments and get optimization recommendations' },
    { id: 'retirement', label: 'Retirement Planning', desc: 'Build a strategy to meet your retirement income goals' },
    { id: 'asset-protection', label: 'Asset Protection', desc: 'Protect your wealth from risk, liability, and market volatility' },
    { id: 'general', label: 'General Consultation', desc: 'Discuss your financial situation and explore options' },
  ];

  const getNextDays = () => {
    const days = [];
    const today = new Date();
    for (let i = 1; i <= 14; i++) {
      const d = new Date(today);
      d.setDate(today.getDate() + i);
      const dow = d.getDay();
      if (dow !== 0 && dow !== 6) {
        days.push(d);
      }
      if (days.length >= 10) break;
    }
    return days;
  };

  const timeSlots = ['9:00 AM', '10:00 AM', '11:00 AM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM'];

  const formatDate = (d) => d.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section className="contact-section">
        <div className="container-small" style={{ textAlign: 'center', padding: '4rem 0' }}>
          <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✅</div>
          <h1>Consultation Scheduled!</h1>
          <p style={{ fontSize: '1.1rem', color: '#555', marginBottom: '1rem' }}>
            Your {formData.consultationType} consultation has been requested for{' '}
            <strong>{formData.selectedDate}</strong> at <strong>{formData.selectedTime}</strong>.
          </p>
          <p style={{ color: '#555', marginBottom: '2rem' }}>
            A confirmation will be sent to <strong>{formData.email}</strong>. Our team will reach out to confirm your appointment.
          </p>
          <Link href="/" className="btn btn-primary">Back to Home</Link>
        </div>
      </section>
    );
  }

  return (
    <section className="contact-section">
      <div className="container-small">
        <h1>Request Consultation</h1>
        <p style={{ color: '#666', marginBottom: '2rem' }}>
          Schedule a free consultation with a licensed Billzy wealth advisor.
        </p>

        {/* Progress Steps */}
        <div style={{ display: 'flex', gap: '0', marginBottom: '2.5rem', borderRadius: '8px', overflow: 'hidden', border: '1px solid #e0e0e0' }}>
          {['Select Type', 'Pick a Time', 'Your Info'].map((label, i) => (
            <div key={i} style={{ flex: 1, padding: '0.75rem', textAlign: 'center', fontSize: '0.85rem', fontWeight: step === i + 1 ? '700' : '400', background: step === i + 1 ? '#4CAF50' : step > i + 1 ? '#e8f5e9' : '#f9f9f9', color: step === i + 1 ? '#fff' : step > i + 1 ? '#2e7d32' : '#999', borderRight: i < 2 ? '1px solid #e0e0e0' : 'none' }}>
              {step > i + 1 ? '✓ ' : ''}{label}
            </div>
          ))}
        </div>

        {/* Step 1: Consultation Type */}
        {step === 1 && (
          <div>
            <h2 style={{ marginBottom: '1.5rem', fontSize: '1.2rem' }}>What type of consultation do you need?</h2>
            <div style={{ display: 'grid', gap: '1rem' }}>
              {consultationTypes.map((type) => (
                <div key={type.id} onClick={() => { setFormData({ ...formData, consultationType: type.label }); setStep(2); }} style={{ padding: '1.25rem 1.5rem', border: formData.consultationType === type.label ? '2px solid #4CAF50' : '1px solid #e0e0e0', borderRadius: '8px', cursor: 'pointer', background: formData.consultationType === type.label ? '#f1f8f1' : '#fff', transition: 'all 0.15s' }}>
                  <div style={{ fontWeight: '600', marginBottom: '0.25rem' }}>{type.label}</div>
                  <div style={{ fontSize: '0.9rem', color: '#666' }}>{type.desc}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Step 2: Date & Time */}
        {step === 2 && (
          <div>
            <h2 style={{ marginBottom: '1.5rem', fontSize: '1.2rem' }}>Select a date and time</h2>
            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ fontWeight: '600', display: 'block', marginBottom: '0.75rem' }}>Available Dates</label>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {getNextDays().map((d, i) => {
                  const label = formatDate(d);
                  return (
                    <button key={i} type="button" onClick={() => setFormData({ ...formData, selectedDate: label })} style={{ padding: '0.5rem 1rem', border: formData.selectedDate === label ? '2px solid #4CAF50' : '1px solid #e0e0e0', borderRadius: '6px', background: formData.selectedDate === label ? '#4CAF50' : '#fff', color: formData.selectedDate === label ? '#fff' : '#333', cursor: 'pointer', fontSize: '0.85rem', fontWeight: formData.selectedDate === label ? '600' : '400' }}>
                      {label}
                    </button>
                  );
                })}
              </div>
            </div>
            {formData.selectedDate && (
              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ fontWeight: '600', display: 'block', marginBottom: '0.75rem' }}>Available Times</label>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {timeSlots.map((t) => (
                    <button key={t} type="button" onClick={() => setFormData({ ...formData, selectedTime: t })} style={{ padding: '0.5rem 1rem', border: formData.selectedTime === t ? '2px solid #4CAF50' : '1px solid #e0e0e0', borderRadius: '6px', background: formData.selectedTime === t ? '#4CAF50' : '#fff', color: formData.selectedTime === t ? '#fff' : '#333', cursor: 'pointer', fontSize: '0.85rem', fontWeight: formData.selectedTime === t ? '600' : '400' }}>
                      {t}
                    </button>
                  ))}
                </div>
              </div>
            )}
            <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem' }}>
              <button type="button" onClick={() => setStep(1)} className="btn btn-secondary">Back</button>
              <button type="button" onClick={() => setStep(3)} className="btn btn-primary" disabled={!formData.selectedDate || !formData.selectedTime} style={{ opacity: (!formData.selectedDate || !formData.selectedTime) ? 0.5 : 1 }}>Continue</button>
            </div>
          </div>
        )}

        {/* Step 3: Contact Info */}
        {step === 3 && (
          <form onSubmit={handleSubmit}>
            <h2 style={{ marginBottom: '1.5rem', fontSize: '1.2rem' }}>Your contact information</h2>
            <div style={{ background: '#f1f8f1', border: '1px solid #c8e6c9', borderRadius: '8px', padding: '1rem 1.25rem', marginBottom: '1.5rem', fontSize: '0.9rem', color: '#2e7d32' }}>
              📅 <strong>{formData.consultationType}</strong> on <strong>{formData.selectedDate}</strong> at <strong>{formData.selectedTime}</strong>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="firstName">First Name *</label>
                <input type="text" id="firstName" value={formData.firstName} onChange={(e) => setFormData({ ...formData, firstName: e.target.value })} required />
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Last Name *</label>
                <input type="text" id="lastName" value={formData.lastName} onChange={(e) => setFormData({ ...formData, lastName: e.target.value })} required />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address *</label>
              <input type="email" id="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required />
            </div>

            <div className="form-group">
              <label htmlFor="notes">Additional Notes (Optional)</label>
              <textarea id="notes" value={formData.notes} onChange={(e) => setFormData({ ...formData, notes: e.target.value })} rows={3} style={{ width: '100%', padding: '12px 16px', border: '1px solid #d1d5db', borderRadius: '6px', fontSize: '1rem', fontFamily: 'inherit', resize: 'vertical', boxSizing: 'border-box' }} placeholder="Anything you would like us to know before the call..." />
            </div>
            <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
              <button type="button" onClick={() => setStep(2)} className="btn btn-secondary">Back</button>
              <button type="submit" className="btn btn-primary">Confirm Consultation</button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
