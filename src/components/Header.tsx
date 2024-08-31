// src/components/layout/Header.tsx
import Link from 'next/link';
import { signIn, signOut, useSession } from 'next-auth/react';
import styles from '../../styles/Header.module.css';

export default function Header() {
  const { data: session } = useSession();

  return (
    <header className={styles.header}>
      <Link href="/">
        <h1 className={styles.logo}>LMS</h1>
      </Link>
      <nav>
        <Link href="/courses">Courses</Link>
        {session ? (
          <>
            <Link href="/dashboard">Dashboard</Link>
            <button onClick={() => signOut()} className={styles.authButton}>
              Sign Out
            </button>
          </>
        ) : (
          <button onClick={() => signIn()} className={styles.authButton}>
            Sign In
          </button>
        )}
      </nav>
    </header>
  );
}
