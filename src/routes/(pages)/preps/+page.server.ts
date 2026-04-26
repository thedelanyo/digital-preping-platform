import { getCourseTitle } from "$lib/helpers/topic.js";
import { getPreps } from "$lib/server/preps.js";
import { error } from "@sveltejs/kit";

export const load = async ({ url }) => {
  let course_id = url.searchParams.get("course");
  let creator_id = url.searchParams.get("creator");
  let topic = url.searchParams.get("topic");

  let id = course_id || creator_id || topic || "";
  let message = "Sorry, we couldn't find the resource you are looking for";

  !id && error(404, message);

  let title = getCourseTitle(id) || "";
  title = topic || title;

  const preps = await getPreps(id);

  title = title || preps[0]?.creator_name;

  preps.length === 0 && error(404, message);

  return { title, preps };
};
