// src/app/courses/page.tsx
import { useEffect, useState } from 'react';
import CourseCard from '../../components/courses/CourseCard';
import styles from '../../styles/Courses.module.css';

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

export default function CoursesPage() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch('/api/courses')
      .then((res) => res.json())
      .then((data) => {
        setCourses(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching courses:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading courses...</p>;
  }

  return (
    <div className={styles.container}>
      <h1>Available Courses</h1>
      <div className={styles.grid}>
        {courses.map((course) => (
          <CourseCard key={course._id} course={course} />
        ))}
      </div>
    </div>
  );
}
