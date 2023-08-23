import { ProfileUser } from "@/model/user";
import Avatar from "./Avatar";
import FollowButton from "./ui/FollowButton";
import BackButton from "./ui/BackButton";
import FollowDetail from "./FollowDetail";

type Props = {
  user: ProfileUser;
};
export default function UserProfile({ user }: Props) {
  const {
    image,
    username,
    name,
    followers,
    followersArray,
    following,
    followingArray,
    posts,
  } = user;
  const info = [
    {
      title: "posts",
      data: posts,
    },
    {
      title: "followers",
      data: followers,
    },
    {
      title: "following",
      data: following,
    },
  ];

  return (
    <section className="w-full">
      <header className="relative border-b border-neutral-200 text-center py-2 md:hidden">
        <BackButton />
        <p className="font-bold">{username}</p>
      </header>
      <div className="w-full flex flex-col md:flex-row items-center justify-center pt-6">
        <div className="inline md:hidden">
          <Avatar image={image} size="lg" highlight />
        </div>
        <div className="hidden md:inline">
          <Avatar image={image} size="xl" highlight />
        </div>
        <div className="w-full border-b md:w-auto md:ml-8 md:border-none">
          <div className="flex flex-col md:flex-row items-center ">
            <p className="mb-2 md:mr-6">{username}</p>
            <FollowButton user={user} />
          </div>
          <p className="my-2 font-bold mb-4 text-sm text-center block md:hidden">
            {name}
          </p>
          <ul className="w-full border-t md:border-none flex  justify-center">
            {info.map(({ title, data }) => (
              <li
                className="flex justify-center items-center basis-1/3 md:mr-8 rounded-md py-2 hover:bg-neutral-100
                md:hover:bg-inherit select-none hover:cursor-pointer"
                key={title}
              >
                <FollowDetail
                  followers={followersArray}
                  following={followingArray}
                  title={title}
                  data={data}
                  disabled={title === "posts"}
                />
              </li>
            ))}
          </ul>
          <p className="my-2 font-bold text-sm hidden md:block">{name}</p>
        </div>
      </div>
    </section>
  );
}
