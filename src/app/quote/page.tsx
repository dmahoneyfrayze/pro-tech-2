import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import QuoteForm from '@/components/forms/QuoteForm';
import styles from './quotePage.module.css';

export default function QuotePage() {
  return (
    <div className={styles.page}>
      <Header />
      
      <main className={styles.main}>
        <div className="container">
          <div className={styles.content}>
            <h1>Request a Professional Quote</h1>
            <p>
              Whether you&apos;re managing an industrial facility or a family home, our specialists provide accurate, 
              engineering-minded quotes for all your water and power needs.
            </p>
          </div>
          
          <QuoteForm />
          
          <div className={styles.support}>
            <p>Need immediate assistance? <strong>Call 807-346-8324</strong> for 24/7 Emergency Support.</p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
