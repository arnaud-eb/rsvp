"use server";

import { prisma } from "@/lib/db";
import { contactFormDataSchema, rsvpFormDataSchema } from "@/lib/schema";
import { z } from "zod";

type ContactFormInputs = z.infer<typeof contactFormDataSchema>;
type RsvpFormInputs = z.infer<typeof rsvpFormDataSchema>;

export const addMessage = async (data: ContactFormInputs) => {
  try {
    const result = contactFormDataSchema.safeParse(data);
    if (result.success) {
      const response = await prisma.message.create({
        data: {
          firstName: result.data.firstName,
          lastName: result.data.lastName,
          message: result.data.message,
        },
      });
      return { success: true, data: result.data };
    }
    if (result.error) {
      return { success: false, error: result.error.format() };
    }
  } catch (error) {
    console.log(error);
    return { success: false, error };
  }
};

export const addBooking = async (data: RsvpFormInputs) => {
  try {
    const result = rsvpFormDataSchema.safeParse(data);
    if (result.success) {
      const { id: userId } = await prisma.user.create({
        data: {
          email: result.data.email,
        },
      });
      const { id: bookingId } = await prisma.booking.create({
        data: {
          userId,
          activities: result.data.activities,
          accommodation: result.data.accommodation,
          message: result.data.message,
        },
      });
      result.data.guests.forEach(
        async ({ firstName, lastName, dietaryRestrictions }) => {
          await prisma.guest.create({
            data: {
              bookingId,
              userId,
              firstName,
              lastName,
              dietaryRestrictions,
            },
          });
        },
      );
      return { success: true, data: result.data };
    }
    if (result.error) {
      return { success: false, error: result.error.format() };
    }
  } catch (error) {
    console.log(error);
    return { success: false, error };
  }
};
