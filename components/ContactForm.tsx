"use client";

import { contactFormDataSchema } from "@/lib/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { FC } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";

import { addMessage } from "@/utils/actions";

type Inputs = z.infer<typeof contactFormDataSchema>;

export const FormSkeleton: FC = () => (
  <div role="status" className="mx-auto w-3/4 animate-pulse">
    <div className="mb-3 h-10 w-full rounded-lg bg-gray-200 md:mb-5"></div>
    <div className="mb-3 h-10 w-full rounded-lg bg-gray-200 md:mb-5"></div>
    <div className="mb-3 h-20 rounded-lg bg-gray-200 md:mb-5"></div>
    <div className="h-10 w-24 rounded-lg bg-gray-200"></div>
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

    reset();
    // show confirmation that msg was received
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mx-auto w-3/4">
      <div className="mb-3 md:mb-5">
        <label htmlFor="firstName" className="hidden">
          Prénom
        </label>
        <input
          id="firstName"
          autoComplete="given-name"
          placeholder="Prénom"
          className={`block w-full rounded-lg border p-2.5 text-sm shadow-sm sm:py-1 ${
            errors.firstName?.message
              ? "border-red-500 bg-red-50 text-red-900 placeholder-red-700 focus:border-red-500 focus:ring-red-500"
              : "border-gray-300 bg-gray-50 text-gray-900 focus:border-blue-500 focus:ring-blue-500"
          }`}
          {...register("firstName")}
        />
        {errors.firstName?.message && (
          <p className="mt-2 text-sm text-red-600">
            {errors.firstName.message}
          </p>
        )}
      </div>
      <div className="mb-3 md:mb-5">
        <label htmlFor="lastName" className="hidden">
          Nom
        </label>
        <input
          id="lastName"
          autoComplete="family-name"
          placeholder="Nom"
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:py-1"
          {...register("lastName")}
        />
      </div>
      <div className="mb-3 md:mb-5">
        <label htmlFor="message" className="hidden">
          Message
        </label>
        <textarea
          id="message"
          placeholder="Message"
          rows={3}
          className={`block w-full rounded-lg border p-2.5 text-sm shadow-sm sm:py-1 ${
            errors.message?.message
              ? "border-red-500 bg-red-50 text-red-900 placeholder-red-700 focus:border-red-500 focus:ring-red-500"
              : "border-gray-300 bg-gray-50 text-gray-900 focus:border-blue-500 focus:ring-blue-500"
          }`}
          {...register("message")}
        />
        {errors.message?.message && (
          <p className="mt-2 text-sm text-red-600">{errors.message.message}</p>
        )}
      </div>
      <button
        type="submit"
        className="rounded-lg bg-blue-700 px-5 py-2.5
        text-center text-sm font-medium text-white hover:bg-blue-800
        focus:outline-none focus:ring-4 focus:ring-blue-300"
      >
        Envoyer
      </button>
    </form>
  );
};

export default ContactForm;
