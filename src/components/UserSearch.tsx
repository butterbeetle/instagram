"use client";

import { ProfileUser } from "@/model/user";
import useSWR from "swr";
import { FormEvent, useState } from "react";
import PuffSpinner from "./ui/PuffSpinner";
import UserCard from "./UserCard";
import useDebounce from "@/hooks/debounce";
import { useSession } from "next-auth/react";

export default function UserSearch() {
  const [keyword, setKeyword] = useState("");
  const debouncedKeywrod = useDebounce(keyword);
  const { data, isLoading, error } = useSWR<ProfileUser[]>(
    `/api/search/${debouncedKeywrod}`
  );

  const { data: session } = useSession();
  const user = session?.user;
  const users = data?.filter((d) => d.username !== user?.username);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <section className="w-full max-w-3xl my-4 px-4 md:mx-auto flex flex-col items-center ">
      <form className="w-full p-2 mb-4" onSubmit={onSubmit}>
        <input
          className="w-full py-2 px-4 outline-none border border-neutral-200"
          type="text"
          placeholder="Search"
          autoFocus
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
      </form>
      {error && <p className="mt-4 text-xl">Something went wrong...</p>}
      {isLoading && (
        <div className="mt-16">
          <PuffSpinner />
        </div>
      )}
      {!isLoading && !error && users?.length === 0 && (
        <p className="mt-4 text-xl ">This user does not exist...</p>
      )}
      <ul className="w-full px-2">
        {users &&
          users.map((user) => (
            <li key={user.username}>
              <UserCard user={user} />
            </li>
          ))}
      </ul>
    </section>
  );
}
