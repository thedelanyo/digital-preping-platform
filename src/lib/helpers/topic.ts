import topics from "$lib/client/topics.json";

export const getTopics = (course_id: string) => {
  return topics
    .filter((topic) => topic.id === course_id)
    .flatMap((topic) => topic.data);
};
