import chevronLeftIcon from "@/public/icons/chevronLeft.svg";
import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";

const HomeButton: FC = () => {
  return (
    <Link href="/">
      <span className="ml-2 mt-2 inline-flex h-10 w-10 items-center justify-center rounded-full bg-blue-700 p-2.5 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 lg:ml-4 lg:mt-4">
        <Image
          priority
          src={chevronLeftIcon}
          alt="previous"
          className="h-4 w-4 lg:h-5 lg:w-5"
        />
        <span className="sr-only">Menu principal</span>
      </span>
    </Link>
  );
};

export default HomeButton;
