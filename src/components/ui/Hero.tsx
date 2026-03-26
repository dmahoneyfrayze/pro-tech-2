import Link from 'next/link';
import styles from './hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={styles.content}>
          <div className={styles.badge}>Northwestern Ontario&apos;s Water & Power Authority</div>
          <h1>Industrial-Strength Solutions for Home & Industry</h1>
          <p>
            The region&apos;s largest stocking supplier of pumps, electric motors, and purification systems. 
            From commercial uptime to residential assurance, we keep the water flowing and the power running.
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
