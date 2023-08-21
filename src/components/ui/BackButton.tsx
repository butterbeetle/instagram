"use client";
import ArrowLeftIcon from "./icons/ArrowLeftIcon";
import { useRouter } from "next/navigation";

export default function BackButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="absolute left-4 cursor-pointer"
      title="돌아가기"
    >
      <ArrowLeftIcon />
    </button>
  );
}
