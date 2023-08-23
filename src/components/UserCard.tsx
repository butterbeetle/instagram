import { ProfileUser } from "@/model/user";
import Avatar from "./Avatar";
import Link from "next/link";
import FollowButton from "./ui/FollowButton";

type Props = {
  user: ProfileUser;
};
export default function UserCard({ user }: Props) {
  const { username, name, image, following, followers } = user;

  return (
    <div className="w-full flex justify-between items-center mb-2 p-2 border bg-white border-neutral-100 hover:bg-gray-50 rounded-md shadow-md">
      <Link href={`/user/${username}`}>
        <div className="flex items-center">
          <Avatar image={image} size="md" />
          <div className="w-full flex justify-between items-center">
            <div className="flex flex-col justify-center items-start ml-2">
              <p className="font-bold text-sm">{username}</p>
              <p className="text-gray-500 text-sm">{name}</p>
              <p className="text-gray-500 text-xs">{`${following} following ${followers} followers`}</p>
            </div>
          </div>
        </div>
      </Link>
      <FollowButton user={user} />
    </div>
  );
}
