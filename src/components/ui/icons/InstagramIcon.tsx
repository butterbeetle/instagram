import { AiOutlineInstagram } from "react-icons/ai";

type Props = {
  className: string;
};
export default function InstagramIcon({ className }: Props) {
  return <AiOutlineInstagram className={`w-7 h-7 inline ${className}`} />;
}
