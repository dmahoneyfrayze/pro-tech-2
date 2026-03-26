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
            <div className={styles.badge}>Industrial & Commercial Authority</div>
            <h1>Northwest Ontario&apos;s Regional Lifeline</h1>
            <p>From the remote shafts of Red Lake to the critical water infrastructure of Thunder Bay, we provide the industrial-grade precision your enterprise demands.</p>
            <Link href="/quote?sector=industrial" className="btn btn-primary">Establish Technical Partnership</Link>
          </div>
        </div>

        <section className={styles.statsBar}>
          <div className="container">
            <div className={styles.statGrid}>
              <div className={styles.statLine}>
                <strong>24/7</strong>
                <span>Emergency Field Support</span>
              </div>
              <div className={styles.statLine}>
                <strong>Largest</strong>
                <span>Regional Stocking Moat</span>
              </div>
              <div className={styles.statLine}>
                <strong>50+</strong>
                <span>Years of Legacy Trust</span>
              </div>
            </div>
          </div>
        </section>
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
              <div className={styles.partnershipText}>
                <h2>Zero-Delay Technical Partnership</h2>
                <p>
                  Move beyond simple procurement. Our Technical Partnership Program allows industrial facilities to de-risk their entire operation through **Guaranteed Component Readiness**. 
                  We maintain your critical spares in our Thunder Bay warehouse, ensuring that downtime is measured in minutes, not shipping days.
                </p>
                <ul className={styles.benefitList}>
                  <li>Priority Service Ticketing (2-Hour Triage)</li>
                  <li>Custom-Stocked Spares for Your Specific Fleet</li>
                  <li>On-Site Predictive Maintenance Consults</li>
                </ul>
                <Link href="/quote?sector=industrial&type=partnership" className="btn btn-primary">Join the Program</Link>
              </div>
              <div className={styles.partnershipBadge}>
                <div className={styles.badgeIcon}>🛡️</div>
                <span>Industrial Uptime Certified</span>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.authorized}>
          <div className="container">
            <div className={styles.authBox}>
              <h3>Authorized Regional Service Center</h3>
              <p>We don&apos;t just sell equipment; we are the regional specialists authorized to maintain it. Our shop is the primary destination for warranty work, rewinds, and complex re-builds.</p>
              <div className={styles.brandLogos}>
                <div className={styles.brandLabel}><strong>LEESON</strong> Authorized Dealer</div>
                <div className={styles.brandLabel}><strong>POMPCO</strong> Authorized Dealer</div>
                <div className={styles.brandLabel}><strong>BARNES</strong> Authorized Dealer</div>
                <div className={styles.brandLabel}><strong>EXCALIBUR</strong> Authorized Dealer</div>
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
