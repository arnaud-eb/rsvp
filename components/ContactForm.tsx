"use client";

import Confirmation from "./RSVP/Confirmation";
import { contactFormDataSchema } from "@/lib/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { FC, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";

import { addMessage } from "@/utils/actions";

type Inputs = z.infer<typeof contactFormDataSchema>;

export const FormSkeleton: FC = () => (
  <div role="status" className="mx-auto w-3/4 animate-pulse">
    <div className="bg-gray-200 mb-3 h-10 w-full rounded md:mb-5"></div>
    <div className="bg-gray-200 mb-3 h-10 w-full rounded md:mb-5"></div>
    <div className="bg-gray-200 mb-3 h-20 rounded md:mb-5"></div>
    <div className="bg-gray-200 h-10 w-24 rounded"></div>
    <span className="sr-only">Loading...</span>
  </div>
);

const ContactForm: FC = () => {
  const {
    register,
    handleSubmit,
    // watch,
    reset,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(contactFormDataSchema),
  });

  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const result = await addMessage(data);

    if (!result) {
      console.log("Something went wrong!");
      return;
    }

    if (result.error) {
      // TODO: handle error in UI
      console.log(result.error);
      return;
    }

    console.log("Message sent!", result);

    setIsFormSubmitted(true);

    reset();
    // show confirmation that msg was received
  };

  return isFormSubmitted ? (
    <Confirmation>
      <h3 className="text-red-900 text-xl font-bold">
        On a bien reçu ton message. Merci!
      </h3>
    </Confirmation>
  ) : (
    <form onSubmit={handleSubmit(onSubmit)} className="mx-auto w-3/4">
      <div className="mb-2 md:mb-3">
        <label htmlFor="firstName" className="hidden">
          Prénom
        </label>
        <input
          id="firstName"
          autoComplete="given-name"
          placeholder="Prénom"
          className={`shadow-input-form block w-full rounded border bg-primary-200 p-2 text-sm sm:py-1 ${
            errors.firstName?.message
              ? "border-alerts-400 text-alerts-900 placeholder-alerts-700 focus:border-alerts-400 focus:ring-alerts-400"
              : "border-secondary-300 focus:border-neutral-900 focus:ring-neutral-900"
          }`}
          {...register("firstName")}
        />
        {errors.firstName?.message && (
          <p className="mt-1 text-sm text-alerts-600">
            {errors.firstName.message}
          </p>
        )}
      </div>
      <div className="mb-2 md:mb-3">
        <label htmlFor="lastName" className="hidden">
          Nom
        </label>
        <input
          id="lastName"
          autoComplete="family-name"
          placeholder="Nom"
          className="shadow-input-form block w-full rounded border border-secondary-300 bg-primary-200 p-2 text-sm focus:border-neutral-900 focus:ring-neutral-900 sm:py-1"
          {...register("lastName")}
        />
      </div>
      <div className="mb-2 md:mb-3">
        <label htmlFor="message" className="hidden">
          Message
        </label>
        <textarea
          id="message"
          placeholder="Message"
          rows={3}
          className={`shadow-input-form block w-full rounded border bg-primary-200 p-2 text-sm sm:py-1 ${
            errors.message?.message
              ? "border-alerts-400 text-alerts-900 placeholder-alerts-700 focus:border-alerts-400 focus:ring-alerts-400"
              : "border-secondary-300 focus:border-neutral-900 focus:ring-neutral-900"
          }`}
          {...register("message")}
        />
        {errors.message?.message && (
          <p className="mt-1 text-sm text-alerts-600">
            {errors.message.message}
          </p>
        )}
      </div>
      <button
        type="submit"
        className="shadow-details flex w-28 items-center justify-center rounded border-2 border-solid border-secondary-300 bg-exclusive-500 px-4 py-1 text-center font-medium hover:bg-exclusive-800 focus:outline-none focus:ring-4 focus:ring-exclusive-300"
      >
        Envoyer
      </button>
    </form>
  );
};

export default ContactForm;
