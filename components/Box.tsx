"use client";

import gsap from "gsap";
import { useLayoutEffect, useRef } from "react";
import Hero from "./Hero";

const Box = () => {
  const container = useRef<HTMLElement>(null);
  // const box = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // const tl = gsap.timeline({ repeat: -1, repeatDelay: 0.65, yoyo: false });
      // const tl = gsap.timeline({delay: 2});
      const path = "svg path";
      const stagger_val = 0.001;
      const duration = 3;
      // tl.set(path, {
      //   x: "random(-1000, 1000)",
      //   y: "random(-1000, 1000)",
      //   rotation: "random(-720, 720)",
      //   scale: 0,
      //   opacity: 0,
      // });
      // tl.to(path, {
      //   duration,
      //   stagger: stagger_val,
      //   x: 0,
      //   y: 0,
      //   opacity: 1,
      //   scale: 1,
      //   rotation: 0,
      //   ease: "power4.out",
      // });
      // tl.to(path, {
      //   duration,
      //   stagger: stagger_val,
      //   x: "random(-1000, 1000)",
      //   y: "random(-1000, 1000)",
      //   opacity: 0,
      //   scale: 0,
      //   rotation: "random(-720, 720)",
      //   ease: "power4.out",
      // });

    }, container);
    
    () => () => {
      ctx.revert();
    };
  }, []);

  
  return (
    // <section
    //   // ref={container}
    //   // className="w-full flex flex-wrap gap-3 justify-evenly"
    //   // className="w-full"
    // >
    <figure
      ref={container}
      // className="flex items-center justify-center h-screen w-screen"
      // className="flex items-center justify-center"
    >
      <Hero/>
    </figure>
    /* <div className="box green block bg-green-900 w-20 h-20 rounded-xl m-2" />
      <div className="box purple block bg-purple-900 w-20 h-20 rounded-xl m-2" />
      <div className="box amber block bg-amber-900 w-20 h-20 rounded-xl m-2" /> */
    // </section>
  );
};

export default Box;

// tl.to(".purple", { rotation: 360 });
  // tl.to(".amber", { rotation: 360 });
  // gsap.to(".box", {
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