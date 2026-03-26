import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/ui/Hero';
import CategorySection from '@/components/ui/CategorySection';
import TrustSection from '@/components/ui/TrustSection';
import FloatingCTA from '@/components/ui/FloatingCTA';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
      <FloatingCTA />
      
      <main>
        <Hero />
        
        {/* Trusted Partners / Logos Bar */}
        <section className={styles.partners}>
          <div className="container">
            <p>Authorized Dealer for Top Industrial Brands:</p>
            <div className={styles.partnerGrid}>
              <span>Leeson</span>
              <span>Excalibur</span>
              <span>Canature</span>
              <span>Grundfos</span>
              <span>Franklin Electric</span>
            </div>
          </div>
        </section>

        <CategorySection />
        
        <TrustSection />

        {/* Lead Magnet CTA */}
        <section className={styles.finalCta}>
          <div className="container">
            <div className={styles.ctaCard}>
              <h2>Ready to optimize your water & power systems?</h2>
              <p>Speak with an engineering-minded specialist today. Serving all of Northwest Ontario.</p>
              <div className={styles.ctaActions}>
                <a href="tel:807-346-8324" className="btn btn-primary">Call 807-346-8324</a>
                <a href="/quote" className="btn btn-accent">Request a Free Quote</a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
