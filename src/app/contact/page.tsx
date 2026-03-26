import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import styles from './contact.module.css';
import { ASSETS } from '@/config/assets';

export default function ContactPage() {
  return (
    <div className={styles.page}>
      <Header />
      <main>
        <div className={styles.hero}>
          <div className="container">
            <h1>Get in Touch</h1>
            <p>Immediate support for residential health and industrial uptime across North West Ontario.</p>
          </div>
        </div>

        <section className={styles.content}>
          <div className="container">
            <div className={styles.grid}>
              <div className={styles.info}>
                <h2>Visit Our Facility</h2>
                <div className={styles.infoGroup}>
                  <h3>Address</h3>
                  <p>541 Tenth Ave, Thunder Bay, ON P7B 2R3</p>
                </div>
                <div className={styles.infoGroup}>
                  <h3>Phone</h3>
                  <a href="tel:807-346-8324" className={styles.phone}>807-346-8324</a>
                  <p className={styles.note}>24/7 Emergency Support Available</p>
                </div>
                <div className={styles.infoGroup}>
                  <h3>Email</h3>
                  <a href="mailto:salestb@protechsales.ca">salestb@protechsales.ca</a>
                </div>
                <div className={styles.hours}>
                  <h3>Counter Hours</h3>
                  <ul>
                    <li>Monday - Friday: 8:00 AM - 5:00 PM</li>
                    <li>Saturday - Sunday: Closed (Emergency Only)</li>
                  </ul>
                </div>
              </div>

              <div className={styles.formBox}>
                <h2>Send a Message</h2>
                <form className={styles.form}>
                  <div className={styles.inputRow}>
                    <input type="text" placeholder="Full Name" required />
                    <input type="email" placeholder="Email Address" required />
                  </div>
                  <select required>
                    <option value="">Select Department / Inquiry</option>
                    <option value="industrial">Industrial Technical Support</option>
                    <option value="residential">Residential Water Treatment</option>
                    <option value="service">Service & Repair Request</option>
                    <option value="quote">Bulk Inventory Quote</option>
                  </select>
                  <textarea placeholder="How can we help you?" rows={5} required></textarea>
                  <button type="submit" className="btn btn-primary w-full">Send Message</button>
                </form>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.map}>
          <div className={styles.mapPlaceholder}>
                [Interactive Map: 541 Tenth Ave, Thunder Bay]
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
