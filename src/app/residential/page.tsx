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
            <h1>Pure Water for Your Family Home</h1>
            <p>Northwestern Ontario&apos;s trusted experts for residential well systems and purification.</p>
            <Link href="/quote?sector=residential" className="btn btn-primary">Fix My Water Issue</Link>
          </div>
        </div>

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

        <section className={styles.support}>
          <div className="container">
            <div className={styles.supportCard}>
              <h2>Cottage & Remote Home Specialists</h2>
              <p>We understand the unique needs of property owners across NW Ontario. From seasonal startups to year-round reliability, we serve you.</p>
              <a href="tel:807-346-8324" className="btn btn-primary">Call Support: 807-346-8324</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
