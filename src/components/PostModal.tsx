import React from "react";
import CloseIcon from "./ui/icons/CloseIcon";

type ContainerSize = "home" | "follow";

type Props = {
  children: React.ReactNode;
  onClose: () => void;
  size?: ContainerSize;
};
export default function PostModal({ onClose, children, size = "home" }: Props) {
  return (
    <section
      className="fixed top-0 left-0 flex flex-col justify-center items-center w-full h-full z-50 bg-neutral-900/70"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <button
        className="fixed top-0 right-0 p-8 text-white"
        onClick={() => onClose()}
      >
        <CloseIcon />
      </button>
      <div className={`${getContainerSizeStyle(size)}`}>{children}</div>
    </section>
  );
}

const getContainerSizeStyle = (size: ContainerSize): string => {
  const baseStyle =
    "relative bg-white w-[400px] h-auto md:w-4/5 md:h-3/5 max-w-7xl rounded-md";
  const container = size === "home" ? "md:w-4/5" : "md:w-[400px]";

  return `${baseStyle} ${container}`;
};
