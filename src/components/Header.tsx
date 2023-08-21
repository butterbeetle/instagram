"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import HomeFillIcon from "./ui/icons/HomeFillIcon";
import HomeIcon from "./ui/icons/HomeIcon";
import NewFillIcon from "./ui/icons/NewFillIcon";
import NewIcon from "./ui/icons/NewIcon";
import SearchFillIcon from "./ui/icons/SearchFillIcon";
import SearchIcon from "./ui/icons/SearchIcon";
import InstagramIcon from "./ui/icons/InstagramIcon";
import { signIn, signOut, useSession } from "next-auth/react";
import SignButton from "./ui/SignButton";
import Avatar from "./Avatar";

const menu = [
  {
    href: "/",
    icon: <HomeIcon />,
    clickedIcon: <HomeFillIcon />,
    title: "Home",
    label: "Home",
  },
  {
    href: "/search",
    icon: <SearchIcon />,
    clickedIcon: <SearchFillIcon />,
    title: "Search",
    label: "Search user",
  },
  {
    href: "/new",
    icon: <NewIcon />,
    clickedIcon: <NewFillIcon />,
    title: "New",
    label: "New post",
  },
];

export default function Header() {
  const pathName = usePathname();
  const { data: session } = useSession();
  const user = session?.user;

  let isSigninButton = session ? (
    <li className="w-full rounded-md p-2 hover:bg-gray-100 flex justify-center md:inline-block">
      <SignButton type="Signout" onClick={() => signOut()} />
    </li>
  ) : (
    <li className="w-full rounded-md p-2 hover:bg-gray-100 flex justify-center md:inline-block">
      <SignButton type="Signin" onClick={() => signIn()} />
    </li>
  );

  return (
    <header className=" bg-white border-r border-neutral-300 p-4  hidden md:inline-block md:w-[80px] lg:w-[250px]">
      <Link href={"/"}>
        <div className="mb-12 w-full rounded-md p-2 hover:bg-gray-100 flex justify-center md:inline-block">
          <InstagramIcon className="lg:hidden" />
          <h1 className="text-xl font-bold hidden lg:inline">Instagram</h1>
        </div>
      </Link>
      <ul className="flex flex-col gap-2 ">
        {menu.map((item) => (
          <li
            className="w-full rounded-md p-2 hover:bg-gray-100 flex justify-center md:inline-block"
            key={item.href}
          >
            <Link href={item.href}>
              <div className="flex items-center">
                {pathName === item.href ? item.clickedIcon : item.icon}
                <p className="ml-4 hidden lg:inline">{item.title}</p>
              </div>
            </Link>
          </li>
        ))}
        {user && (
          <li className="w-full rounded-md p-2 hover:bg-gray-100 flex justify-center md:inline-block">
            <Link href={`/user/${user.username}`}>
              <div className="flex items-center">
                <Avatar image={user.image} />
                <p className="ml-4 hidden lg:inline">Profile</p>
              </div>
            </Link>
          </li>
        )}
        {isSigninButton}
      </ul>
    </header>
  );
}
