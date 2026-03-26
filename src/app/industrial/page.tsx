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
            <h1>Industrial Uptime: The Only Metric</h1>
            <p>Leveraging North West Ontario&apos;s largest inventory to eliminate catastrophic downtime for local industry.</p>
            <Link href="/quote?sector=industrial" className="btn btn-primary">Request Uptime Consultation</Link>
          </div>
        </div>

        <section className={styles.services}>
          <div className="container">
            <div className={styles.grid}>
              <div className={styles.item}>
                <h3>Mining & Heavy Extraction</h3>
                <p>Immediate replacement for heavy-duty motors and pumps in environments where delays equate to massive revenue loss.</p>
              </div>
              <div className={styles.item}>
                <h3>Paper & Pulp Mills</h3>
                <p>Maintaining the high-volume water movement systems and electric motors essential for continuous regional production.</p>
              </div>
              <div className={styles.item}>
                <h3>Air & Gas Compressors</h3>
                <p>Establishing regional dominance in the repair and supply of industrial air systems—a high-frequency maintenance category.</p>
              </div>
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
