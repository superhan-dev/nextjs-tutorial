import React, { Suspense } from "react";
import BlogList from "@/features/blog/ui/BlogList";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const Blog = () => {
  const promise = fetch("https://jsonplaceholder.typicode.com/posts", {
    next: { revalidate: 60 },
    cache: "no-store",
  }).then((res) => res.json() as Promise<Post[]>);
  return (
    <div>
      <h1>Blog</h1>

      <h2>Posts</h2>
      <Suspense fallback={<div>Loading...</div>}>
        <BlogList postsPromise={promise} />
      </Suspense>
    </div>
  );
};

export default Blog;
