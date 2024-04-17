"use client";

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
      className="text-3xl backdrop:backdrop-blur"
    >
      <div className="relative p-32">
        <button
          className="absolute right-2 top-2 h-6 w-6 leading-none after:content-['x']"
          onClick={() => router.back()}
        />
        {children}
      </div>
    </dialog>
  );
}
