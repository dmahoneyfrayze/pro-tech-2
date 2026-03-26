import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import styles from '../../purification/assurance-package/product.module.css'; // Corrected path
import Link from 'next/link';
import Image from 'next/image';
import { ASSETS } from '@/config/assets';

export default function IndustrialUptimeKitPage() {
  return (
    <div className={styles.page}>
      <Header />
      <main>
        <section className={styles.productHeader}>
          <div className="container">
            <div className={styles.breadcrumb}>
              <Link href="/shop">Shop</Link> / <Link href="/shop/motors">Electric Motors</Link> / Industrial Uptime Kit
            </div>
            <div className={styles.grid}>
              <div className={styles.gallery}>
                <div className={styles.mainImage}>
                  <Image 
                    src={ASSETS.images.hero.industrial} 
                    alt="Industrial Uptime Kit" 
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
              </div>
              <div className={styles.details}>
                <span className={styles.tag} style={{ background: 'var(--primary)', color: 'white' }}>Critical Asset Protection</span>
                <h1>The Industrial Uptime Kit</h1>
                <p className={styles.subtitle}>Mining & Mill Continuity Bundle: Heavy-Duty Leeson Motor + High-Pressure SLD Pump + Sync-Inventory Service</p>
                <div className={styles.price}>
                  Starting at <span className={styles.amount}>$12,400</span> 
                  <span className={styles.installation}>including NW Ontario site-readiness audit</span>
                </div>
                
                <div className={styles.valueProp}>
                  <h3>Zero-Delay Performance</h3>
                  <ul>
                    <li><strong>Mining-Grade Reliability:</strong> Specifically configured for the high-vibration and moisture-rich environments of regional mines.</li>
                    <li><strong>Sync-Inventory Moat:</strong> We hold a duplicate &quot;hot-swap&quot; kit at our facility for your specific operation.</li>
                    <li><strong>Technical Mastery:</strong> Dom and our team provide the precision repair and alignment that off-shore suppliers can&apos;t match locally.</li>
                  </ul>
                </div>

                <div className={styles.actions}>
                  <Link href="/quote?product=industrial-uptime-kit" className="btn btn-primary btn-lg">Apply for Technical Partnership</Link>
                  <p className={styles.stockInfo}>✓ Critical Spares in Stock - 541 Tenth Ave</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.techSpecs}>
          <div className="container">
            <h2>Industrial Technical Composition</h2>
            <div className={styles.specGrid}>
              <div className={styles.specItem}>
                <h4>Leeson Multi-HP Motor</h4>
                <p>TEFC construction with high-torque starting capabilities. Optimized for continuous-duty mill operation.</p>
              </div>
              <div className={styles.specItem}>
                <h4>SLD Spec High-Pressure Pump</h4>
                <p>Designed for slurry and heavy extraction. Wear-resistant impellers and oversized seal chambers.</p>
              </div>
              <div className={styles.specItem}>
                <h4>Inventory-Sync Contract</h4>
                <p>A formal agreement where Pro-Tech maintains localized stock specifically for your operational footprint.</p>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.callout}>
          <div className="container text-center">
            <h2>Your Uptime is Our Only Metric.</h2>
            <p>Don&apos;t let a lead-time issue halt your production. Partner with the region&apos;s largest stocking supplier.</p>
            <Link href="/locations/dryden" className="btn btn-outline">Explore Dryden Regional Support</Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
