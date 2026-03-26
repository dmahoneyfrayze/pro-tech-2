import Link from 'next/link';
import styles from './categorySection.module.css';
import { ASSETS } from '@/config/assets';

export default function CategorySection() {
  const categories = [
    {
      title: 'Commercial & Industrial',
      description: 'Heavy-duty pumps, electric motors, and custom water solutions designed for maximum uptime and efficiency in NW Ontario facilities.',
      link: '/industrial',
      image: ASSETS.images.categories.industrial,
      features: ['High-volume systems', 'Motor repair & rewind', 'Industrial purification']
    },
    {
      title: 'Residential Solutions',
      description: 'Reliable water pressure, well pumps, and advanced purification for your family home or cottage. Peace of mind for every tap.',
      link: '/residential',
      image: ASSETS.images.categories.residential,
      features: ['Well pump systems', 'Whole-home filters', 'Emergency repairs']
    }
  ];

  return (
    <section className={styles.categories}>
      <div className="container">
        <div className={styles.header}>
          <h2>Solutions Built for Northwestern Ontario</h2>
          <p>We provide specialized sales, service, and installation across two primary sectors.</p>
        </div>
        
        <div className={styles.grid}>
          {categories.map((cat, idx) => (
            <div key={idx} className={styles.card}>
              <div 
                className={styles.image} 
                style={{ backgroundImage: `url(${cat.image})` }}
              ></div>
              <div className={styles.content}>
                <h3>{cat.title}</h3>
                <p>{cat.description}</p>
                <ul className={styles.featureList}>
                  {cat.features.map((f, i) => (
                    <li key={i}>{f}</li>
                  ))}
                </ul>
                <Link href={cat.link} className="btn btn-primary">Explore {cat.title}</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
