'use client';

import styles from './HoloScanner.module.css';

export default function HolographicScanner() {
  return (
    <div className={styles.container} aria-hidden="true">
      <div className={styles.scanLine} />
      <div className={styles.scanGlow} />
      <div className={styles.reflection} />
    </div>
  );
}
