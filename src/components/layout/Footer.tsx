import Link from 'next/link';
import Image from 'next/image';
import styles from './footer.module.css';
import { ASSETS } from '@/config/assets';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid} style={{ gridTemplateColumns: 'repeat(5, 1fr)' }}>
          <div className={styles.companyInfo}>
            <Link href="/" className={styles.logo}>
              <Image 
                src={ASSETS.images.logo} 
                alt="Pro-Tech Sales & Service" 
                width={150} 
                height={50} 
                className={styles.logoImg}
              />
            </Link>
            <p className={styles.description}>
              Northwestern Ontario's largest stocking supplier of pumps and electric motors. Leaders in water treatment Solutions.
            </p>
            <div className={styles.address}>
              541 Tenth Ave<br />
              Thunder Bay, Ontario P7B 2R3
            </div>
            <div className={styles.social}>
              <a href="https://www.facebook.com/profile.php?id=61588130482724" target="_blank" rel="noopener noreferrer" className={styles.facebookLink}>
                Follow us on Facebook
              </a>
            </div>
          </div>
          
          <div className={styles.linksColumn}>
            <h3>Sectors</h3>
            <ul>
              <li><Link href="/industrial">Industrial & Commercial</Link></li>
              <li><Link href="/residential">Residential Solutions</Link></li>
              <li><Link href="/services">Pump Installations</Link></li>
              <li><Link href="/repair">Motor Repair Services</Link></li>
            </ul>
          </div>
          
          <div className={styles.linksColumn}>
            <h3>Products</h3>
            <ul>
              <li><Link href="/shop/pumps">Water Pumps</Link></li>
              <li><Link href="/shop/motors">Electric Motors</Link></li>
              <li><Link href="/shop/purification">Water Treatment</Link></li>
              <li><Link href="/shop">Browse All Inventory</Link></li>
            </ul>
          </div>
          
          <div className={styles.linksColumn}>
            <h3>Service Locations</h3>
            <ul>
              <li><Link href="/locations/thunder-bay">Thunder Bay & Local</Link></li>
              <li><Link href="/locations/dryden">Dryden & Regional</Link></li>
              <li><Link href="/locations/kenora">Kenora & Lake Life</Link></li>
              <li><Link href="/locations/sioux-lookout">Sioux Lookout Hub</Link></li>
            </ul>
          </div>
          
          <div className={styles.contactColumn}>
            <h3>Contact Us</h3>
            <a href="tel:807-346-8324" className={styles.phone}>807-346-8324</a>
            <a href="mailto:salestb@protechsales.ca" className={styles.email}>salestb@protechsales.ca</a>
            <div className={styles.hours}>
              <p><strong>Hours:</strong></p>
              <p>Monday - Friday: 8:00 AM - 5:00 PM</p>
              <p>24/7 Emergency Support Available</p>
            </div>
          </div>
        </div>
        
        <div className={styles.bottomBar}>
          <p>&copy; {currentYear} Pro-Tech Sales & Service. All rights reserved.</p>
          <div className={styles.bottomLinkGroup}>
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
