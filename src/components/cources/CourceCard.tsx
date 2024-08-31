// src/components/courses/CourseCard.tsx
import Link from 'next/link';
import styles from '../../styles/CourseCard.module.css';

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

export default function CourseCard({ course }: { course: Course }) {
  return (
    <div className={styles.card}>
      <h3>{course.title}</h3>
      <p>{course.description}</p>
      <p>Price: ${course.price}</p>
      <Link href={`/courses/${course._id}`}>
        <button className={styles.button}>View Course</button>
      </Link>
    </div>
  );
}
