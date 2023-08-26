import Avatar from "./Avatar";
import CloseIcon from "./ui/icons/CloseIcon";

type Props = {
  image: string;
  username: string;
};
export default function PostUserAvatar({ image, username }: Props) {
  return (
    <div className="flex items-center justify-between p-2">
      <div className="flex items-center">
        <Avatar image={image} highlight size="md" />
        <span className="text-gray-900 font-bold ml-2">{username}</span>
      </div>
      <div>
        <CloseIcon />
      </div>
    </div>
  );
}
