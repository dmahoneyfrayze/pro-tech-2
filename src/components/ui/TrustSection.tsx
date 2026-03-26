import styles from './trustSection.module.css';

export default function TrustSection() {
  const highlights = [
    {
      title: 'Expert Installation',
      description: 'We don&apos;t just sell equipment. Our factory-trained technicians ensure your system is installed for peak performance and longevity.'
    },
    {
      title: 'Largest Stocking Dealer',
      description: 'Avoid long lead times. We maintain the region&apos;s most comprehensive inventory of pumps, motors, and critical spare parts.'
    },
    {
      title: 'Northwest Ontario Focus',
      description: 'Based in Thunder Bay, we understand the unique water and power challenges of our northern environment.'
    }
  ];

  return (
    <section className={styles.trust}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.content}>
            <div className={styles.label}>Why Pro-Tech?</div>
            <h2>Full-Service Authority from Selection to Installation</h2>
            <p>
              For over 50 years, Pro-Tech Sales & Service has been the backbone of water and power infrastructure in Thunder Bay and beyond. 
              We bridge the gap between high-end equipment sales and field-proven technical expertise.
            </p>
            <div className={styles.highlights}>
              {highlights.map((item, idx) => (
                <div key={idx} className={styles.item}>
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.imagePlaceholder}>
            {/* Visual representation of a service truck or installation team */}
            <div className={styles.imgInner}>
              <span>Authentic Regional Expertise</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
