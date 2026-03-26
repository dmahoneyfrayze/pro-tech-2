import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import styles from './shop.module.css';
import Link from 'next/link';

export default function ShopPage() {
  const categories = [
    {
      title: 'Water Pumps',
      items: ['Jet Pumps', 'Submersible Pumps', 'Centrifugal Pumps', 'Sewer & Effluent'],
      path: '/shop/pumps'
    },
    {
      title: 'Electric Motors',
      items: ['Single Phase', 'Three Phase', 'Variable Speed', 'AC/DC Motors'],
      path: '/shop/motors'
    },
    {
      title: 'Water Treatment',
      items: ['UV Sterilizers', 'Water Softeners', 'Iron Filtration', 'Reverse Osmosis'],
      path: '/shop/purification'
    }
  ];

  return (
    <div className={styles.page}>
      <Header />
      <main>
        <div className={styles.hero}>
          <div className="container">
            <h1>Regional Inventory Catalog</h1>
            <p>North West Ontario&apos;s largest stocking supplier. Immediate pickup available at 541 Tenth Ave.</p>
          </div>
        </div>

        <section className={styles.categories}>
          <div className="container">
            <div className={styles.grid}>
              {categories.map((cat, idx) => (
                <div key={idx} className={styles.catCard}>
                  <h2>{cat.title}</h2>
                  <ul className={styles.itemList}>
                    {cat.items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                  <Link href={cat.path} className="btn btn-outline">Browse Inventory</Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.guarantee}>
          <div className="container text-center">
            <div className={styles.guaranteeBox}>
              <h2>Authorized Stocking Dealer</h2>
              <p>We are the region&apos;s authorized source for **Excalibur**, **Pompco**, **Barnes**, and **Leeson**. Genuine parts, full warranties, and immediate local availability.</p>
              <Link href="/quote" className="btn btn-accent">Request Bulk Quote</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
