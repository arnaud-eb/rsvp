"use client";

import Loader from "@/components/Loader";

export default function Loading() {
  return (
    <div className="bg-black flex h-screen w-screen items-center justify-center">
      <Loader />
    </div>
  );
}
