"use client";

import HeroSvg from "./HeroSvg";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

import useIsomorphicLayoutEffect from "@/hooks/useIsomorphicLayoutEffect";

// scroll after each screen rotation om mobile

const Hero = () => {
  const container = useRef<HTMLElement>(null);
  const svgRef = useRef<SVGSVGElement | null>(null);

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

      gsap.to(svgRef.current!.children, {
        x: "random(-1000, 1000)",
        y: "random(-1000, 1000)",
        opacity: 0,
        scale: 0,
        rotation: "random(-720, 720)",
        duration: 1,
        stagger: stagger_val,
        ease: "power4.in",
        // ease: "none",
        // paused: true,
        scrollTrigger: {
          trigger: svgRef.current,
          // markers: true,
          start: "top top",
          end: "100% top",
          // toggleActions: "restart reset none none",
          // scrub: true,
          scrub: 2,
          pin: true,
          pinSpacing: true, //default is true
        },
        // paused: true,
        // delay: 2,
      });
    }, container);
    () => () => {
      ctx.revert();
    };
  }, []);

  return (
    <figure ref={container}>
      <HeroSvg ref={svgRef} />
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
