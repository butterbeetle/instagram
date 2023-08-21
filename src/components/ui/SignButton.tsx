import SigninIcon from "./icons/SigninIcon";
import SignoutIcon from "./icons/SignoutIcon";

type SignType = "Signin" | "Signout";

type Props = {
  type: SignType;
  onClick: () => void;
};

export default function SignButton({ type, onClick }: Props) {
  return (
    <button className="flex items-center" onClick={onClick}>
      {type === "Signin" ? <SigninIcon /> : <SignoutIcon />}
      <p className="ml-4 hidden lg:inline">{type}</p>
    </button>
  );
}
