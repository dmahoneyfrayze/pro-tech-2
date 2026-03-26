import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import TrustSection from '@/components/ui/TrustSection';
import styles from './about.module.css';
import { ASSETS } from '@/config/assets';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className={styles.page}>
      <Header />
      <main>
        <div className={styles.hero}>
          <div className="container">
            <h1>50 Years of Technical Mastery</h1>
            <p>Built on legacy. Established for the future. Northwestern Ontario&apos;s water and power authority.</p>
          </div>
        </div>

        <section className={styles.story}>
          <div className="container">
            <div className={styles.grid}>
              <div className={styles.text}>
                <h2>North West Ontario&apos;s Moat: Availability</h2>
                <p>
                  Established as a cornerstone of the Thunder Bay trade community in 2009, Pro-Tech Sales & Service carries a multi-generational legacy in industrial and residential water infrastructure. 
                  In a region where lead times can mean catastrophe, we maintain the region&apos;s largest stocking inventory of Canadian-made products.
                </p>
                <p>
                  We are not just a retail outlet. We are a technical consultancy where experts like Dom ensure the &quot;job is done right&quot; the first time. 
                  Our authority is built on warranted, genuine parts and a deep commitment to regional uptime.
                </p>
              </div>
              <div className={styles.imageBox}>
                <Image 
                  src={ASSETS.images.logo} 
                  alt="Pro-Tech Legacy" 
                  width={400} 
                  height={200}
                  className={styles.aboutImg}
                />
              </div>
            </div>
          </div>
        </section>

        <TrustSection />

        <section className={styles.values}>
          <div className="container text-center">
            <h2>The Pro-Tech Standard</h2>
            <div className={styles.valueGrid}>
              <div className={styles.valueItem}>
                <h3>Canadian Made</h3>
                <p>Ruggedized for the North West Ontario climate with industry-leading domestic quality.</p>
              </div>
              <div className={styles.valueItem}>
                <h3>Authorized Dealer</h3>
                <p>Genuine, warrantied technology from global leaders: Excalibur, Pompco, Barnes, and Leeson.</p>
              </div>
              <div className={styles.valueItem}>
                <h3>Stellar Installation</h3>
                <p>Precision repair and installation that translates into decades of reliable service.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
