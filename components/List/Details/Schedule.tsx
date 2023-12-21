"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { FC, useRef } from "react";
import { FaCocktail } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdMusicalNotes } from "react-icons/io";
import { IoRestaurantOutline } from "react-icons/io5";
import { MdSchedule, MdOutlineFreeBreakfast } from "react-icons/md";

import useIsomorphicLayoutEffect from "@/hooks/useIsomorphicLayoutEffect";

const Schedule: FC = () => {
  const containerRef = useRef<HTMLElement | null>(null);
  const titleRef = useRef(null);
  const saturdayRef = useRef(null);
  const sundayRef = useRef(null);
  const saturdayScheduleRef = useRef<HTMLElement | null>(null);
  const sundayScheduleRef = useRef<HTMLElement | null>(null);

  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap
        .timeline({ defaults: { opacity: 0 }, paused: true })
        .from(titleRef.current, {
          y: 20,
        })
        .from(
          saturdayRef.current,
          {
            y: 30,
          },
          "-=0.2",
        )
        .from(
          saturdayScheduleRef.current!.children,
          {
            y: 30,
          },
          "<",
        )
        .from(
          sundayRef.current,
          {
            y: 30,
          },
          "<",
        )
        .from(
          sundayScheduleRef.current!.children,
          {
            y: 30,
          },
          "<",
        );

      ScrollTrigger.create({
        trigger: containerRef.current!.parentElement,
        start: "top 70%",
        onEnter: () => tl.play(),
        // markers: true,
      });

      ScrollTrigger.create({
        trigger: containerRef.current!.parentElement,
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
    <article
      ref={containerRef}
      className="h-[90vw] min-h-[360px] w-[90vw] min-w-[360px] sm:h-auto sm:min-h-min sm:w-[48%] sm:min-w-min"
    >
      <div className="flex h-full w-full flex-col items-center justify-evenly bg-black p-2 text-white">
        <div
          ref={titleRef}
          className="flex w-full justify-center text-5xl font-bold sm:text-4xl"
        >
          <MdSchedule />
          <h1 className="ml-3">Programme</h1>
        </div>
        <h2
          ref={saturdayRef}
          className="text-xl font-semibold sm:text-sm md:text-xl"
        >
          Samedi 11 mai
        </h2>
        <section
          ref={saturdayScheduleRef}
          className="grid w-3/4 gap-2 sm:w-11/12 md:w-3/4"
        >
          <article className="flex items-center justify-between rounded-full bg-fuchsia-500 p-1">
            <span className="ml-1 flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-2xl">
              <FaCocktail />
            </span>
            <div className="ml-4 grow">
              <h3 className="text-lg font-semibold sm:text-sm md:text-lg">
                Cocktail
              </h3>
              <div className="flex text-sm sm:text-xs md:text-sm">
                <FaLocationDot />
                <h4 className="ml-1">Potager</h4>
              </div>
            </div>
            <div className="mr-3 font-semibold">16:00</div>
          </article>
          <article className="flex items-center justify-between rounded-full bg-fuchsia-500 p-1">
            <span className="ml-1 flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-2xl">
              <IoRestaurantOutline />
            </span>
            <div className="ml-4 grow">
              <h3 className="text-lg font-semibold sm:text-sm md:text-lg">
                Repas
              </h3>
              <div className="flex text-sm sm:text-xs md:text-sm">
                <FaLocationDot />
                <h4 className="ml-1">Bac du Prince</h4>
              </div>
            </div>
            <div className="mr-3 font-semibold">19:00</div>
          </article>
          <article className="flex items-center justify-between rounded-full bg-fuchsia-500 p-1">
            <span className="ml-1 flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-2xl">
              <IoMdMusicalNotes />
            </span>
            <div className="ml-4 grow">
              <h3 className="text-lg font-semibold sm:text-sm md:text-lg">
                Soirée
              </h3>
              <div className="flex text-sm sm:text-xs md:text-sm">
                <FaLocationDot />
                <h4 className="ml-1">Maison Blanche</h4>
              </div>
            </div>
            <div className="mr-3 font-semibold">23:00</div>
          </article>
        </section>
        <h2
          ref={sundayRef}
          className="text-xl font-semibold sm:text-sm md:text-xl"
        >
          Dimanche 12 mai
        </h2>
        <section
          ref={sundayScheduleRef}
          className="grid w-3/4 sm:w-11/12 md:w-3/4"
        >
          <article className="flex items-center justify-between rounded-full bg-fuchsia-500 p-1">
            <span className="ml-1 flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-2xl">
              <MdOutlineFreeBreakfast />
            </span>
            <div className="ml-4 grow">
              <h3 className="text-lg font-semibold sm:text-sm md:text-lg">
                Brunch
              </h3>
              <div className="flex text-sm sm:text-xs md:text-sm">
                <FaLocationDot />
                <h4 className="ml-1">Maison Blanche</h4>
              </div>
            </div>
            <div className="mr-3 font-semibold">11:00</div>
          </article>
        </section>
      </div>
    </article>
  );
};

export default Schedule;
