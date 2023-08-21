type AvatarSize = "sm" | "md" | "lg" | "xl";

type Props = {
  image?: string | null;
  size?: AvatarSize;
  highlight?: boolean;
};

export default function Avatar({
  image,
  size = "sm",
  highlight = false,
}: Props) {
  return (
    <div className={`${getContainerSizeStyle(size, highlight)} `}>
      {/* eslint-disable-next-line @next/next/no-img-element*/}
      <img
        className={`${getImageSizeStyle(size)}`}
        alt="user profile"
        src={image ?? undefined}
        referrerPolicy="no-referrer"
      />
    </div>
  );
}

const getContainerSizeStyle = (
  size: AvatarSize,
  highlight: boolean
): string => {
  const baseStyle = "rounded-full flex shrink-0 justify-center items-center";
  const { container } = getSizeStyleBy(size);
  const highlightStyle = highlight
    ? "bg-gradient-to-bl from-fuchsia-600 via-rose-500 to-amber-300"
    : "";

  return `${baseStyle} ${highlightStyle} ${container}`;
};

const getImageSizeStyle = (size: AvatarSize): string => {
  const baseStyle = "bg-white object-cover rounded-full p-[0.1rem] ";
  const { image } = getSizeStyleBy(size);

  return `${baseStyle} ${image}`;
};

type ImageSizeStyle = {
  container: string;
  image: string;
};

const getSizeStyleBy = (size: AvatarSize): ImageSizeStyle => {
  switch (size) {
    case "sm":
      return {
        container: "w-7 h-7",
        image: "w-[30px] h-[30px] p-[0.1rem]",
      };
    case "md":
      return {
        container: "w-11 h-11",
        image: "w-[42px] h-[42px] p-[0.1rem]",
      };
    case "lg":
      return {
        container: "w-[68px] h-[68px]",
        image: "w-16 h-16 p-[0.2rem]",
      };
    case "xl":
      return {
        container: "w-[142px] h-[142px]",
        image: "w-[138px] h-[138px] p-[0.3rem]",
      };
    default:
      throw new Error(`Unsupported type size: ${size}`);
  }
};
