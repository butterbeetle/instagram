import { useSession } from "next-auth/react";
import Avatar from "./Avatar";
import CloseIcon from "./ui/icons/CloseIcon";

type Props = {
  image: string;
  username: string;
  closeIcon?: boolean;
};
export default function PostUserAvatar({
  image,
  username,
  closeIcon = false,
}: Props) {
  const { data: session } = useSession();

  return (
    <div className="flex items-center justify-between p-2">
      <div className="flex items-center">
        <Avatar image={image} highlight size="md" />
        <span className="text-gray-900 font-bold ml-2">{username}</span>
      </div>
      {/* {closeIcon && session?.user.username === username && (
        <button type="button" disabled={!closeIcon}>
          <CloseIcon />
        </button>
      )} */}
    </div>
  );
}
