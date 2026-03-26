import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import styles from './product.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { ASSETS } from '@/config/assets';

export default function AssurancePackagePage() {
  return (
    <div className={styles.page}>
      <Header />
      <main>
        <section className={styles.productHeader}>
          <div className="container">
            <div className={styles.breadcrumb}>
              <Link href="/shop">Shop</Link> / <Link href="/shop/purification">Water Treatment</Link> / 99.99% Assurance Bundle
            </div>
            <div className={styles.grid}>
              <div className={styles.gallery}>
                <div className={styles.mainImage}>
                  <Image 
                    src={ASSETS.images.hero.residential} 
                    alt="99.99% Water Assurance Package" 
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
              </div>
              <div className={styles.details}>
                <span className={styles.tag}>Best Seller for North West Ontario</span>
                <h1>The 99.99% Water Assurance Bundle</h1>
                <p className={styles.subtitle}>Complete Residential Safety Ecosystem: Excalibur UV + Precision Filtration + High-Efficiency Pompco S2</p>
                <div className={styles.price}>
                  Starting at <span className={styles.amount}>$2,499</span> 
                  <span className={styles.installation}>including professional Thunder Bay installation</span>
                </div>
                
                <div className={styles.valueProp}>
                  <h3>Why this bundle?</h3>
                  <ul>
                    <li><strong>Lab-Grade Purity:</strong> Eliminates 99.99% of bacteria and viruses in lake-source or well water.</li>
                    <li><strong>Inventory Readiness:</strong> We stock every component. Pickup today or install within 48 hours.</li>
                    <li><strong>Rugged Durability:</strong> Pompco S2 Pump - Canadian-made for the rugged 807 climate.</li>
                  </ul>
                </div>

                <div className={styles.actions}>
                  <Link href="/quote?product=assurance-package" className="btn btn-primary btn-lg">Request Installation Quote</Link>
                  <p className={styles.stockInfo}>✓ In Stock at 541 Tenth Ave - Immediate Pickup Available</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.techSpecs}>
          <div className="container">
            <h2>Detailed Technical Composition</h2>
            <div className={styles.specGrid}>
              <div className={styles.specItem}>
                <h4>Excalibur UV Sterilizer</h4>
                <p>30 mJ/cm² dose rate at maximum flow. High-intensity UV lamps for complete microbiological safety.</p>
              </div>
              <div className={styles.specItem}>
                <h4>Pompco S2 Jet Pump</h4>
                <p>Cast iron construction. 1/2 HP or 3/4 HP options. The gold standard for regional reliability.</p>
              </div>
              <div className={styles.specItem}>
                <h4>Multi-Stage Filtration</h4>
                <p>Sediment + Carbon block system. Removes particulates, odors, and chlorine-byproducts.</p>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.callout}>
          <div className="container text-center">
            <h2>Don&apos;t Just Buy a Pump. Buy Peace of Mind.</h2>
            <p>Our solutions are designed specifically for the unique mineral and environmental profiles of North West Ontario.</p>
            <Link href="/contact" className="btn btn-outline">Speak with Dom for a Custom Solution</Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
