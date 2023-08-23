"use client";

import { useState } from "react";
import ModalPortal from "./ui/ModalPortal";
import PostModal from "./PostModal";
import useMe from "@/hooks/me";
import Avatar from "./Avatar";

type Props = {
  title: string;
  data: number;
  disabled: boolean;
};
export default function OpenFollow({ title, data, disabled }: Props) {
  const [openModal, setOpenModal] = useState(false);
  const { user: users } = useMe();
  const info = title === "following" ? users?.following : users?.followers;

  return (
    <>
      <button
        disabled={disabled}
        className="w-full h-full flex flex-col md:flex-row justify-center items-center "
        onClick={() => setOpenModal(true)}
      >
        {title}
        <span className="font-bold text-sm md:text-base md:ml-1">{data}</span>
      </button>
      {openModal && (
        <ModalPortal>
          <PostModal size="follow" onClose={() => setOpenModal(false)}>
            <h2 className="w-full text-center border-b border-neutral-200 py-2">
              {title}
            </h2>
            {info?.map(({ username, image, name }) => (
              <div className="flex flex-col justify-center" key={username}>
                <div className="flex items-center px-4 py-2">
                  <Avatar image={image} size="md" />
                  <div className="flex flex-col justify-center ml-4">
                    <p className="text-sm font-bold">{username}</p>
                    <p className="text-sm text-gray-500">{name}</p>
                  </div>
                </div>
              </div>
            ))}
          </PostModal>
        </ModalPortal>
      )}
    </>
  );
}
