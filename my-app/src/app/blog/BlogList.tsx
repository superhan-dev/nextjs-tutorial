"use client";
import React, { use } from "react";
interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface BlogListProps {
  postsPromise: Promise<Post[]>;
}

const BlogList = (props: BlogListProps) => {
  const posts = use(props.postsPromise) || [];

  return (
    <ul>
      {posts.map((post: { id: number; title: string }) => (
        <li key={post.id}>
          <p>{post.title}</p>
        </li>
      ))}
    </ul>
  );
};

export default BlogList;
