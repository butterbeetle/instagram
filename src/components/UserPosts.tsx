"use client";
import { ProfileUser } from "@/model/user";
import { useState } from "react";
import PostIcon from "./ui/icons/PostIcon";
import BookmarkIcon from "./ui/icons/BookmarkIcon";
import HeartIcon from "./ui/icons/HeartIcon";
import PostGrid from "./PostGrid";
import HeartFillIcon from "./ui/icons/HeartFillIcon";
import BookmarkFillIcon from "./ui/icons/BookmarkFillIcon";
import PostFillIcon from "./ui/icons/PostFillIcon";
import { CacheKeysContext } from "@/context/CacheKeysContext";

type Props = {
  user: ProfileUser;
};
const tabs = [
  { type: "posts", offIcon: <PostIcon />, onIcon: <PostFillIcon /> },
  {
    type: "bookmarks",
    offIcon: <BookmarkIcon />,
    onIcon: <BookmarkFillIcon />,
  },
  { type: "liked", offIcon: <HeartIcon />, onIcon: <HeartFillIcon /> },
];
export default function UserPosts({ user: { username } }: Props) {
  const [selected, setSelected] = useState(tabs[0].type);

  return (
    <section className="max-w-4xl mx-auto md:border-t md:mt-12">
      <ul className="flex justify-center uppercase ">
        {tabs.map(({ type, onIcon, offIcon }) => (
          <li
            className={`flex justify-center mt-[-1px] basis-1/3 cursor-pointer py-2 border-black ${
              type === selected && "font-bold border-t"
            } md:items-center`}
            key={type}
            onClick={() => setSelected(type)}
          >
            <button className="scale-60 md:scale-75">
              {selected === type ? onIcon : offIcon}
            </button>
            <span className="hidden md:inline">{type}</span>
          </li>
        ))}
      </ul>
      <CacheKeysContext.Provider
        value={{ postsKey: `/api/users/${username}/${selected}` }}
      >
        <PostGrid />
      </CacheKeysContext.Provider>
    </section>
  );
}
