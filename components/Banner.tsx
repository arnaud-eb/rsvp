"use client";

import { gsap } from "gsap";
import Link from "next/link";
import { FC, useRef } from "react";

import useIsomorphicLayoutEffect from "@/hooks/useIsomorphicLayoutEffect";

const Banner: FC = () => {
  const containerRef = useRef(null);
  const bannerRef = useRef(null);

  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(bannerRef.current, {
        opacity: 1,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 50%",
          toggleActions: "play none none reverse",
        },
      });
    }, containerRef);
    () => () => {
      ctx.revert();
    };
  }, []);

  return (
    <div id="banner-container" ref={containerRef}>
      <div
        id="sticky-banner"
        ref={bannerRef}
        tabIndex={-1}
        className="fixed start-0 top-0 z-50 flex w-full border-b border-tertiary-900 bg-tertiary-500 px-1.5 py-3 opacity-0 xs:px-2"
      >
        <p className="mx-auto flex items-center text-center text-base font-bold text-secondary-300 md:text-xl">
          <span className="mr-1 flex-shrink-0 rounded bg-exclusive-500 p-1 xs:mr-3">
            Nouveau
          </span>
          Informations de dernière minute!
          <Link
            href="/info"
            className="ml-1 flex items-center text-exclusive-900 no-underline underline-offset-2 outline-exclusive-900 hover:underline xs:ml-3"
          >
            Info
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.8}
              stroke="currentColor"
              className="ml-1 h-3 w-3"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              />
            </svg>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Banner;
