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

    if (!validatePhone(formData.phone)) {
      alert('Please enter a valid phone number.');
      return;
    }

    if (!validateZipCode(formData.zipCode)) {
      alert('Please enter a valid 5-digit ZIP code.');
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
          <label htmlFor="phone">Phone Number *</label>
          <input
            type="tel"
            id="phone"
            value={formData.phone}
            onChange={handlePhoneChange}
            placeholder="(555) 555-5555"
            required
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
        <h3>SMS Text Message Preferences</h3>
        
        <div className="checkbox-group">
          <label className="checkbox-label">
            <input
              type="checkbox"
              id="marketingTexts"
              checked={formData.marketingTexts}
              onChange={(e) => setFormData({ ...formData, marketingTexts: e.target.checked })}
            />
            <span className="checkbox-text">
              I consent to receive marketing and promotional text messages from Billzy at the phone number provided above. 
              Message frequency varies. Message and data rates may apply.
            </span>
          </label>
        </div>

        <div className="checkbox-group">
          <label className="checkbox-label">
            <input
              type="checkbox"
              id="customerCareTexts"
              checked={formData.customerCareTexts}
              onChange={(e) => setFormData({ ...formData, customerCareTexts: e.target.checked })}
            />
            <span className="checkbox-text">
              I consent to receive customer care and service-related text messages from Billzy at the phone number provided above.
            </span>
          </label>
        </div>

        <div className="checkbox-group">
          <label className="checkbox-label">
            <input
              type="checkbox"
              id="accountTexts"
              checked={formData.accountTexts}
              onChange={(e) => setFormData({ ...formData, accountTexts: e.target.checked })}
            />
            <span className="checkbox-text">
              I consent to receive account-related text messages from Billzy at the phone number provided above.
            </span>
          </label>
        </div>

        <p className="form-disclaimer">
          You can opt out at any time by replying STOP to any text message. For help, reply HELP. 
          By providing your phone number and checking these boxes, you agree to receive text messages from Billzy. 
          Your consent is not a condition of purchase.
        </p>
      </div>

      <button type="submit" className="btn btn-primary btn-large">
        Submit Contact Request
      </button>
    </form>
  );
}
