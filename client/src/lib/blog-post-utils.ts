import type { BlogPost } from "@/data/blog-posts";

const parseDate = (date: string) =>
  /^\d{4}-\d{2}-\d{2}$/.test(date) ? new Date(`${date}T12:00:00`) : new Date(date);

const formatDate = (date: string) =>
  parseDate(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

export const getPostSortTimestamp = (post: BlogPost) => {
  const sortDate = post.publishedDate ?? post.date;
  return parseDate(sortDate).getTime();
};

export const getPostDateMeta = (post: BlogPost) => {
  if (post.publishedDate) {
    return {
      primaryLabel: "Published",
      primaryDate: formatDate(post.publishedDate),
      secondaryLabel: post.dateLabel ?? "Recorded",
      secondaryDate: formatDate(post.date),
    };
  }

  return {
    primaryLabel: post.dateLabel ?? "Published",
    primaryDate: formatDate(post.date),
  };
};
