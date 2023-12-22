"use client";

import HeroSvg from "./HeroSvg";
import chevronIcon from "@/public/icons/chevron.svg";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useRef } from "react";

import useIsomorphicLayoutEffect from "@/hooks/useIsomorphicLayoutEffect";

// scroll after each screen rotation om mobile

const Hero = () => {
  const container = useRef<HTMLElement>(null);
  const svgRef = useRef<SVGSVGElement | null>(null);
  const scrollDownArrowRef = useRef(null);
  const scrollTopArrowRef = useRef(null);

  const handleClick = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({
        top: 100,
        behavior: "smooth",
      });
    }
  };

  useIsomorphicLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // const tl = gsap.timeline();
      // const path = "svg path";
      const stagger_val = { each: 0.001, ease: "power4" };
      // const stagger_val = 0.001;
      // const duration = 2.5;
      // tl.to("svg", { opacity: 1 }).to(path, {
      //   x: "random(-1000, 1000)",
      //   y: "random(-1000, 1000)",
      //   opacity: 0,
      //   scale: 0,
      //   rotation: "random(-720, 720)",
      //   duration,
      //   stagger: stagger_val,
      //   ease: "power4.in",
      //   // paused: true,
      //   scrollTrigger: {
      //     trigger: "#hero",
      //     markers: true,
      //     start: "top 75%",
      //     end: "top 25%",
      //     // scrub: 2,
      //     // scrub: true,
      //     // pin: true,
      //   },
      //   // paused: true,
      //   // delay: 2,
      // });

      // gsap.to("#hero", { opacity: 1 }); //opacity does not work anymore with pin: true

      gsap
        .timeline()
        .to(svgRef.current!.children, {
          x: "random(-1000, 1000)",
          y: "random(-1000, 1000)",
          opacity: 0,
          scale: 0,
          rotation: "random(-720, 720)",
          duration: 1,
          stagger: stagger_val,
          ease: "power4.in",
          scrollTrigger: {
            trigger: svgRef.current,
            start: "top top",
            end: "100% top",
            scrub: 2,
            pin: true,
            pinSpacing: true, //default is true
          },
        })
        .to(scrollDownArrowRef.current, {
          opacity: 0,
          scrollTrigger: {
            trigger: scrollDownArrowRef.current,
            start: "top 82%",
            end: "75% 82%",
            scrub: true,
            toggleActions: "play none none reverse",
          },
        })
        .to(scrollTopArrowRef.current, {
          opacity: 1,
          scrollTrigger: {
            trigger: container.current,
            start: "bottom 50%",
            end: "bottom 40%",
            scrub: true,
            toggleActions: "play none none reverse",
          },
        });
    }, container);
    () => () => {
      ctx.revert();
    };
  }, []);

  return (
    <figure ref={container} className="relative">
      <HeroSvg ref={svgRef} />
      <span
        ref={scrollDownArrowRef}
        className="absolute left-1/2 top-[85vh] inline-flex h-10 w-10 animate-bounce items-center justify-center rounded-full bg-blue-700 p-2.5"
      >
        <Image
          src={chevronIcon}
          alt="scroll down arrow"
          priority
          className="h-4 w-4 -rotate-90"
        />
      </span>
      <button
        ref={scrollTopArrowRef}
        className="fixed bottom-4 right-4 z-10 opacity-0"
        onClick={handleClick}
      >
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-blue-700 p-2.5 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300">
          <Image
            src={chevronIcon}
            alt="scroll up arrow"
            priority
            className="h-4 w-4 rotate-90"
          />
        </span>
      </button>
    </figure>
  );
};

export default Hero;

// duration: 2,
// rotation: 360,
// opacity: 1,
// delay: 0.5,
// stagger: 0.2,
// ease: "sine.out",
// force3D: true
// x: "100vw",
// xPercent: -100,
// ease: "bounce.out",
// backgroundColor: "#8d3dae",
// repeat: 2,
// yoyo: true,
// scale: 0.1,
// y: 60,
// yoyo: true,
// repeat: -1,
// ease: "power1.inOut",
// delay: 2,
// stagger: {
//   amount: 1.5,
//   grid: "auto",
//   from: "edges",
// },
// });
