"use client";

import Link from "next/link";
import { SyncLoader } from "react-spinners";
import Avatar from "./Avatar";
import ScrollBar from "./ui/ScrollBar";
import useMe from "@/hooks/me";

export default function FollowList() {
  const { user, isLoading } = useMe();
  const myFollowing = user?.following;

  return (
    <section
      className="relative z-0 w-full flex items-center justify-center p-4
    shadow-sm rounded-2xl min-h-[120px] overflow-hidden shadow-neutral-300 
    select-none bg-white mb-4
    "
    >
      {isLoading ? (
        <SyncLoader color="red" />
      ) : (
        (!myFollowing || myFollowing.length === 0) && (
          <p>{`You don't have following`}</p>
        )
      )}
      {myFollowing && myFollowing.length > 0 && (
        <ScrollBar>
          {myFollowing.map(({ username, image }) => (
            <Link
              key={username}
              className="flex flex-col items-center w-20"
              href={`/user/${username}`}
            >
              <Avatar image={image} size="md" highlight />
              <p className="w-full text-sm text-ellipsis overflow-hidden text-center">
                {username}
              </p>
            </Link>
          ))}
        </ScrollBar>
      )}
    </section>
  );
}
