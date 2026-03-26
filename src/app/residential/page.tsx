import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import styles from './residential.module.css';
import Link from 'next/link';

export const metadata = {
  title: "Residential Water Pumps & Filtration | Thunder Bay | Pro-Tech",
  description: "Reliable water solutions for your home or cottage. From well pumps to advanced purification, Pro-Tech keeps your family's water safe and flowing.",
};

export default function ResidentialPage() {
  return (
    <div className={styles.page}>
      <Header />
      <main>
        <div className={styles.hero}>
          <div className="container">
            <h1>The 99.99% Water Assurance</h1>
            <p>Repositioning your home water system from hardware to a family health and safety asset. North West Ontario&apos;s most trusted residential water partner.</p>
            <Link href="/quote?sector=residential" className="btn btn-primary">Secure My Water Purity</Link>
          </div>
        </div>

        <section className={styles.solutionIntro}>
          <div className="container text-center">
            <h2>Your Water is Your Health</h2>
            <p>From the iron-rich wells of Thunder Bay to the pristine (but bacterial) lakes of Kenora, we provide the industrial-grade precision your family deserves.</p>
          </div>
        </section>

        <section className={styles.solutions}>
          <div className="container">
            <div className={styles.grid}>
              <div className={styles.solution}>
                <div className={styles.icon}>💧</div>
                <h3>Well Pump Systems</h3>
                <p>Installation and 24/7 repair for jet pumps, submersible pumps, and constant pressure systems.</p>
              </div>
              <div className={styles.solution}>
                <div className={styles.icon}>🛡️</div>
                <h3>Water Purification</h3>
                <p>Whole-home UV systems, water softeners, and iron filters designed specifically for regional water chemistry.</p>
              </div>
              <div className={styles.solution}>
                <div className={styles.icon}>🛠️</div>
                <h3>Expert Installation</h3>
                <p>Don&apos;t risk DIY. Our professional installation ensures your warranty remains valid and your system lasts.</p>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.detailedSolutions}>
          <div className="container">
            <div className={styles.detailGrid}>
              <div className={styles.detailCard}>
                <div className={styles.cardHeader}>
                  <span className={styles.tag}>Shield</span>
                  <h3>99.99% Biological Safety</h3>
                </div>
                <p>North West Ontario water sources often harbor hidden bacteria. Our Excalibur UV systems provide a physical barrier that guarantees safety at the tap, 24/7/365.</p>
                <Link href="/shop/purification/assurance-package" className={styles.learnMore}>Explore the Assurance Package &rarr;</Link>
              </div>

              <div className={styles.detailCard}>
                <div className={styles.cardHeader}>
                  <span className={styles.tag}>Purity</span>
                  <h3>Arsenic & Iron Removal</h3>
                </div>
                <p>Regional mineral profiles can damage appliances and affect health. We specialize in custom-calibrated media filters that target the specific chemistry of your well.</p>
                <Link href="/quote?sector=residential&service=filtration" className={styles.learnMore}>Book a Water Test &rarr;</Link>
              </div>

              <div className={styles.detailCard}>
                <div className={styles.cardHeader}>
                  <span className={styles.tag}>Protection</span>
                  <h3>Flood & Backup Systems</h3>
                </div>
                <p>Don&apos;t risk your basement expansion to a single pump. We install high-performance sump systems with secondary battery backups for total seasonal security.</p>
                <Link href="/shop/pumps" className={styles.learnMore}>View Pump Inventory &rarr;</Link>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.seasonal}>
          <div className="container">
            <div className={styles.seasonalContent}>
              <div className={styles.seasonalText}>
                <h2>Seasonal Property Mastery</h2>
                <p>Serving the Lake of the Woods and Kenora regions with professional opening, winterization, and water security for seasonal residences.</p>
                <ul className={styles.featureList}>
                  <li>UV System Winterization & Storage</li>
                  <li>Jet-Pump Priming & Seasonal Setup</li>
                  <li>Remote Monitoring for Off-Season Security</li>
                </ul>
                <Link href="/locations/kenora" className="btn btn-outline">Explore Kenora Services</Link>
              </div>
              <div className={styles.seasonalBadge}>
                  <span className={styles.badgeText}>Kenora Specialized</span>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.support}>
          <div className="container">
            <div className={styles.supportCard}>
              <h2>Strategic Campaign: Sub-Sewer Level Expansion</h2>
              <p>
                Finishing your basement? Our specialized sewage pumps are the primary enablers for high-value bathrooms and laundry suites below the sewer line. 
                Don&apos;t risk thousands in septic failure—install the region&apos;s best high-performance pumps.
              </p>
              <Link href="/quote?sector=service" className="btn btn-primary">Start Your Basement Expansion</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
