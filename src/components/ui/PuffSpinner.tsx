import dynamic from "next/dynamic";

const PuffLoader = dynamic(
  () => import("react-spinners").then((lib) => lib.PuffLoader),
  {
    ssr: false,
  }
);

type Props = {
  color?: string;
};

export default function PuffSpinner({ color = "red" }: Props) {
  return <PuffLoader color={color} />;
}
