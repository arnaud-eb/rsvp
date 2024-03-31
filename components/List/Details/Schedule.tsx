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
      className="h-[90vw] min-h-[360px] w-[90vw] min-w-[360px] shadow-2xl sm:h-auto sm:min-h-min sm:w-[48%] sm:min-w-min"
    >
      <div className="text-white relative flex h-full w-full flex-col items-center justify-evenly overflow-hidden border-4 border-solid border-secondary-300 bg-neutral-500 p-2">
        <div
          ref={titleRef}
          className="flex w-full justify-center text-5xl font-bold text-secondary-500 sm:text-4xl"
        >
          <MdSchedule />
          <h1 className="ml-3">Programme</h1>
        </div>
        <h2
          ref={saturdayRef}
          className="text-xl font-semibold text-secondary-300 sm:text-sm md:text-xl"
        >
          Samedi 11 mai
        </h2>
        <section
          ref={saturdayScheduleRef}
          className="grid w-3/4 gap-2 sm:w-11/12 md:w-3/4"
        >
          <article className="flex items-center justify-between rounded-full bg-primary-200 p-1 shadow">
            <span className="ml-1 flex h-10 w-10 items-center justify-center rounded-full bg-primary-900 text-2xl">
              <FaCocktail />
            </span>
            <div className="ml-4 grow">
              <h3 className="text-lg font-semibold text-secondary-300 sm:text-sm md:text-lg">
                Cocktail
              </h3>
              <div className="flex text-sm text-primary-900 sm:text-xs md:text-sm">
                <FaLocationDot />
                <p className="ml-1">Potager</p>
              </div>
            </div>
            <div className="mr-3 font-semibold">16:00</div>
          </article>
          <article className="flex items-center justify-between rounded-full bg-primary-200 p-1 shadow">
            <span className="ml-1 flex h-10 w-10 items-center justify-center rounded-full bg-primary-900 text-2xl">
              <IoRestaurantOutline />
            </span>
            <div className="ml-4 grow">
              <h3 className="text-lg font-semibold text-secondary-300 sm:text-sm md:text-lg">
                Repas
              </h3>
              <div className="flex text-sm text-primary-900 sm:text-xs md:text-sm">
                <FaLocationDot />
                <p className="ml-1">Bac du Prince</p>
              </div>
            </div>
            <div className="mr-3 font-semibold">19:00</div>
          </article>
          <article className="flex items-center justify-between rounded-full bg-primary-200 p-1 shadow">
            <span className="ml-1 flex h-10 w-10 items-center justify-center rounded-full bg-primary-900 text-2xl">
              <IoMdMusicalNotes />
            </span>
            <div className="ml-4 grow">
              <h3 className="text-lg font-semibold text-secondary-300 sm:text-sm md:text-lg">
                Soirée
              </h3>
              <div className="flex text-sm text-primary-900 sm:text-xs md:text-sm">
                <FaLocationDot />
                <p className="ml-1">Maison Blanche</p>
              </div>
            </div>
            <div className="mr-3 font-semibold">22:00</div>
          </article>
        </section>
        <h2
          ref={sundayRef}
          className="text-xl font-semibold text-secondary-300 sm:text-sm md:text-xl"
        >
          Dimanche 12 mai
        </h2>
        <section
          ref={sundayScheduleRef}
          className="grid w-3/4 sm:w-11/12 md:w-3/4"
        >
          <article className="flex items-center justify-between rounded-full bg-primary-200 p-1 shadow">
            <span className="ml-1 flex h-10 w-10 items-center justify-center rounded-full bg-primary-900 text-2xl">
              <MdOutlineFreeBreakfast />
            </span>
            <div className="ml-4 grow">
              <h3 className="text-lg font-semibold text-secondary-300 sm:text-sm md:text-lg">
                Brunch
              </h3>
              <div className="flex text-sm text-primary-900 sm:text-xs md:text-sm">
                <FaLocationDot />
                <p className="ml-1">Maison Blanche</p>
              </div>
            </div>
            <div className="mr-3 font-semibold">11:00</div>
          </article>
        </section>
        <div className="curtain-stripe" />
      </div>
    </article>
  );
};

export default Schedule;
