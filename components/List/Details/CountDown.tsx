"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { FC, useRef } from "react";

import useIsomorphicLayoutEffect from "@/hooks/useIsomorphicLayoutEffect";

import returnNumberOfDaysBetweenTwoUnixTimestamps from "@/utils/returnNumberOfDaysBetweenTwoUnixTimestamps";

export const WEDDING_DATE_TIMESTAMP = 1715436000;

// TODO: use useImperativeHandle

const CountDown: FC = () => {
  const containerRef = useRef<HTMLElement | null>(null);
  const titleRef = useRef(null);
  const countDownRef = useRef(null);
  const days = returnNumberOfDaysBetweenTwoUnixTimestamps(
    new Date().getTime(),
    WEDDING_DATE_TIMESTAMP * 1000,
  );

  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tween = gsap.to(countDownRef.current, {
        innerText: days,
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
      className="shadow-details bg-countdown rounded border-2 border-solid border-secondary-300 bg-tertiary-900 px-2 py-1"
    >
      <h1 ref={titleRef} className="py-4 text-center text-xl sm:text-4xl">
        {days > 0 ? (
          <div className="flex">
            Encore{" "}
            <div className="w-12 sm:w-20" ref={countDownRef}>
              1
            </div>
            {` jour${days > 1 ? "s" : ""} de patience...`}
          </div>
        ) : (
          "C'est parti !"
        )}
      </h1>
    </article>
  );
};

export default CountDown;
