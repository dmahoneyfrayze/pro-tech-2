import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import styles from './services.module.css';
import Link from 'next/link';

export const metadata = {
  title: "Pump Installation & Motor Repair | Thunder Bay | Pro-Tech",
  description: "Professional installation and repair services for water pumps and electric motors. 24/7 emergency support across Northwestern Ontario.",
};

export default function ServicesPage() {
  const serviceList = [
    {
      title: 'Professional Pump Installation',
      description: 'Our factory-trained technicians handle the full lifecycle of your pump installation—from site assessment and equipment selection to final testing and commissioning.',
      features: ['Well Pumps', 'Submersible Systems', 'Constant Pressure Systems', 'Sump & Sewage Pumps']
    },
    {
      title: 'Electric Motor Repair & Rewind',
      description: 'One of the few facilities in NW Ontario capable of full-service motor repair. We specialize in extending the life of your critical components.',
      features: ['Authorized Warranty Center', 'Precision Rewinding', 'Bearing Replacement', 'Dynamic Balancing']
    },
    {
      title: '24/7 Emergency Support',
      description: 'Infrastructure doesn&apos;t sleep. When a pump fails at 3 AM, our team is ready to respond to ensure your home or facility remains operational.',
      features: ['Quick Dispatch', 'Large Spares Inventory', 'Field Diagnostics', 'Immediate Lead Capture']
    }
  ];

  return (
    <div className={styles.page}>
      <Header />
      <main>
        <section className={styles.hero}>
          <div className="container">
            <h1>Regional Technical Authority</h1>
            <p>Moving beyond hardware to professional consultation. Translating 50 years of &quot;stellar jobs&quot; into guaranteed industrial and residential uptime.</p>
            <div className={styles.emergency}>
              <strong>EMERGENCY? CALL:</strong> <a href="tel:807-346-8324">807-346-8324</a>
            </div>
          </div>
        </section>

        <section className={styles.content}>
          <div className="container">
            <div className={styles.serviceGrid}>
              {serviceList.map((service, idx) => (
                <div key={idx} className={styles.serviceCard}>
                  <h2>{service.title}</h2>
                  <p>{service.description}</p>
                  <ul className={styles.tagList}>
                    {service.features.map((tag, i) => (
                      <li key={i}>{tag}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.partnership}>
          <div className="container">
            <div className={styles.partnershipCard}>
              <h2>Technical Partnership Program</h2>
              <p>
                We establish formal maintenance contracts with regional high-volume water users. 
                Our &quot;Zero-Delay&quot; inventory agreements ensure you never face a day of catastrophic downtime. 
                Whether you&apos;re a local infrastructure neighbor like Central Car Wash or a large-scale agricultural operation, 
                our Technical Partnerships provide the ultimate de-risking strategy.
              </p>
              <div className={styles.expertNote}>
                <strong>Consultative Mastery:</strong> Partner with specialists like Dom to ensure your complex systems—from camp UV filters to industrial motors—are built to last.
              </div>
            </div>
          </div>
        </section>

        <section className={styles.cta}>
          <div className="container">
            <div className={styles.ctaBox}>
              <h2>Maintain Your System with the Pros</h2>
              <p>Preventative maintenance saves thousands in the long run. Schedule a system audit today.</p>
              <Link href="/quote" className="btn btn-primary">Schedule a Service Audit</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
