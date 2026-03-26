import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import styles from '../locations.module.css';
import Link from 'next/link';

export const metadata = {
  title: "99.99% Water Purity Kenora | Lake Life Solutions | Pro-Tech",
  description: "Advanced water treatment for Kenora and Lake of the Woods. UV sterilization, iron filtration, and seasonal property water security.",
};

export default function KenoraPage() {
  return (
    <div className={styles.page}>
      <Header />
      <main>
        <div className={styles.townHero}>
          <div className="container">
            <h1>Water Assurance in Kenora</h1>
            <p>Specialized water treatment and pump solutions for Kenora&apos;s permanent residences and seasonal lake-front properties.</p>
          </div>
        </div>

        <section className={styles.localFocus}>
          <div className="container">
            <div className={styles.focusGrid}>
              <div className={styles.focusText}>
                <h2>Lake of the Woods: The 99.99% Standard</h2>
                <p>
                  Kenora property owners shouldn&apos;t settle for anything less than laboratory-grade water purity. 
                  Our Kenora-specific systems target the unique mineral and bacterial profiles of the region to guarantee family health at the tap.
                </p>
                <ul className={styles.checkList}>
                  <li>Excalibur UV & Filtration Bundles</li>
                  <li>Seasonal property pump winterization</li>
                  <li>Immediate Kenora-dispatch support</li>
                </ul>
                <Link href="/quote?location=kenora" className="btn btn-primary">Get a Water Security Quote</Link>
              </div>
              <div className={styles.focusStats}>
                <div className={styles.stat}>
                  <span className={styles.number}>99.99%</span>
                  <span className={styles.label}>Purity Guarantee</span>
                </div>
                <div className={styles.stat}>
                  <span className={styles.number}>50+</span>
                  <span className={styles.label}>Kenora Service Contracts</span>
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
