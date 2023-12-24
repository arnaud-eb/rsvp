import chevronIcon from "@/public/icons/chevron.svg";
import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";

const HomeButton: FC = () => {
  return (
    <Link href="/" className="group rounded-full focus:outline-none">
      <span className="z-10 ml-2 mt-2 inline-flex h-10 w-10 items-center justify-center rounded-full bg-secondary-100 p-2.5 group-hover:bg-secondary-300 group-focus:outline-none group-focus:ring-4 group-focus:ring-secondary-200 lg:ml-4 lg:mt-4">
        <Image
          priority
          src={chevronIcon}
          alt="previous"
          className="h-4 w-4 lg:h-5 lg:w-5"
        />
        <span className="sr-only">Menu principal</span>
      </span>
    </Link>
  );
};

export default HomeButton;
