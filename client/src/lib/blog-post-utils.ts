import type { BlogPost } from "@/data/blog-posts";

const formatDate = (date: string) =>
  new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

export const getPostSortTimestamp = (post: BlogPost) => {
  const sortDate = post.publishedDate ?? post.date;
  return new Date(sortDate).getTime();
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
