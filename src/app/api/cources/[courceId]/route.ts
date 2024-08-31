// src/app/api/courses/[courseId]/route.ts
import { NextRequest, NextResponse } from 'next/server';
import db from '../../../../lib/mongodb';
import Course from '../../../../models/Course';

export async function GET(request: NextRequest, { params }: { params: { courseId: string } }) {
  const { courseId } = params;

  try {
    await db;
    const course = await Course.findById(courseId).populate('createdBy', 'name email').exec();

    if (!course) {
      return NextResponse.json({ error: 'Course not found' }, { status: 404 });
    }

    return NextResponse.json(course, { status: 200 });
  } catch (error) {
    console.error('Error fetching course:', error);
    return NextResponse.json({ error: 'Failed to fetch course' }, { status: 500 });
  }
}
