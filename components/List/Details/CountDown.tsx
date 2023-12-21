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
    <article ref={containerRef}>
      <h1 ref={titleRef} className="sm:p-y12 py-4 text-2xl sm:text-4xl">
        {days > 0 ? (
          <>
            Encore <span ref={countDownRef}>1</span>
            {` jour${days > 1 ? "s" : ""} de patience...`}
          </>
        ) : (
          "C'est parti !"
        )}
      </h1>
    </article>
  );
};

export default CountDown;
