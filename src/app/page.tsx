// src/app/page.tsx
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>Welcome to the LMS System</h1>
      <p>Browse and purchase courses to enhance your skills.</p>
      <Link href="/courses">
        <button className={styles.button}>View Courses</button>
      </Link>
    </div>
  );
}
