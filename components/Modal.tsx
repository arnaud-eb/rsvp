"use client";

import closeIcon from "@/public/icons/close.svg";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";

export default function Modal({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const dialogRef = useRef<React.ElementRef<"dialog">>(null);

  useEffect(() => {
    dialogRef.current?.showModal();
  }, []);

  const closeModal = (e: React.MouseEvent<HTMLDialogElement, MouseEvent>) =>
    e.target === dialogRef.current && router.back();

  return (
    <dialog
      ref={dialogRef}
      onClick={closeModal}
      onClose={router.back}
      className="overflow-hidden rounded-lg text-3xl backdrop:backdrop-blur sm:w-[80vw] md:w-[70vw] lg:w-[60vw] [&_section]:max-h-[70vh] [&_section]:overflow-auto [&_section]:overscroll-none [&_section]:xs:max-h-[80vh] [&_section]:landscape:max-h-[60vh]"
      data-lenis-prevent
    >
      <div className="relative">
        <button
          className="absolute right-2 top-2 h-5 w-5 rounded bg-primary-50 leading-none hover:bg-primary-100 focus:outline-none focus:ring-2 focus:ring-neutral-900 sm:right-5 sm:top-5 sm:h-6 sm:w-6"
          onClick={() => router.back()}
        >
          <Image
            priority
            src={closeIcon}
            alt="close"
            className="h-full w-full"
          />
        </button>
        {children}
      </div>
    </dialog>
  );
}
