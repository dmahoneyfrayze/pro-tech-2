'use client';

import { useState } from 'react';
import styles from './quoteForm.module.css';

type Step = 1 | 2 | 3;

export default function QuoteForm() {
  const [step, setStep] = useState<Step>(1);
  const [formData, setFormData] = useState({
    sector: '',
    serviceType: '',
    details: '',
    name: '',
    email: '',
    phone: '',
    location: '',
  });

  const nextStep = () => setStep((prev) => (prev + 1) as Step);
  const prevStep = () => setStep((prev) => (prev - 1) as Step);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you! Your quote request has been sent. Our specialists will contact you shortly.');
    // Logic to send to API
  };

  return (
    <div className={styles.formContainer}>
      <div className={styles.progress}>
        <div className={`${styles.dot} ${step >= 1 ? styles.active : ''}`}></div>
        <div className={`${styles.line} ${step >= 2 ? styles.active : ''}`}></div>
        <div className={`${styles.dot} ${step >= 2 ? styles.active : ''}`}></div>
        <div className={`${styles.line} ${step >= 3 ? styles.active : ''}`}></div>
        <div className={`${styles.dot} ${step >= 3 ? styles.active : ''}`}></div>
      </div>

      <form onSubmit={handleSubmit} className={styles.form}>
        {step === 1 && (
          <div className={styles.step}>
            <h3>What can we help you with?</h3>
            <div className={styles.options}>
              <label className={styles.option}>
                <input 
                  type="radio" 
                  name="sector" 
                  value="industrial" 
                  onChange={handleInputChange}
                  checked={formData.sector === 'industrial'}
                />
                <div className={styles.optionBox}>
                  <strong>Industrial & Commercial</strong>
                  <span>Pumps, Motors, Systems</span>
                </div>
              </label>
              <label className={styles.option}>
                <input 
                  type="radio" 
                  name="sector" 
                  value="residential" 
                  onChange={handleInputChange}
                  checked={formData.sector === 'residential'}
                />
                <div className={styles.optionBox}>
                  <strong>Residential Solutions</strong>
                  <span>Well Pumps & Treatment</span>
                </div>
              </label>
              <label className={styles.option}>
                <input 
                  type="radio" 
                  name="sector" 
                  value="service" 
                  onChange={handleInputChange}
                  checked={formData.sector === 'service'}
                />
                <div className={styles.optionBox}>
                  <strong>Emergency Service</strong>
                  <span>Repairs & Installations</span>
                </div>
              </label>
            </div>
            <button type="button" onClick={nextStep} disabled={!formData.sector} className="btn btn-primary">Continue</button>
          </div>
        )}

        {step === 2 && (
          <div className={styles.step}>
            <h3>Provide a few more details</h3>
            <div className={styles.inputGroup}>
              <label>Service/Product of interest</label>
              <input 
                type="text" 
                name="serviceType" 
                placeholder="e.g. Submersible Pump, Motor Rewind, Water Softener"
                value={formData.serviceType}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className={styles.inputGroup}>
              <label>Additional Details</label>
              <textarea 
                name="details" 
                rows={4} 
                placeholder="How can we specifically help you today?"
                value={formData.details}
                onChange={handleInputChange}
              ></textarea>
            </div>
            <div className={styles.buttonGroup}>
              <button type="button" onClick={prevStep} className="btn">Back</button>
              <button type="button" onClick={nextStep} className="btn btn-primary">Continue</button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className={styles.step}>
            <h3>Almost done! Where should we send the quote?</h3>
            <div className={styles.grid}>
              <div className={styles.inputGroup}>
                <label>Full Name</label>
                <input type="text" name="name" value={formData.name} onChange={handleInputChange} required />
              </div>
              <div className={styles.inputGroup}>
                <label>Email Address</label>
                <input type="email" name="email" value={formData.email} onChange={handleInputChange} required />
              </div>
              <div className={styles.inputGroup}>
                <label>Phone Number</label>
                <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} required />
              </div>
              <div className={styles.inputGroup}>
                <label>Job Location (City/Town)</label>
                <input type="text" name="location" value={formData.location} onChange={handleInputChange} required />
              </div>
            </div>
            <div className={styles.buttonGroup}>
              <button type="button" onClick={prevStep} className="btn">Back</button>
              <button type="submit" className="btn btn-accent">Submit Quote Request</button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
}
