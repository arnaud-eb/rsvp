"use client";

import { AddToCalendarButton } from "add-to-calendar-button-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { FC, useRef } from "react";
import { TbCalendarHeart } from "react-icons/tb";

import useIsomorphicLayoutEffect from "@/hooks/useIsomorphicLayoutEffect";

const When: FC = () => {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const dateRef = useRef(null);
  const hrRef = useRef(null);
  const textRef = useRef(null);
  const addCalendarRef = useRef(null);

  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap
        .timeline({ defaults: { opacity: 0 }, paused: true })
        .from(titleRef.current, {
          y: 20,
        })
        .from(
          dateRef.current,
          {
            y: 30,
          },
          "-=0.2",
        )
        .from(
          [hrRef.current, textRef.current],
          {
            y: 40,
          },
          "-=0.3",
        )
        .from(
          addCalendarRef.current,
          {
            y: 50,
          },
          "-=0.4",
        )
        .to(hrRef.current, {
          opacity: 1,
          scale: 1.5,
          duration: 1,
        });

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
      className="flex h-full w-full flex-col items-center justify-around bg-black px-2 py-6 text-white"
    >
      <div
        ref={titleRef}
        className="flex w-full justify-center text-5xl font-bold sm:text-4xl md:text-5xl"
      >
        <TbCalendarHeart />
        <h1 className="ml-3">Quand?</h1>
      </div>
      <div className="flex flex-col items-center text-lg sm:text-sm md:text-lg">
        <h2 ref={dateRef} className="mb-2 font-semibold">
          Le week-end du 11 et 12 mai 2024.
        </h2>
        <hr ref={hrRef} className="w-1/5" />
        <p ref={textRef} className="mt-2">
          On vous attend le 11 à partir de 16h.
        </p>
      </div>
      <div ref={addCalendarRef}>
        <AddToCalendarButton
          name="Mariage de Arnaud & Justine"
          options={["Apple", "Google"]}
          location="241 rue des Sorbiers, 5543 Heer, Belgique"
          startDate="2024-05-11"
          endDate="2024-05-12"
          startTime="16:00"
          endTime="15:00"
          timeZone="Europe/Brussels"
          buttonsList
          hideTextLabelButton
          buttonStyle="round"
          pastDateHandling="disable"
          hideBranding
        ></AddToCalendarButton>
      </div>
    </div>
  );
};

export default When;
