"use client";

import Loader from "@/components/Loader";

export default function Loading() {
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-black">
      <Loader />;
    </div>
  );
}
