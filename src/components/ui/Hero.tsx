import Link from 'next/link';
import styles from './hero.module.css';
import { ASSETS } from '@/config/assets';

export default function Hero() {
  return (
    <section className={styles.hero} style={{ backgroundImage: `linear-gradient(rgba(9, 30, 66, 0.8), rgba(9, 30, 66, 0.8)), url(${ASSETS.images.hero.main})` }}>
      <div className="container">
        <div className={styles.content}>
          <div className={styles.badge}>North West Ontario&apos;s Largest Stocking Supplier</div>
          <h1>99.99% Water Purity. Industrial Uptime. Guaranteed.</h1>
          <p>
            Built on a 50-year legacy of technical mastery, Pro-Tech is the region&apos;s premier authority on water and power solutions. 
            While others &quot;order in&quot; parts, we solve your emergency today from the largest regional inventory of Canadian-made equipment.
          </p>
          
          <div className={styles.ctaGroup}>
            <Link href="/quote" className="btn btn-primary">Request a Custom Quote</Link>
            <Link href="/shop" className={`${styles.ghostBtn} btn`}>Browse Full Inventory</Link>
          </div>
          
          <div className={styles.stats}>
            <div className={styles.statItem}>
              <strong>50+</strong>
              <span>Years of Expertise</span>
            </div>
            <div className={styles.statItem}>
              <strong>24/7</strong>
              <span>Emergency Support</span>
            </div>
            <div className={styles.statItem}>
              <strong>Largest</strong>
              <span>Stock in NW Ontario</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className={styles.overlay}></div>
    </section>
  );
}
