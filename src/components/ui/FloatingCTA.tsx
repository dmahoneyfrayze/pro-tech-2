'use client';

import { useState, useEffect } from 'react';
import styles from './floatingCTA.module.css';

export default function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  if (!isVisible) return null;

  return (
    <div className={styles.wrapper}>
      <a href="tel:807-346-8324" className={styles.cta}>
        <span className={styles.icon}>📞</span>
        <div className={styles.text}>
          <strong>24/7 Emergency</strong>
          <span>807-346-8324</span>
        </div>
      </a>
    </div>
  );
}
