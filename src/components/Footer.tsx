// src/components/layout/Footer.tsx
import styles from '../../styles/Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>&copy; {new Date().getFullYear()} LMS System. All rights reserved.</p>
    </footer>
  );
}
