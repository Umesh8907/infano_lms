// src/app/courses/[courseId]/page.tsx
'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import VideoPlayer from '../../../components/courses/VideoPlayer';
import styles from '../../../styles/CourseDetail.module.css';
import { useSession } from 'next-auth/react';
import Link from 'next/link';

interface Course {
  _id: string;
  title: string;
  description: string;
  price: number;
  videoUrl: string;
  createdBy: {
    name: string;
    email: string;
  };
}

export default function CourseDetailPage({ params }: { params: { courseId: string } }) {
  const { courseId } = params;
  const [course, setCourse] = useState<Course | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (courseId) {
      fetch(`/api/courses/${courseId}`)
        .then((res) => res.json())
        .then((data) => {
          setCourse(data);
          setLoading(false);
        })
        .catch((error) => {
          console.error('Error fetching course:', error);
          setLoading(false);
        });
    }
  }, [courseId]);

  const handlePurchase = async () => {
    if (!session) {
      router.push('/api/auth/signin');
      return;
    }

    try {
      const res = await fetch('/api/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ courseId }),
      });

      if (res.ok) {
        alert('Course purchased successfully!');
      } else {
        const error = await res.json();
        alert(`Error: ${error.error}`);
      }
    } catch (error) {
      console.error('Error purchasing course:', error);
      alert('Failed to purchase course.');
    }
  };

  if (loading) {
    return <p>Loading course details...</p>;
  }

  if (!course) {
    return <p>Course not found.</p>;
  }

  return (
    <div className={styles.container}>
      <h1>{course.title}</h1>
      <p>{course.description}</p>
      <VideoPlayer videoUrl={course.videoUrl} />
      <p>Price: ${course.price}</p>
      <button onClick={handlePurchase} className={styles.purchaseButton}>
        Purchase Course
      </button>
    </div>
  );
}
