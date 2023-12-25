"use client";

import Step from "./Step";
import Stepper from "./Stepper";
import { steps } from "./constants";
import { rsvpFormDataSchema } from "@/lib/schema";
import chevronIcon from "@/public/icons/chevron.svg";
import minusIcon from "@/public/icons/minus.svg";
import plusIcon from "@/public/icons/plus.svg";
import { zodResolver } from "@hookform/resolvers/zod";
import dynamic from "next/dynamic";
import Image from "next/image";
import React, { FC, useState } from "react";
import { useForm, SubmitHandler, useFieldArray } from "react-hook-form";
import { z } from "zod";

import Loader from "@/components/Loader";

import { addBooking } from "@/utils/actions";

const Confirmation = dynamic(() => import("./Confirmation"));

type Inputs = z.infer<typeof rsvpFormDataSchema>;
type FieldName = keyof Inputs;

const RSVP: FC = () => {
  const [previousStep, setPreviousStep] = useState<number>(0);
  const [currentStep, setCurrentStep] = useState<number>(0);
  const delta = currentStep - previousStep;

  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors },
    control,
  } = useForm<Inputs>({
    resolver: zodResolver(rsvpFormDataSchema),
    defaultValues: {
      guests: [
        {
          firstName: "",
          lastName: "",
          dietaryRestrictions: "",
        },
      ],
    },
  });

  const { fields, append, remove } = useFieldArray({ control, name: "guests" });

  const lastStep = steps.length - 1;

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const result = await addBooking(data);

    if (!result) {
      console.log("Something went wrong!");
      return;
    }

    if (result.error) {
      // TODO: handle error in UI
      console.log(result.error);
      return;
    }

    console.log("Booking sent!", result);

    // show confirmation that booking was received
  };

  const increment = () => {
    if (fields.length === 1) {
      append({
        firstName: "",
        lastName: "",
        dietaryRestrictions: "",
      });
    }
  };
  const decrement = () => {
    if (fields.length === 2) {
      remove(1);
    }
  };

  const next = async () => {
    // preventDefault?
    const fields = steps[currentStep].fields;
    if (fields) {
      const output = await trigger(fields as FieldName[], {
        shouldFocus: true,
      });
      if (!output) return;
    }

    if (currentStep < lastStep) {
      if (currentStep === steps.length - 3) {
        setPreviousStep(currentStep);
        setCurrentStep((step) => step + 1);
        await handleSubmit(onSubmit)();
      }
      setPreviousStep(currentStep);
      setCurrentStep((step) => step + 1);
    }
  };

  const prev = () => {
    // preventDefault?
    if (currentStep > 0) {
      setPreviousStep(currentStep);
      setCurrentStep((step) => step - 1);
    }
  };

  return (
    <section className="mx-auto flex flex-col items-center justify-center px-6 pb-8 pt-2 lg:h-[90%] lg:flex-row lg:py-0">
      <Stepper currentStep={currentStep} setCurrentStep={setCurrentStep} />
      <div className="relative w-full border-4 border-solid border-secondary-300 bg-neutral-200 sm:max-w-md lg:mt-0 xl:p-0">
        <div className="rsvp-gradient-shadow absolute h-full w-full border-4 border-solid border-secondary-300" />
        <div className="mx-auto max-w-sm overflow-x-auto">
          <form className="px-4" onSubmit={handleSubmit(onSubmit)}>
            {currentStep === 0 && (
              <Step delta={delta} currentStep={currentStep}>
                <h2 className="text-gray-900 text-2xl font-bold leading-tight tracking-tight md:text-3xl">
                  {steps[0].name}
                </h2>
                <p className="text-base font-light text-secondary-400">
                  Qui sera de la partie?
                </p>
                <div>
                  <div className="mb-5">
                    <label
                      htmlFor="email"
                      className="text-gray-900 mb-2 block text-base font-medium"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      autoComplete="email"
                      placeholder="gaston.lagaffe@gmail.com"
                      className={`shadow-input-form block w-full rounded border bg-tertiary-700 p-2.5 text-base ${
                        errors.email?.message
                          ? "border-alerts-400 text-alerts-900 placeholder-alerts-700 focus:border-alerts-400 focus:ring-alerts-400"
                          : "border-secondary-300 focus:border-exclusive-900 focus:ring-exclusive-900"
                      }`}
                      {...register("email")}
                    />
                    {errors.email?.message && (
                      <p className="mt-2 text-base text-alerts-600">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                  <div className="mb-5">
                    <label htmlFor="guests-input" className="sr-only">
                      Sélectionne le nombre d&apos;invités:
                    </label>
                    <div className="shadow-input-form relative flex items-center rounded">
                      <button
                        type="button"
                        id="decrement-button"
                        className={`h-11 rounded-s border border-secondary-300 bg-exclusive-300 p-3 hover:bg-exclusive-900 focus:outline-none focus:ring-2 focus:ring-exclusive-100 ${
                          fields.length === 1
                            ? "cursor-not-allowed"
                            : "cursor-pointer"
                        }`}
                        onClick={decrement}
                        disabled={fields.length === 1}
                      >
                        <Image
                          priority
                          src={minusIcon}
                          alt="minus"
                          className="h-3 w-3"
                        />
                      </button>
                      <input
                        type="number"
                        id="guests-input"
                        tabIndex={-1}
                        className="block h-11 w-full border-x-0 border-secondary-300 bg-tertiary-700 pb-6 text-center text-base font-medium focus:border-exclusive-100 focus:ring-exclusive-100"
                        value={fields.length}
                        min={1}
                        max={2}
                        readOnly
                      />
                      <div className="text-gray-400 absolute bottom-1 start-1/2 flex -translate-x-1/2 items-center space-x-1 text-sm rtl:translate-x-1/2 rtl:space-x-reverse">
                        <svg
                          className="h-2.5 w-2.5"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 20 20"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4.333 6.764a3 3 0 1 1 3.141-5.023M2.5 16H1v-2a4 4 0 0 1 4-4m7.379-8.121a3 3 0 1 1 2.976 5M15 10a4 4 0 0 1 4 4v2h-1.761M13 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm-4 6h2a4 4 0 0 1 4 4v2H5v-2a4 4 0 0 1 4-4Z"
                          />
                        </svg>
                        <span>Invités</span>
                      </div>
                      <button
                        type="button"
                        id="increment-button"
                        className={`border-gray-300 h-11 rounded-e border bg-exclusive-300 p-3 hover:bg-exclusive-400 focus:outline-none focus:ring-2 focus:ring-exclusive-100 ${
                          fields.length === 2
                            ? "cursor-not-allowed"
                            : "cursor-pointer"
                        }`}
                        onClick={increment}
                        disabled={fields.length === 2}
                      >
                        <Image
                          priority
                          src={plusIcon}
                          alt="plus"
                          className="h-3 w-3"
                        />
                      </button>
                    </div>
                  </div>
                </div>
              </Step>
            )}
            {currentStep === 1 && (
              <Step delta={delta} currentStep={currentStep}>
                {fields.map((field, index) => (
                  <div key={field.id}>
                    <h3 className="text-gray-900 mb-2 text-lg font-medium">
                      Invité {index + 1}
                    </h3>
                    <div className="mb-5">
                      <div>
                        <label
                          htmlFor="firstName"
                          className="text-gray-900 mb-2 block text-base font-medium"
                        >
                          Prénom
                        </label>
                        <input
                          id="firstName"
                          autoComplete="given-name"
                          placeholder="Gaston"
                          className={`shadow-input-form block w-full rounded border bg-tertiary-700 p-2.5 text-base ${
                            errors.guests?.[index]?.firstName?.message
                              ? "border-alerts-400 text-alerts-900 placeholder-alerts-700 focus:border-alerts-400 focus:ring-alerts-400"
                              : "border-secondary-300 focus:border-exclusive-900 focus:ring-exclusive-900"
                          }`}
                          {...register(`guests.${index}.firstName` as const)}
                        />
                        {errors.guests?.[index]?.firstName?.message && (
                          <p className="mt-2 text-lg text-alerts-600">
                            {errors.guests?.[index]?.firstName?.message}
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="mb-5">
                      <label
                        htmlFor="lastName"
                        className="text-gray-900 mb-2 block text-base font-medium"
                      >
                        Nom
                      </label>
                      <input
                        id="lastName"
                        type="text"
                        autoComplete="family-name"
                        placeholder="Lagaffe"
                        className={`shadow-input-form block w-full rounded border bg-tertiary-700 p-2.5 text-base ${
                          errors.guests?.[index]?.lastName?.message
                            ? "border-alerts-400 text-alerts-900 placeholder-alerts-700 focus:border-alerts-400 focus:ring-alerts-400"
                            : "border-secondary-300 focus:border-exclusive-900 focus:ring-exclusive-900"
                        }`}
                        {...register(`guests.${index}.lastName` as const)}
                      />
                      {errors.guests?.[index]?.lastName?.message && (
                        <p className="mt-2 text-base text-alerts-600">
                          {errors.guests?.[index]?.lastName?.message}
                        </p>
                      )}
                    </div>
                    <div className="mb-5">
                      <label
                        htmlFor="dietaryRestrictions"
                        className="text-gray-900 mb-2 block text-base font-medium"
                      >
                        Allergies ou restrictions alimentaires
                      </label>
                      <input
                        id="dietaryRestrictions"
                        type="text"
                        placeholder="Les crustacés et produits à base de crustacés"
                        className="text-gray-900 shadow-input-form block w-full rounded border border-secondary-300 bg-tertiary-700 p-2.5 text-base focus:border-exclusive-900 focus:ring-exclusive-900"
                        {...register(
                          `guests.${index}.dietaryRestrictions` as const,
                        )}
                      />
                    </div>
                  </div>
                ))}
              </Step>
            )}
            {currentStep === 2 && (
              <Step delta={delta} currentStep={currentStep}>
                <h2 className="text-gray-900 text-2xl font-bold leading-tight tracking-tight md:text-3xl">
                  {steps[2].name}
                </h2>
                <p className="text-gray-500 text-base font-light">
                  {fields.length === 1
                    ? "À quelles activités participeras-tu?"
                    : "À quelles activités participerez-vous?"}
                </p>
                <fieldset>
                  <legend className="sr-only">
                    Choisis ton programme de la journée
                  </legend>
                  <div className="mb-4 flex items-center">
                    <input
                      id="cocktail"
                      value="cocktail"
                      type="checkbox"
                      className="border-gray-300 bg-gray-100 text-blue-600 focus:ring-blue-500 h-4 w-4 rounded focus:ring-2"
                      {...register("activities")}
                    />
                    <label
                      htmlFor="cocktail"
                      className="text-gray-900 ms-2 text-base font-medium"
                    >
                      Cocktail | 11 mai 2024 | 16:00
                    </label>
                  </div>
                  <div className="mb-4 flex items-center">
                    <input
                      id="dinner"
                      value="dinner"
                      type="checkbox"
                      className="border-gray-300 bg-gray-100 text-blue-600 focus:ring-blue-500 h-4 w-4 rounded focus:ring-2"
                      {...register("activities")}
                    />
                    <label
                      htmlFor="dinner"
                      className="text-gray-900 ms-2 text-base font-medium"
                    >
                      Repas | 11 mai 2024 | 19:00
                    </label>
                  </div>
                  <div className="mb-4 flex items-center">
                    <input
                      id="brunch"
                      value="brunch"
                      type="checkbox"
                      className="border-gray-300 bg-gray-100 text-blue-600 focus:ring-blue-500 h-4 w-4 rounded focus:ring-2"
                      {...register("activities")}
                    />
                    <label
                      htmlFor="brunch"
                      className="text-gray-900 ms-2 text-base font-medium"
                    >
                      Brunch | 12 mai 2024 | 11:00
                    </label>
                  </div>
                  {errors.activities && (
                    <p className="mt-2 text-base text-alerts-600">
                      Selectionne au moins une activité!
                    </p>
                  )}
                </fieldset>
              </Step>
            )}
            {currentStep === 3 && (
              <Step delta={delta} currentStep={currentStep}>
                <h2 className="text-gray-900 text-2xl font-bold leading-tight tracking-tight md:text-3xl">
                  {steps[3].name}
                </h2>
                <p className="text-gray-500 text-base font-light">
                  On met à disposition un{" "}
                  <a
                    className="font-semibold text-secondary-900 hover:text-primary-900"
                    href="https://gite-maisonblanche.com/location-gite-de-grand-capacite-meuse/"
                    target="_blank"
                  >
                    gîte
                  </a>{" "}
                  de 51 lits et pour ceux qui désirent plus de confort, il y a
                  également un{" "}
                  <a
                    className="font-semibold text-secondary-900 hover:text-primary-900"
                    href="http://www.lessorbiers.com/views/FR/sorbiers/chambres.html"
                    target="_blank"
                  >
                    hôtel
                  </a>{" "}
                  {fields.length === 1
                    ? "sur place. Que préféres-tu?"
                    : "sur place. Que préférez-vous?"}
                </p>
                <fieldset>
                  <legend className="sr-only">Choisis ton logement</legend>
                  <div className="mb-4 flex items-center">
                    <input
                      id="cottage"
                      value="cottage"
                      type="radio"
                      className="border-gray-300 focus:ring-blue-300 h-4 w-4 focus:ring-2"
                      aria-describedby="helper-cottage-text"
                      {...register("accommodation")}
                    />
                    <div className="ms-2 text-base">
                      <label
                        htmlFor="cottage"
                        className="text-gray-900 font-medium"
                      >
                        Gîte
                      </label>
                      <p
                        id="helper-cottage-text"
                        className="text-gray-500 text-sm font-normal"
                      >
                        {fields.length === 1
                          ? " N'oublie pas ton sac de couchage et ta serviette de bain."
                          : " N'oubliez pas vos sacs de couchage et serviettes de bain."}
                      </p>
                    </div>
                  </div>
                  <div className="mb-4 flex items-center">
                    <input
                      id="hotel"
                      value="hotel"
                      type="radio"
                      className="border-gray-300 focus:ring-blue-300 h-4 w-4 focus:ring-2"
                      {...register("accommodation")}
                    />
                    <div className="ms-2 text-base">
                      <label
                        htmlFor="hotel"
                        className="text-gray-900 font-medium"
                      >
                        Hôtel
                      </label>
                      <p
                        id="helper-cottage-text"
                        className="text-gray-500 text-sm font-normal"
                      >
                        {fields.length === 1
                          ? "On te laisse les "
                          : "On vous laisse les "}
                        <a
                          className="font-semibold text-secondary-900 hover:text-primary-900"
                          href="http://www.lessorbiers.com/views/FR/sorbiers/contact.html"
                          target="_blank"
                        >
                          contacter
                        </a>{" "}
                        directement.{" "}
                        {fields.length === 1 ? "Précise" : "Précisez"} leur bien
                        que{" "}
                        {fields.length === 1
                          ? "tu es un invité"
                          : "vous êtes des invités"}{" "}
                        du mariage Peduzzi-Depierreux.
                      </p>
                    </div>
                  </div>
                  <div className="mb-4 flex items-center">
                    <input
                      id="none"
                      value="none"
                      type="radio"
                      className="border-gray-300 focus:ring-blue-300 h-4 w-4 focus:ring-2"
                      {...register("accommodation")}
                    />
                    <label
                      htmlFor="none"
                      className="text-gray-900 ms-2  block text-base font-medium"
                    >
                      {fields.length === 1
                        ? "Je ne logerai pas sur place"
                        : "Nous ne logerons pas sur place"}
                    </label>
                  </div>
                  {errors.accommodation?.message && (
                    <p className="mt-2 text-base text-alerts-600">
                      Selectionne ton mode de logement!
                    </p>
                  )}
                </fieldset>
              </Step>
            )}
            {currentStep === 4 && (
              <Step delta={delta} currentStep={currentStep}>
                <h2 className="text-gray-900 text-2xl font-bold leading-tight tracking-tight md:text-3xl">
                  {steps[4].name}
                </h2>
                <p className="text-gray-500 text-base font-light">
                  Une demande spéciale? Une suggestion? C&apos;est le moment de
                  nous en faire part.
                </p>
                <div>
                  <label htmlFor="message" className="hidden ">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="Voir Arnaud et Justine tenter le saut de l'ange"
                    className="text-gray-900 shadow-input-form block w-full rounded border border-secondary-300 bg-tertiary-700 p-2.5 text-base focus:border-exclusive-900 focus:ring-exclusive-900"
                    {...register("message")}
                  />
                </div>
              </Step>
            )}
            {currentStep === 5 && (
              <article className=" bg-cyan-600">
                <Loader />
              </article>
            )}
            {currentStep === 6 && (
              <Confirmation isRedirected={true}>
                <h3 className="text-2xl font-bold">C&apos;est confirmé!</h3>
                <p className="text-xl">
                  On se réjouit de {fields.length > 1 ? "vous" : "te"} voir.
                </p>
                <p className="mt-5 text-lg">
                  Clique sur le bouton retour en haut à gauche ou attends 5
                  secondes avant d&apos;être redirigé vers le menu principal.
                </p>
              </Confirmation>
            )}
          </form>
          {currentStep !== lastStep && (
            <div className="pb-6 lg:pb-8">
              <div className="flex justify-evenly px-5 py-2.5">
                {/* reuse button component across site */}
                <button
                  type="button"
                  className={`group flex h-full items-center justify-center px-4 focus:outline-none ${
                    currentStep === 0
                      ? "hidden cursor-not-allowed"
                      : "cursor-pointer"
                  }`}
                  onClick={prev}
                  disabled={currentStep === 0}
                >
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-secondary-100 p-2.5 group-hover:bg-secondary-300 group-focus:outline-none group-focus:ring-4 group-focus:ring-secondary-200">
                    <Image
                      priority
                      src={chevronIcon}
                      alt="previous"
                      className="h-4 w-4 lg:h-5 lg:w-5"
                    />
                    <span className="sr-only">Previous</span>
                  </span>
                </button>
                <button
                  type="button"
                  className={`group flex h-full items-center justify-center px-4 focus:outline-none ${
                    currentStep === lastStep
                      ? "hidden cursor-not-allowed"
                      : "cursor-pointer"
                  }`}
                  onClick={next}
                  disabled={currentStep === lastStep}
                >
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-secondary-100 p-2.5 group-hover:bg-secondary-300 group-focus:outline-none group-focus:ring-4 group-focus:ring-secondary-200">
                    <Image
                      priority
                      src={chevronIcon}
                      alt="next"
                      className="h-4 w-4 rotate-180 lg:h-5 lg:w-5"
                    />
                    <span className="sr-only">Next</span>
                  </span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default RSVP;

// we should have a validation that says that we already have a booking for that email

// {currentStep === 4 && (
//   <article>
//     <h2>{steps[4].name}</h2>
//     <p>Résumé</p>
//     <ul>
//       <li>
//         <span>Email:</span>
//         <span>answer</span>
//         {/* edit icon */}
//       </li>
//       <li>
//         <span>Prénom:</span>
//         <span>answer</span>
//         {/* edit icon */}
//       </li>
//       <li>
//         <span>Nom:</span>
//         <span>answer</span>
//         {/* edit icon */}
//       </li>
//       <li>
//         <span>Activités:</span>
//         <span>answer</span>
//         {/* ul of activities (li) with a V sign ? */}
//         {/* edit icon */}
//       </li>
//       <li>
//         <span>Logement:</span>
//         <span>answer</span>
//         {/* edit icon */}
//       </li>
//       {/* only if message to display */}
//       <li>
//         <span>Message:</span>
//         <span>answer</span>
//         {/* edit icon */}
//       </li>
//     </ul>
//   </article>
// )}
