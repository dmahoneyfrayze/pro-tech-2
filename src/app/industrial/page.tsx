import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import styles from './industrial.module.css';
import Link from 'next/link';

export const metadata = {
  title: "Industrial & Commercial Pump Solutions | Thunder Bay | Pro-Tech",
  description: "Specialized pump and motor solutions for Northwestern Ontario's industrial sector. High-volume systems, motor rewinds, and 24/7 commercial support.",
};

export default function IndustrialPage() {
  return (
    <div className={styles.page}>
      <Header />
      <main>
        <section className={styles.services}>
          <div className="container">
            <div className={styles.grid}>
              <div className={styles.item}>
                <h3>Mining & Heavy Extraction</h3>
                <p>Immediate replacement for heavy-duty motors and pumps in environments where shipping delays equate to massive revenue loss.</p>
                <ul className={styles.sectorList}>
                  <li>High-performance SLD pumps</li>
                  <li>Heavy-duty extraction motors</li>
                  <li>Emergency 24/7 technical support</li>
                </ul>
              </div>
              <div className={styles.item}>
                <h3>Paper & Pulp Mills</h3>
                <p>Maintaining the high-volume water movement systems and electric motors essential for continuous regional production.</p>
                <ul className={styles.sectorList}>
                  <li>Continuous-duty systems</li>
                  <li>Precision repair & rewind</li>
                  <li>On-site inventory readiness</li>
                </ul>
              </div>
              <div className={styles.item}>
                <h3>Air & Gas Compressors</h3>
                <p>Established regional authority in the repair and supply of industrial air systems—a high-frequency maintenance category.</p>
                <ul className={styles.sectorList}>
                  <li>System audits & repair</li>
                  <li>Energy-efficient motor swaps</li>
                  <li>Authorized parts supply</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.partnership}>
          <div className="container">
            <div className={styles.partnershipContent}>
              <h2>Industrial Technical Partnership</h2>
              <p>
                Move beyond simple procurement. We offer formal Technical Partnership contracts to ensure Zero-Delay inventory for your critical assets. 
                Whether you are a local infrastructure neighbor or a remote mining operation, we de-risk your business continuity.
              </p>
              <Link href="/quote?sector=industrial" className="btn btn-outline">Apply for Technical Partnership</Link>
            </div>
          </div>
        </section>

        <section className={styles.inventory}>
          <div className="container">
            <div className={styles.inventoryBox}>
              <h2>The &quot;Inventory Readiness&quot; Advantage</h2>
              <p>While non-local competitors &quot;order in&quot; parts, we solve the problem today. Our status as the region’s only authorized stocking supplier allows us to de-risk your purchase and guarantee zero-delay service.</p>
              <Link href="/shop" className="btn btn-accent">Check Inventory Status</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
