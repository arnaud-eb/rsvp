"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import React, { FC, useRef } from "react";
import { GoProjectRoadmap } from "react-icons/go";
import { MdOutlineHotel, MdOutlineChildFriendly } from "react-icons/md";
import { PiDress } from "react-icons/pi";
import { SlPresent } from "react-icons/sl";

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
      });

      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top 100%",
        onLeaveBack: () => tl.pause(0),
      });
    }, containerRef);
    () => () => {
      ctx.revert();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative flex h-full w-full flex-col items-center justify-evenly overflow-hidden border-4 border-solid border-secondary-300 bg-tertiary-900 p-2"
    >
      <div
        ref={titleRef}
        className="flex w-full justify-center text-5xl font-bold text-secondary-500 sm:text-4xl"
      >
        <GoProjectRoadmap />
        <h1 className="ml-3">Comment?</h1>
      </div>
      <ul ref={infoRef} className="grid w-11/12 gap-2 md:w-5/6">
        <li className="flex items-center justify-between rounded-full bg-primary-200 p-1 shadow">
          <span className="ml-1 flex h-10 w-10 items-center justify-center rounded-full bg-primary-900 text-2xl">
            <PiDress />
          </span>
          <div className="ml-4 grow">
            <h2 className="text-lg font-semibold text-secondary-300 sm:text-sm md:text-lg">
              Dress code
            </h2>
            <p className="text-sm text-primary-900 sm:text-xs md:text-sm">
              Sur ton 31 ou en claquettes-chaussettes.
            </p>
          </div>
        </li>
        <li className="flex items-center justify-between rounded-full bg-primary-200 p-1 shadow">
          <span className="ml-1 flex h-10 w-10 items-center justify-center rounded-full bg-primary-900 text-2xl">
            <MdOutlineHotel />
          </span>
          <div className="ml-4 grow">
            <h2 className="text-lg font-semibold text-secondary-300 sm:text-sm md:text-lg">
              Logement
            </h2>
            <p className="text-sm text-primary-900 sm:text-xs md:text-sm">
              Il y a un{" "}
              <a
                className="font-semibold text-secondary-300 hover:text-neutral-900"
                href="https://gite-maisonblanche.com/location-gite-de-grand-capacite-meuse/"
                target="_blank"
              >
                gîte
              </a>{" "}
              et un{" "}
              <a
                className="font-semibold text-secondary-300 hover:text-neutral-900"
                href="http://www.lessorbiers.com/views/FR/sorbiers/chambres.html"
                target="_blank"
              >
                hôtel
              </a>{" "}
              sur place.
            </p>
          </div>
        </li>
        <li className="flex items-center justify-between rounded-full bg-primary-200 p-1 shadow">
          <span className="ml-1 flex h-10 w-10 items-center justify-center rounded-full bg-primary-900 text-2xl">
            <MdOutlineChildFriendly />
          </span>
          <div className="ml-4 grow">
            <h2 className="text-lg font-semibold text-secondary-300 sm:text-sm md:text-lg">
              Sans les enfants...
            </h2>
            <p className="text-sm text-primary-900 sm:text-xs md:text-sm">
              ...la fête est plus folle 😜
            </p>
          </div>
        </li>
        <li className="flex items-center justify-between rounded-full bg-primary-200 p-1 shadow">
          <span className="ml-1 flex h-10 w-10 items-center justify-center rounded-full bg-primary-900 text-2xl">
            <SlPresent />
          </span>
          <div className="ml-4 grow">
            <h2 className="text-lg font-semibold text-secondary-300 sm:text-sm md:text-lg">
              Les mains vides
            </h2>
            <p className="text-sm text-primary-900 sm:text-xs md:text-sm">
              Si tu insistes, clique{" "}
              <Link
                className="font-semibold text-secondary-300 hover:text-neutral-900"
                href="/cadeau"
              >
                ici
              </Link>{" "}
              👀
            </p>
          </div>
        </li>
      </ul>
      <div className="curtain-stripe" />
    </div>
  );
};

export default How;
