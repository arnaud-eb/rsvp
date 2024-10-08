"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useRef } from "react";

import useIsomorphicLayoutEffect from "@/hooks/useIsomorphicLayoutEffect";

interface GeneralItemProps {
  isReversed: boolean;
  distance: number;
  className?: string;
}

const GeneralItem: FCC<GeneralItemProps> = ({
  children,
  isReversed,
  distance,
  className,
}) => {
  const containerRef = useRef(null);

  useIsomorphicLayoutEffect(() => {
    const mm = gsap.matchMedia();

    mm.add(
      {
        isDesktop: `(min-width: 640px)`,
        isMobile: `(max-width: 639px)`,
      },
      (context) => {
        const { isDesktop } = context.conditions as gsap.Conditions;
        const xPercent = isReversed && isDesktop ? -distance : distance;

        let tl = gsap.timeline({ paused: true });
        tl.from(containerRef.current, {
          duration: 0.5,
          xPercent,
        });
        tl.from(containerRef.current, { opacity: 0, duration: 0.3 }, "<");

        ScrollTrigger.create({
          trigger: containerRef.current,
          start: "top 80%",
          onEnter: () => tl.play(),
          // markers: true,
        });

        ScrollTrigger.create({
          trigger: containerRef.current,
          start: "top 100%",
          onLeaveBack: () => tl.pause(0),
          // markers: true,
        });
      },
      containerRef,
    );

    return () => mm.revert();
  }, []);

  return (
    <article
      ref={containerRef}
      className={`z-10 h-[90vw] min-h-[350px] w-[90vw] min-w-[350px] shadow-2xl sm:h-auto sm:min-h-min sm:w-[48%] sm:min-w-min ${
        className ? className : ""
      } `}
    >
      {children}
    </article>
  );
};

export default GeneralItem;
