"use client";

import PostListCard from "./PostListCard";
import PuffSpinner from "./ui/PuffSpinner";
import usePosts from "@/hooks/posts";

export default function PostList() {
  const { posts, isLoading } = usePosts();

  return (
    <section>
      {isLoading && (
        <div className="mt-32 flex justify-center">
          <PuffSpinner />
        </div>
      )}
      {posts && (
        <ul>
          {posts.map((post, index) => (
            <li className="mb-4" key={post.id}>
              <PostListCard post={post} priority={index < 2} />
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
