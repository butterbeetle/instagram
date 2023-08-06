import GridSpinner from "./ui/GridSpinner";
import PostGridCard from "./PostGridCard";
import usePosts from "@/hooks/posts";

type Props = {
  username: string;
  query: string;
};
export default function PostGrid({ username, query }: Props) {
  const cacheKey = `/api/users/${username}/${query}`;
  const { posts, isLoading } = usePosts(cacheKey);

  return (
    <div className="w-full text-center">
      {isLoading && <GridSpinner />}
      <ul className="grid grid-cols-3 gap-4 py-4 px-8">
        {posts &&
          posts.map((post, index) => (
            <li key={post.id}>
              <PostGridCard
                post={post}
                priority={index < 6}
                cacheKey={cacheKey}
              />
            </li>
          ))}
      </ul>
    </div>
  );
}
