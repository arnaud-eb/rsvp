import { gsap } from "gsap";
import { useRef } from "react";

import useIsomorphicLayoutEffect from "@/hooks/useIsomorphicLayoutEffect";

type StepProps = {
  delta: number;
  currentStep: number;
};

const Step: FCC<StepProps> = ({ children, delta, currentStep }) => {
  const containerRef = useRef(null);

  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(containerRef.current, {
        xPercent: delta < 0 ? -50 : currentStep === 0 ? 0 : 50,
        opacity: 0,
        duration: 0.3,
        ease: "power1.inOut",
      });
    }, containerRef);
    () => () => {
      ctx.revert();
    };
  }, []);

  return (
    <article ref={containerRef} className="space-y-4 pt-6 md:space-y-6 lg:pt-8">
      {children}
    </article>
  );
};

export default Step;
