'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    firstName: '',
    lastName: '',
    zipCode: '',
    marketingTexts: false,
    customerCareTexts: false,
    accountTexts: false,
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
      marketingTexts: false,
      customerCareTexts: false,
      accountTexts: false,
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
        <h3>SMS Text Message Opt-In</h3>
        
        <p className="form-info">
          By providing your mobile number and opting in below, you authorize Billzy to send you text messages. 
          Standard message and data rates may apply.
        </p>

        <div className="checkbox-container">
          <label className="checkbox-label">
            <input
              type="checkbox"
              id="marketingTexts"
              checked={formData.marketingTexts}
              onChange={(e) => setFormData({ ...formData, marketingTexts: e.target.checked })}
            />
            <span className="checkbox-text">
              I consent to receive recurring marketing and promotional text messages from Billzy. 
              Message frequency varies. Message and data rates may apply. 
              Reply STOP to cancel or HELP for help. By opting in, you agree to our{' '}
              <a href="/terms" target="_blank" rel="noopener noreferrer">Terms of Service</a> and{' '}
              <a href="/privacy" target="_blank" rel="noopener noreferrer">Privacy Policy</a>. 
              Consent is not required as a condition of purchase.
            </span>
          </label>
        </div>

        <div className="checkbox-container">
          <label className="checkbox-label">
            <input
              type="checkbox"
              id="customerCareTexts"
              checked={formData.customerCareTexts}
              onChange={(e) => setFormData({ ...formData, customerCareTexts: e.target.checked })}
            />
            <span className="checkbox-text">
              I consent to receive transactional text messages from Billzy, including form completion reminders, 
              account notifications, and customer care messages. Messages sent as needed. Message and data rates may apply. 
              Reply STOP to cancel or HELP for help. By opting in, you agree to our{' '}
              <a href="/terms" target="_blank" rel="noopener noreferrer">Terms of Service</a> and{' '}
              <a href="/privacy" target="_blank" rel="noopener noreferrer">Privacy Policy</a>. 
              Consent is not required as a condition of purchase.
            </span>
          </label>
        </div>

        <div className="checkbox-container">
          <label className="checkbox-label">
            <input
              type="checkbox"
              id="accountTexts"
              checked={formData.accountTexts}
              onChange={(e) => setFormData({ ...formData, accountTexts: e.target.checked })}
            />
            <span className="checkbox-text">
              I consent to receive promotional emails from Billzy. You can unsubscribe at any time 
              by following the unsubscribe link in our emails or by contacting support@billzy1.com.
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
            I agree to the <a href="/terms" target="_blank" rel="noopener noreferrer">Terms & Conditions</a> and{' '}
            <a href="/privacy" target="_blank" rel="noopener noreferrer">Privacy Policy</a>. *
          </span>
        </label>
      </div>

      <button type="submit" className="btn btn-primary btn-large">
        Request Consultation
      </button>
    </form>
  );
}
