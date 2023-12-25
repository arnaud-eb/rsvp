"use client";

import { WEDDING_DATE_TIMESTAMP } from "./CountDown";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { FC, useRef } from "react";

import useIsomorphicLayoutEffect from "@/hooks/useIsomorphicLayoutEffect";

import returnNumberOfDaysBetweenTwoUnixTimestamps from "@/utils/returnNumberOfDaysBetweenTwoUnixTimestamps";

const YEARS = 8;

// TODO: use useImperativeHandle

const Anniversary: FC = () => {
  const containerRef = useRef<HTMLElement | null>(null);
  const titleRef = useRef(null);
  const counterRef = useRef(null);
  const days = returnNumberOfDaysBetweenTwoUnixTimestamps(
    new Date().getTime(),
    WEDDING_DATE_TIMESTAMP * 1000,
  );

  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tween = gsap.to(counterRef.current, {
        innerText: YEARS,
        snap: "innerText",
        duration: 1,
        paused: true,
      });

      ScrollTrigger.create({
        trigger: containerRef.current!.parentElement,
        start: "top 90%",
        onEnter: () => tween.play(),
        // markers: true,
      });

      ScrollTrigger.create({
        trigger: containerRef.current!.parentElement,
        start: "top 100%",
        onLeaveBack: () => tween.pause(0),
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
      className="shadow-details bg-anniversary rounded border-2 border-solid border-secondary-300 bg-neutral-300 px-2 py-1"
    >
      <h1
        ref={titleRef}
        className="relative py-4 text-center text-xl sm:text-4xl"
      >
        {days > 0 ? (
          <>
            <p className="inline">...nous ça fait </p>
            <span ref={counterRef}>1</span>
            <p className="inline"> ans qu&apos;on attend!</p>
          </>
        ) : (
          <p>Viens trinquer avec nous!</p>
        )}
      </h1>
    </article>
  );
};

export default Anniversary;
