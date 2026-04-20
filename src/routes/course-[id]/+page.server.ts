import { courses } from "$lib/client/courses.js";
import { getPreps } from "$lib/server/preps.js";
import { error } from "@sveltejs/kit";

export const load = async ({ params }) => {
  const course = courses.find((course) => course.id === params.id);

  if (!course) {
    let message = "Sorry, we couldn't find the course you are looking for";

    error(404, message);
  }

  const preps = await getPreps({ course_id: course.id });

  return { course, preps };
};
