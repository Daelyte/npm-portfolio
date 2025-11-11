import { getAllPosts } from "@/libs/markdown";
import BlogList from "./BlogList";

const Blog = async () => {
  const posts = getAllPosts([
    "title",
    "published_at",
    "edited_at",
    "description",
    "coverImage",
    "slug",
  ]);

  if (!posts) {
    return <div>Loading...</div>;
  }

  return (
    <section className="pt-60 md:pt-64">
      <BlogList posts={posts.slice(0, 4)} />
    </section>
  );
};

export default Blog;
