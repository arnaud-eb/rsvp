"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { FC, useRef } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { MdMap } from "react-icons/md";
import { TbCircleArrowUpRightFilled } from "react-icons/tb";

import useIsomorphicLayoutEffect from "@/hooks/useIsomorphicLayoutEffect";

const Where: FC = () => {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const hotelRef = useRef<HTMLAnchorElement | null>(null);
  const hrRef = useRef(null);
  const addressRef = useRef<HTMLAnchorElement | null>(null);

  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap
        .timeline({ defaults: { opacity: 0 }, paused: true })
        .from(titleRef.current, {
          y: 20,
        })
        .from(
          hotelRef.current!.children,
          {
            y: 30,
          },
          "-=0.2",
        )
        .from(
          [hrRef.current, addressRef.current!.children],
          {
            y: 40,
          },
          "-=0.4",
        )
        .to(hrRef.current, {
          opacity: 1,
          scale: 1.5,
          duration: 1,
        });

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
    }, containerRef);
    () => () => {
      ctx.revert();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="text-white relative flex h-full w-full flex-col items-center justify-evenly border-4 border-solid border-secondary-300 bg-exclusive-500 px-2"
    >
      <div
        ref={titleRef}
        className="flex w-full justify-center text-5xl font-bold text-secondary-500 sm:text-4xl md:text-5xl"
      >
        <FaLocationDot />
        <h1 className="ml-3">Où?</h1>
      </div>
      <div className="flex flex-col items-center text-lg sm:text-sm md:text-lg">
        <a
          ref={hotelRef}
          href="http://www.lessorbiers.com/views/FR/sorbiers/hotel.html"
          target="_blank"
          className="group flex transition-all hover:text-primary-900"
        >
          <h2 className="mb-2 mr-1 font-semibold group-hover:text-primary-900">
            Au Domaine Les Sorbiers
          </h2>
          <TbCircleArrowUpRightFilled />
        </a>
        <hr ref={hrRef} className="w-1/5" />
        <a
          ref={addressRef}
          href="https://www.google.com/maps/place/Les+Sorbiers/@50.1804404,4.8218385,17z/data=!3m1!4b1!4m9!3m8!1s0x47c1ebc4192ab8cb:0xb4bc4828e4ddaf93!5m2!4m1!1i2!8m2!3d50.1804405!4d4.8267094!16s%2Fg%2F1tk_hw26?entry=ttu"
          target="_blank"
          className="flex transition-all hover:text-primary-900"
        >
          <p className="mr-1 mt-2">
            Rives de Haute Meuse <br />
            Rue des Sorbiers, 241 <br />
            5543 Hastière - Belgique
          </p>
          <MdMap />
        </a>
      </div>
      <div className="curtain-stripe" />
    </div>
  );
};

export default Where;
