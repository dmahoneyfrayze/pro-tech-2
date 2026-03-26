import Link from 'next/link';
import Image from 'next/image';
import styles from './header.module.css';
import { ASSETS } from '@/config/assets';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.topBar}>
        <div className="container">
          <div className={styles.topBarContent}>
            <div className={styles.contactInfo}>
              <span>Thunder Bay, ON</span>
              <a href="tel:807-346-8324">807-346-8324</a>
              <a href="mailto:salestb@protechsales.ca">salestb@protechsales.ca</a>
            </div>
            <div className={styles.topLinks}>
              <Link href="/about">About Us</Link>
              <Link href="/contact">Contact</Link>
            </div>
          </div>
        </div>
      </div>
      
      <div className={styles.mainNav}>
        <div className="container">
          <div className={styles.navContent}>
            <Link href="/" className={styles.logo}>
              <Image 
                src={ASSETS.images.logo} 
                alt="Pro-Tech Sales & Service" 
                width={200} 
                height={80} 
                className={styles.logoImg}
                style={{ objectFit: 'contain' }}
              />
            </Link>
            
            <nav className={styles.nav}>
              <ul>
                <li><Link href="/industrial">Industrial & Commercial</Link></li>
                <li><Link href="/residential">Residential</Link></li>
                <li><Link href="/services">Services & Repairs</Link></li>
                <li><Link href="/shop" className={styles.shopLink}>Shop Online</Link></li>
              </ul>
            </nav>
            
            <div className={styles.actions}>
              <Link href="/quote" className="btn btn-primary">Get a Quote</Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
