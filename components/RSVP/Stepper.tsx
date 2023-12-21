import { steps } from "./constants";
import checkIcon from "@/public/icons/check.svg";
import Image from "next/image";
import { FC } from "react";

type StepperProps = {
  currentStep: number;
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
};

const Stepper: FC<StepperProps> = ({ currentStep, setCurrentStep }) => {
  const filteredSteps = steps.slice(0, -2);
  const lastStep = filteredSteps.length - 1;
  return (
    <nav
      aria-label="Progress"
      className="flex w-full self-center sm:max-w-md lg:w-fit"
    >
      <ol className="mb-6 flex w-full items-center lg:mb-0 lg:flex-col">
        {filteredSteps.map((step, index) => {
          const pastStep = index < currentStep;
          return (
            <li
              key={step.name}
              className={`flex w-full translate-x-1/4 items-center lg:relative lg:my-5 lg:ms-6 lg:transform-none ${
                index !== lastStep
                  ? "after:inline-block after:w-full after:border-2 after:border-s after:content-[''] lg:after:absolute lg:after:-left-[29px] lg:after:bottom-0 lg:after:-z-10 lg:after:w-1/2 lg:after:rotate-90"
                  : ""
              } ${
                pastStep
                  ? "text-blue-600 after:border-blue-100"
                  : "after:border-gray-100"
              }`}
            >
              <button
                onClick={() => {
                  if (index <= currentStep) setCurrentStep(index);
                }}
                className={`flex items-center ${
                  index > currentStep ? "cursor-not-allowed" : "cursor-pointer"
                }`}
                disabled={index > currentStep}
              >
                <span
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full lg:h-12 lg:w-12 ${
                    pastStep ? "bg-blue-100" : "bg-gray-100"
                  }`}
                >
                  {pastStep ? (
                    <Image
                      priority
                      src={checkIcon}
                      alt="check"
                      className="h-3.5 w-3.5 lg:h-4 lg:w-4"
                    />
                  ) : (
                    <Image
                      priority
                      src={step.src}
                      alt={step.name}
                      className="h-4 w-4 lg:h-5 lg:w-5"
                    />
                  )}
                </span>
                <h3 className="ml-4 hidden font-medium leading-tight lg:block">
                  {step.name}
                </h3>
              </button>
            </li>
          );
        })}
        {/* we should probably disable the btn for the last step / confirmation step */}
        {/* we should also disable all the btns once confirmation is received */}
      </ol>
    </nav>
  );
};

export default Stepper;
