import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desk: {
    breakpoint: { max: 4000, min: 576 },
    items: 6,
  },
  mobile: {
    breakpoint: { max: 576, min: 0 },
    items: 4,
  },
};

type Props = {
  children: React.ReactNode;
};
export default function ScrollBar({ children }: Props) {
  return (
    <Carousel containerClass="w-full flex" responsive={responsive}>
      {children}
    </Carousel>
  );
}
