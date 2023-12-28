"use client";

import { FormSkeleton } from "./ContactForm";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import dynamic from "next/dynamic";
import Link from "next/link";
import React, { FC, MouseEvent, useRef, useState } from "react";

import useIsomorphicLayoutEffect from "@/hooks/useIsomorphicLayoutEffect";

const ContactFormWithCustomLoading = dynamic(() => import("./ContactForm"), {
  loading: () => <FormSkeleton />,
});

const CTA: FC = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const containerRef = useRef(null);
  const subContainerRef = useRef(null);
  const titleRef = useRef(null);
  const ctaContainerRef = useRef<HTMLDivElement | null>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    timelineRef.current!.kill();
    setIsFormVisible(true);
  };

  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(() => {
      if (!isFormVisible) {
        timelineRef.current = gsap
          .timeline({ defaults: { opacity: 0 }, paused: true })
          .from(titleRef.current, {
            y: 30,
          })
          .from(
            ctaContainerRef.current!.children,
            {
              y: 40,
            },
            "-=0.1",
          );

        ScrollTrigger.create({
          trigger: containerRef.current,
          start: "top 70%",
          onEnter: () => timelineRef.current!.play(),
          // markers: true,
        });

        ScrollTrigger.create({
          trigger: containerRef.current,
          start: "top 100%",
          onLeaveBack: () => timelineRef.current!.pause(0),
          // markers: true,
        });
      }

      if (isFormVisible) {
        gsap
          .timeline()
          .to(subContainerRef.current, {
            duration: 1,
            css: { rotationY: "+=180" },
            ease: "power2.inOut",
          })
          .to(
            subContainerRef.current,
            {
              css: { z: "-=200" },
              yoyo: true,
              repeat: 1,
              ease: "power2.in",
            },
            "<",
          );
      }
    }, containerRef);
    () => () => {
      ctx.revert();
    };
  }, [isFormVisible]);

  return (
    <section
      ref={containerRef}
      className="cta preserve-3d mb-16 flex justify-center px-4"
    >
      <div
        ref={subContainerRef}
        className="preserve-3d z-0 h-[90vw] min-h-[360px] w-[90vw] min-w-[360px] shadow-2xl sm:h-auto sm:w-[48%] sm:min-w-min lg:min-h-[475px]"
      >
        <div className="backface-invisible text-white absolute flex h-full w-full flex-col items-center justify-evenly border-4 border-solid border-secondary-300 bg-exclusive-500 px-2 py-6 sm:py-2 md:py-6">
          <h1
            ref={titleRef}
            className="text-center text-5xl font-bold sm:text-4xl md:text-5xl"
          >
            Prêt à faire la fête avec nous?
          </h1>
          <div
            ref={ctaContainerRef}
            className="flex w-5/6 justify-evenly text-4xl font-semibold sm:w-full sm:text-3xl md:text-4xl"
          >
            <Link
              className="shadow-details flex w-28 items-center justify-center rounded border-2 border-solid border-secondary-300 bg-primary-500 px-4 py-1 text-center font-medium hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300"
              href="/rsvp"
            >
              Oui
            </Link>
            <button
              className="shadow-details flex w-28 items-center justify-center rounded border-2 border-solid border-secondary-300 bg-tertiary-500 px-4 py-1 text-center font-medium hover:bg-tertiary-800 focus:outline-none focus:ring-4 focus:ring-tertiary-300"
              onClick={handleClick}
            >
              Non
            </button>
          </div>
          <div className="curtain-stripe" />
        </div>
        {isFormVisible && (
          <div className="backface-invisible rotate-y-180 bg-black text-white absolute flex h-full w-full flex-col items-center justify-evenly border-4 border-solid border-secondary-300 bg-tertiary-900 px-2 py-6 sm:py-2 md:py-6">
            <ContactFormWithCustomLoading />
            <div className="curtain-stripe" />
          </div>
        )}
      </div>
    </section>
  );
};

export default CTA;
