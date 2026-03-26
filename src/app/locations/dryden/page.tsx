import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import styles from '../locations.module.css';
import Link from 'next/link';

export const metadata = {
  title: "Industrial Pump & Motor Repair Dryden | Pro-Tech",
  description: "Dryden's premier authority for mining machinery repair and industrial motor supply. Zero-delay inventory for North West Ontario's resource sector.",
};

export default function DrydenPage() {
  return (
    <div className={styles.page}>
      <Header />
      <main>
        <div className={styles.townHero}>
          <div className="container">
            <h1>Industrial Uptime in Dryden</h1>
            <p>Direct technical partnership and inventory support for Dryden&apos;s mining and paper mill operations.</p>
          </div>
        </div>

        <section className={styles.localFocus}>
          <div className="container">
            <div className={styles.focusGrid}>
              <div className={styles.focusText}>
                <h2>North West Ontario&apos;s Mining Hub</h2>
                <p>
                  For Dryden-based industrial operations, shipping delays for critical motors or pumps are not an option. 
                  Pro-Tech provides **Sync-Inventory** services—dedicated stocking of your specific critical assets at our Thunder Bay facility for immediate Dryden dispatch.
                </p>
                <ul className={styles.checkList}>
                  <li>Authorized Leeson & Pompco repair</li>
                  <li>Mining-duty extraction motor swaps</li>
                  <li>24/7 Field support for regional paper mills</li>
                </ul>
                <Link href="/quote?location=dryden" className="btn btn-primary">Request Industrial Audit</Link>
              </div>
              <div className={styles.focusStats}>
                <div className={styles.stat}>
                  <span className={styles.number}>2.5hrs</span>
                  <span className={styles.label}>Average Dryden Response</span>
                </div>
                <div className={styles.stat}>
                  <span className={styles.number}>$0</span>
                  <span className={styles.label}>Technical Partnership Setup</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
