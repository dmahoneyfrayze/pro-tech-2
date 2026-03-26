import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import styles from './locations.module.css';
import Link from 'next/link';

export default function LocationsHub() {
  const towns = [
    {
      name: 'Dryden',
      focus: 'Industrial & Mining Support',
      description: 'The regional hub for mining machinery repair and heavy-duty motor inventory.',
      path: '/locations/dryden'
    },
    {
      name: 'Kenora',
      focus: 'Water Purification & Lake Life',
      description: 'Specialized 99.99% water assurance systems for seasonal properties and residential health.',
      path: '/locations/kenora'
    },
    {
      name: 'Sioux Lookout',
      focus: 'Critical Infrastructure',
      description: 'Authorized stocking dealer support for remote infrastructure and municipal water systems.',
      path: '/locations/sioux-lookout'
    }
  ];

  return (
    <div className={styles.page}>
      <Header />
      <main>
        <div className={styles.hero}>
          <div className="container">
            <h1>Serving All of North West Ontario</h1>
            <p>From Thunder Bay to the remote reaches of the trade community, Pro-Tech is your regional authority.</p>
          </div>
        </div>

        <section className={styles.towns}>
          <div className="container">
            <div className={styles.grid}>
              {towns.map((town, idx) => (
                <div key={idx} className={styles.townCard}>
                  <h2>{town.name}</h2>
                  <span className={styles.badge}>{town.focus}</span>
                  <p>{town.description}</p>
                  <Link href={town.path} className="btn btn-outline">View Local Services</Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
