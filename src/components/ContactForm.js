'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    firstName: '',
    lastName: '',
    zipCode: '',
    alertsTexts: false,
    agreeToTerms: false,
  });

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validatePhone = (phone) => {
    const digits = phone.replace(/\D/g, '');
    return digits.length === 10;
  };

  const validateZipCode = (zip) => {
    return /^\d{5}$/.test(zip);
  };

  const formatPhoneNumber = (value) => {
    const digits = value.replace(/\D/g, '').slice(0, 10);

    if (digits.length >= 6) {
      return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
    } else if (digits.length >= 3) {
      return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
    } else if (digits.length > 0) {
      return `(${digits}`;
    }
    return '';
  };

  const handlePhoneChange = (e) => {
    const formatted = formatPhoneNumber(e.target.value);
    setFormData({ ...formData, phone: formatted });
  };

  const handleZipChange = (e) => {
    const value = e.target.value.replace(/\D/g, '').slice(0, 5);
    setFormData({ ...formData, zipCode: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(formData.email)) {
      alert('Please enter a valid email address.');
      return;
    }

    // Only validate phone if it's provided
    if (formData.phone && !validatePhone(formData.phone)) {
      alert('Please enter a valid 10-digit phone number.');
      return;
    }

    if (!validateZipCode(formData.zipCode)) {
      alert('Please enter a valid 5-digit ZIP code.');
      return;
    }

    if (!formData.agreeToTerms) {
      alert('Please agree to the terms of website use and privacy policy.');
      return;
    }

    const submissionData = {
      ...formData,
      timestamp: new Date().toISOString(),
    };

    console.log('Form submitted:', submissionData);
    alert('Thank you for contacting us! We will be in touch soon.');

    // Reset form
    setFormData({
      email: '',
      phone: '',
      firstName: '',
      lastName: '',
      zipCode: '',
      alertsTexts: false,
      agreeToTerms: false,
    });
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="firstName">First Name *</label>
          <input
            type="text"
            id="firstName"
            value={formData.firstName}
            onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name *</label>
          <input
            type="text"
            id="lastName"
            value={formData.lastName}
            onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
            required
          />
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="email">Email Address *</label>
        <input
          type="email"
          id="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
        />
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="phone">Phone Number (Optional)</label>
          <input
            type="tel"
            id="phone"
            value={formData.phone}
            onChange={handlePhoneChange}
            placeholder="(555) 555-5555"
          />
          <p className="form-hint">Format: (555) 555-5555</p>
        </div>
        <div className="form-group">
          <label htmlFor="zipCode">ZIP Code *</label>
          <input
            type="text"
            id="zipCode"
            value={formData.zipCode}
            onChange={handleZipChange}
            placeholder="12345"
            required
          />
          <p className="form-hint">5-digit ZIP code</p>
        </div>
      </div>

      <div className="sms-preferences">
        <div className="checkbox-container">
          <label className="checkbox-label">
            <input
              type="checkbox"
              id="alertsTexts"
              checked={formData.alertsTexts}
              onChange={(e) => setFormData({ ...formData, alertsTexts: e.target.checked })}
            />
            <span className="checkbox-text">
              By checking this box and submitting this form, you consent to receive account alert text messages
              from Billzy at the number provided, including account monitoring alerts and account update messages.
              Consent is not a condition of purchase or service. Message &amp; data rates may apply.
              Message frequency varies. Reply STOP to unsubscribe or HELP for assistance.
            </span>
          </label>
        </div>
      </div>

      <div className="checkbox-container">
        <label className="checkbox-label">
          <input
            type="checkbox"
            id="agreeToTerms"
            checked={formData.agreeToTerms}
            onChange={(e) => setFormData({ ...formData, agreeToTerms: e.target.checked })}
            required
          />
          <span className="checkbox-text">
            I agree to the <a href="/terms" target="_blank" rel="noopener noreferrer">Terms &amp; Conditions</a> and{' '}
            <a href="/privacy" target="_blank" rel="noopener noreferrer">Privacy Policy</a>. *
          </span>
        </label>
      </div>

      <button type="submit" className="btn btn-primary btn-large">
        Submit Contact Request
      </button>
    </form>
  );
}
