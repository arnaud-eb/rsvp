import antalya from "@/public/antalya.jpeg";
import beaufays from "@/public/beaufays.jpeg";
import sorbiers from "@/public/sorbiers.jpeg";
import dynamic from "next/dynamic";
import React, { FC } from "react";

import { DetailsType } from "@/components/List/Details";
import { General, GeneralType } from "@/components/List/General";

const WhenGeneral = dynamic(() =>
  import("@/components/List/General").then((mod) => mod.WhenGeneral),
);
const WhereGeneral = dynamic(() =>
  import("@/components/List/General").then((mod) => mod.WhereGeneral),
);
const HowGeneral = dynamic(() =>
  import("@/components/List/General").then((mod) => mod.HowGeneral),
);
const Details = dynamic(() =>
  import("@/components/List/Details").then((mod) => mod.Details),
);
const CountDown = dynamic(() =>
  import("@/components/List/Details").then((mod) => mod.CountDown),
);
const Anniversary = dynamic(() =>
  import("@/components/List/Details").then((mod) => mod.Anniversary),
);
const Schedule = dynamic(() =>
  import("@/components/List/Details").then((mod) => mod.Schedule),
);

const sections: (GeneralType | DetailsType)[] = [
  {
    id: 1,
    type: "general",
    Info: WhenGeneral,
    image: {
      src: antalya,
      alt: "antalya",
    },
  },
  {
    id: 2,
    type: "details",
    Detail: CountDown,
  },
  {
    id: 3,
    type: "general",
    Info: WhereGeneral,
    image: {
      src: sorbiers,
      alt: "sorbiers",
    },
  },
  {
    id: 4,
    type: "details",
    Detail: Anniversary,
  },
  {
    id: 5,
    type: "general",
    Info: HowGeneral,
    image: {
      src: beaufays,
      alt: "beaufays",
    },
  },
  {
    id: 6,
    type: "details",
    Detail: Schedule,
  },
];

const List: FC = () => {
  return (
    <section className="overflow-hidden px-4 pb-[6vh]">
      {sections.map((section, index) =>
        section.type === "general" ? (
          <General key={section.id} section={section} index={index} />
        ) : (
          <Details key={section.id}>
            <section.Detail />
          </Details>
        ),
      )}
    </section>
  );
};

export default List;
