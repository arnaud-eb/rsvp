import { gsap } from "gsap";
import { useRouter } from "next/navigation";
import React, { useEffect, useRef } from "react";

import useIsomorphicLayoutEffect from "@/hooks/useIsomorphicLayoutEffect";

type ConfirmationProps = { isRedirected?: boolean };

const Confirmation: FCC<ConfirmationProps> = ({
  children,
  isRedirected = false,
}) => {
  const router = useRouter();
  const containerRef = useRef<HTMLElement | null>(null);
  const textRef = useRef(null);
  const checkMarkRef = useRef(null);

  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap
        .timeline({ opacity: 0 })
        .from(checkMarkRef.current, {
          x: containerRef.current!.clientWidth / 2,
          rotation: 360,
          ease: "back.out(1.7)",
          duration: 0.7,
        })
        .from(
          textRef.current,
          {
            y: 20,
          },
          "-=0.5",
        );
    }, containerRef);
    () => () => {
      ctx.revert();
    };
  }, []);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isRedirected) {
      timer = setTimeout(() => {
        router.push("/");
      }, 5000);
    }
    return () => clearTimeout(timer);
  }, [router, isRedirected]);

  return (
    <article
      ref={containerRef}
      className="flex h-[80vh] flex-col items-center justify-center space-y-4 p-6 md:space-y-6 lg:p-8"
    >
      <svg
        ref={checkMarkRef}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        data-slot="icon"
        className="h-24 w-24 text-success-900"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
        />
      </svg>
      <div ref={textRef} className="text-gray-900 text-center">
        {children}
      </div>
    </article>
  );
};

export default Confirmation;
