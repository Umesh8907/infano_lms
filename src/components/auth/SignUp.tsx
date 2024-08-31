// src/components/auth/SignUp.tsx
'use client';

import { useState } from 'react';
import { signIn } from 'next-auth/react';
import styles from '../../styles/Auth.module.css';

export default function SignUp() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();

    // Implement sign-up logic, e.g., create user in DB
    // For example purposes, redirect to sign-in after sign-up
    // Or use email sign-in with NextAuth

    // This is a placeholder
    signIn('google');
  };

  return (
    <div className={styles.authContainer}>
      <h2>Sign Up</h2>
      <form onSubmit={handleSignUp}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className={styles.input}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className={styles.input}
        />
        <button type="submit" className={styles.submitButton}>
          Sign Up
        </button>
      </form>
    </div>
  );
}
