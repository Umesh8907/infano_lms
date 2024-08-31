// src/components/auth/SignIn.tsx
'use client';

import { signIn } from 'next-auth/react';
import styles from '../../styles/Auth.module.css';

export default function SignIn() {
  const handleGoogleSignIn = () => {
    signIn('google');
  };

  return (
    <div className={styles.authContainer}>
      <h2>Sign In</h2>
      <button onClick={handleGoogleSignIn} className={styles.googleButton}>
        Sign in with Google
      </button>
      {/* Add more sign-in methods if needed */}
    </div>
  );
}
