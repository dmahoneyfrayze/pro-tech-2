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
        <div className={styles.hero}>
          <div className="container">
            <h1>Industrial & Commercial Engineering</h1>
            <p>Maximizing uptime for Northwestern Ontario&apos;s critical infrastructure.</p>
            <Link href="/quote?sector=industrial" className="btn btn-primary">Request Industrial Consultation</Link>
          </div>
        </div>

        <section className={styles.services}>
          <div className="container">
            <div className={styles.grid}>
              <div className={styles.item}>
                <h3>High-Volume Pump Systems</h3>
                <p>Custom-engineered solutions for mining, municipal, and industrial applications. We stock the heavy-duty equipment others only order.</p>
              </div>
              <div className={styles.item}>
                <h3>Electric Motor Sales & Service</h3>
                <p>Authorized dealer for Leeson and more. Full-service repair, rewinding, and preventative maintenance to keep your facility running.</p>
              </div>
              <div className={styles.item}>
                <h3>Commercial Water Treatment</h3>
                <p>Large-scale purification and filtration systems designed for regulatory compliance and operational excellence.</p>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.inventory}>
          <div className="container">
            <div className={styles.inventoryBox}>
              <h2>The Region&apos;s Largest Stockpile</h2>
              <p>In the industrial world, every minute of downtime counts. We maintain an massive on-site inventory in Thunder Bay to ensure immediate availability of critical components.</p>
              <Link href="/shop" className="btn btn-accent">Browse Industrial Inventory</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
