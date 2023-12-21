"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import React, { FC, useRef } from "react";
import { GoProjectRoadmap } from "react-icons/go";
import { LuPartyPopper } from "react-icons/lu";
import { MdOutlineHotel, MdOutlineChildFriendly } from "react-icons/md";
import { PiDress } from "react-icons/pi";

import useIsomorphicLayoutEffect from "@/hooks/useIsomorphicLayoutEffect";

const How: FC = () => {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const infoRef = useRef<HTMLUListElement | null>(null);

  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap
        .timeline({ defaults: { opacity: 0 }, paused: true })
        .from(titleRef.current, {
          y: 20,
        })
        .from(
          infoRef.current!.children,
          {
            y: 30,
          },
          "-=0.2",
        );

      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top 70%",
        onEnter: () => tl.play(),
        // markers: true,
      });

      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top 100%",
        onLeaveBack: () => tl.pause(0),
        // markers: true,
      });
    }, containerRef);
    () => () => {
      ctx.revert();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="flex h-full w-full flex-col items-center justify-evenly bg-black p-2 text-white"
    >
      <div
        ref={titleRef}
        className="flex w-full justify-center text-5xl font-bold sm:text-4xl"
      >
        <GoProjectRoadmap />
        <h1 className="ml-3">Comment?</h1>
      </div>
      <ul
        ref={infoRef}
        className="my-2 grid w-full grow gap-3 sm:my-0 sm:gap-0.5 md:gap-3 lg:gap-2"
      >
        <li className="flex items-center rounded-lg bg-fuchsia-500 p-1.5 sm:p-0 md:p-1.5">
          <PiDress className="shrink-0 basis-6 text-2xl sm:hidden md:block" />
          <div className="ml-1">
            <h2 className="text-sm font-semibold">Dress code</h2>
            <p className="text-xs">Sur ton 31 ou en claquettes-chaussettes</p>
          </div>
        </li>
        <li className="flex items-center rounded-lg bg-fuchsia-500 p-1.5 sm:p-0 md:p-1.5">
          <MdOutlineHotel className="shrink-0 basis-6 text-2xl sm:hidden md:block" />
          <div className="ml-1">
            <h2 className="text-sm font-semibold">Gîte ou hôtel</h2>
            {/* logement */}
            {/* Il y a un gite et un hotel sur place si tu veux faire la fete avec nous jusqu'au bout de la nuit */}
            <p className="text-xs">
              Oublie pas ton sac de couchage et ta serviette de bain pour le{" "}
              <a
                className="font-semibold text-green-500 hover:text-red-600"
                href="https://gite-maisonblanche.com/location-gite-de-grand-capacite-meuse/"
                target="_blank"
              >
                gîte
              </a>
              . Si tu préfères le comfort de{" "}
              <a
                className="font-semibold text-green-500 hover:text-red-600"
                href="http://www.lessorbiers.com/views/FR/sorbiers/chambres.html"
                target="_blank"
              >
                l&apos;hôtel
              </a>
              , on te laisse les{" "}
              <a
                className="font-semibold text-green-500 hover:text-red-600"
                href="http://www.lessorbiers.com/views/FR/sorbiers/contact.html"
                target="_blank"
              >
                contacter
              </a>{" "}
              directement (Mariage Peduzzi-Depierreux).
            </p>
          </div>
        </li>
        <li className="flex items-center rounded-lg bg-fuchsia-500 p-1.5 sm:p-0 md:p-1.5">
          <MdOutlineChildFriendly className="shrink-0 basis-6 text-2xl sm:hidden md:block" />
          <div className="ml-1">
            <h2 className="text-sm font-semibold">Sans les enfants...</h2>
            <p className="text-xs">...la fête est plus folle 😜</p>
          </div>
        </li>
        <li className="flex items-center rounded-lg bg-fuchsia-500 p-1.5 sm:p-0 md:p-1.5">
          <LuPartyPopper className="shrink-0 basis-6 text-2xl sm:hidden md:block" />
          <div className="ml-1">
            <h2 className="text-sm font-semibold">
              Les mains vides et en pleine forme
            </h2>
            <p className="text-xs">
              Si tu en as envie, tu peux{" "}
              <Link
                className="font-semibold text-green-500 hover:text-red-600"
                href="/cadeau"
              >
                contribuer à notre voyage en Argentine
              </Link>
              . (Oui, on retente le coup)
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default How;
