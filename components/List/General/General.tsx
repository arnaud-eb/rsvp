import GeneralItem from "./GeneralItem";
import Image, { StaticImageData } from "next/image";
import React, { FC, ComponentType } from "react";

const columnsInMd = 2;

export interface ImageType {
  src: StaticImageData;
  alt: string;
}

export interface GeneralType {
  id: number;
  type: "general";
  Info: ComponentType<{}>;
  image: ImageType;
}

const General: FC<{ section: GeneralType; index: number }> = ({
  section: { image, Info },
  index,
}) => {
  const { src, alt } = image;
  const isReversed = index - (columnsInMd % 4) === 0;

  return (
    <div
      className={`flex h-[200vw] flex-col justify-evenly sm:h-auto items-center${
        isReversed ? " sm:flex-row-reverse" : " sm:flex-row"
      } sm:items-stretch sm:py-4`}
    >
      <GeneralItem isReversed={isReversed} distance={-100}>
        <Info />
      </GeneralItem>
      <GeneralItem
        isReversed={isReversed}
        distance={100}
        className="relative rounded-ee-3xl rounded-es-lg rounded-se-lg rounded-ss-3xl"
      >
        <Image
          src={src}
          alt={alt}
          sizes="(min-width: 640px) 50vw, 90vw"
          className="rounded-ee-3xl rounded-es-lg rounded-se-lg rounded-ss-3xl"
        />
        <div className="absolute bottom-0 left-0 h-1/2 w-full rounded-ee-3xl rounded-es-lg bg-gradient-to-t from-[#000] opacity-50" />
      </GeneralItem>
    </div>
  );
};

export default General;
