// src/app/dashboard/page.tsx
'use client';

import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from '../../styles/Dashboard.module.css';

interface Order {
  _id: string;
  courseId: {
    _id: string;
    title: string;
    description: string;
    price: number;
    videoUrl: string;
  };
  purchaseDate: string;
}

export default function DashboardPage() {
  const { data: session, status } = useSession();
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (session) {
      fetch('/api/orders')
        .then((res) => res.json())
        .then((data) => {
          setOrders(data);
          setLoading(false);
        })
        .catch((error) => {
          console.error('Error fetching orders:', error);
          setLoading(false);
        });
    }
  }, [session]);

  if (status === 'loading') {
    return <p>Loading dashboard...</p>;
  }

  if (!session) {
    return <p>Please sign in to view your dashboard.</p>;
  }

  return (
    <div className={styles.container}>
      <h1>Your Dashboard</h1>
      <h2>Purchased Courses</h2>
      {loading ? (
        <p>Loading your courses...</p>
      ) : orders.length === 0 ? (
        <p>You have not purchased any courses yet.</p>
      ) : (
        <div className={styles.grid}>
          {orders.map((order) => (
            <div key={order._id} className={styles.courseCard}>
              <h3>{order.courseId.title}</h3>
              <p>{order.courseId.description}</p>
              <Link href={`/courses/${order.courseId._id}`}>
                <button className={styles.button}>Go to Course</button>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
