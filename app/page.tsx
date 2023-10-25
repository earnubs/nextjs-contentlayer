import React from "react";
import { allPosts, Post } from "contentlayer/generated";
import { compareDesc, format, parseISO } from "date-fns";

export default function Page() {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );

  return (
    <>
      {" "}
      <h1>Hello, Next.js!</h1>

      {posts.map((post, idx) => (
        <div key={idx}>
          <p>{post.title}</p>
          <p>{format(parseISO(post.date), "LLLL d, yyyy")}</p>
          </div>
      ))}
    </>
  );
}
