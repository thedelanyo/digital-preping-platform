import { courses } from "$lib/client/courses";

export const getCourseTitle = (course_id: string) => {
  const course = courses.find((course) => course.id === course_id);
  return course?.title;
};
