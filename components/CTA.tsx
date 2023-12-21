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

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsFormVisible(true);
  };

  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(() => {
      if (!isFormVisible) {
        const tl = gsap
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
          onEnter: () => tl.play(),
          // markers: true,
        });

        ScrollTrigger.create({
          trigger: containerRef.current,
          start: "top 100%",
          onLeaveBack: () => tl.pause(0),
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
        className="preserve-3d z-0 h-[90vw] min-h-[360px] w-[90vw] min-w-[360px] sm:h-auto sm:w-[48%] sm:min-w-min lg:min-h-[475px]"
      >
        <div className="backface-invisible absolute flex h-full w-full flex-col items-center justify-evenly bg-black px-2 py-6 text-white sm:py-2 md:py-6">
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
              className="w-28 rounded-full bg-blue-700 px-5 py-2.5 text-center font-medium hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300"
              href="/rsvp"
            >
              Oui
            </Link>
            <button
              className="w-28 rounded-full bg-blue-700 px-5 py-2.5 text-center font-medium hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300"
              onClick={handleClick}
            >
              Non
            </button>
          </div>
        </div>
        {isFormVisible && (
          <div className="backface-invisible rotate-y-180 absolute flex h-full w-full flex-col items-center justify-evenly bg-black px-2 py-6 text-white sm:py-2 md:py-6">
            <h1 className="mb-3 px-8 text-lg font-semibold sm:text-sm md:mb-5 md:text-lg">
              Tu vas nous manquer mais ce n&apos;est que partie remise! Laisse
              nous un petit message.
            </h1>
            <ContactFormWithCustomLoading />
          </div>
        )}
      </div>
    </section>
  );
};

export default CTA;
