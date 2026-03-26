import styles from './trustSection.module.css';
import { ASSETS } from '@/config/assets';

export default function TrustSection() {
  const highlights = [
    {
      title: 'The Canadian-Made Moat',
      description: 'We prioritize ruggedized Canadian equipment from brands like Excalibur and Pompco, built specifically for the North West Ontario climate.'
    },
    {
      title: 'Consultative Mastery',
      description: 'Our senior specialists, like Dom, move your experience from a simple transaction to a professional consultation. We ensure the job is done right the first time.'
    },
    {
      title: 'Immediate Inventory Readiness',
      description: 'Logistical superiority is our competitive moat. We stock the critical pump and motor units you need today, eliminating costly downtime.'
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
          <div 
            className={styles.imagePlaceholder}
            style={{ backgroundImage: `url(${ASSETS.images.placeholders.installation})`, backgroundSize: 'cover' }}
          >
            {/* Visual representation of a service truck or installation team */}
            <div className={styles.imgInner}>
              {!ASSETS.images.placeholders.installation && <span>Authentic Regional Expertise</span>}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
