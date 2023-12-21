"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, ComponentType } from "react";

import useIsomorphicLayoutEffect from "@/hooks/useIsomorphicLayoutEffect";

export interface DetailsType {
  id: number;
  type: "details";
  Detail: ComponentType<{}>;
}

const Details: FCC = ({ children }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tween = gsap.from(containerRef.current!.children, {
        y: 80,
        opacity: 0,
        paused: true,
      });

      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top 90%",
        onEnter: () => tween.play(),
        // markers: true,
      });

      ScrollTrigger.create({
        trigger: containerRef.current,
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
    <div ref={containerRef} className="flex justify-center">
      {children}
    </div>
  );
};

export default Details;
