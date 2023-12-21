import { z } from "zod";

export const contactFormDataSchema = z.object({
  firstName: z
    .string()
    .min(1, "Oups, tu as oublié ton prénom.")
    .max(50, { message: "Ton prénom est trop long." }),
  lastName: z
    .optional(
      z.string().max(100, { message: "Ton nom de famille est trop long." }),
    )
    .or(z.literal("")),
  message: z.string().min(1, "Pas de message?"),
});

export const rsvpFormDataSchema = z.object({
  email: z
    .string()
    .min(1, "On a besoin de ton adresse email pour te tenir informé.")
    .email({ message: "L'adresse email n'est pas valide." }),
  guests: z
    .object({
      firstName: z
        .string()
        .min(1, "Oups, tu as oublié le prénom.")
        .max(50, { message: "Le prénom est trop long." }),
      lastName: z
        .string()
        .min(1, "On a également besoin du nom de famille.")
        .max(100, { message: "Le nom de famille est trop long." }),
      dietaryRestrictions: z
        .optional(
          z.string().max(300, {
            message: "Les allergies doivent être inférieures à 300 caractères.",
          }),
        )
        .or(z.literal("")),
    })
    .array()
    .nonempty({ message: "Au minimum un invité doit être renseigné!" })
    .max(2, { message: "2 invités maximum!" }),
  activities: z.string().array().min(1),
  accommodation: z.enum(["cottage", "hotel", "none"]),
  message: z.optional(z.string()).or(z.literal("")),
});

// const validationSchema = z
//   .object({
//     firstName: z.string().min(1, { message: "Firstname is required" }),
//     lastName: z.string().min(1, { message: "Lastname is required" }),
//     email: z.string().min(1, { message: "Email is required" }).email({
//       message: "Must be a valid email",
//     }),
//     password: z
//       .string()
//       .min(6, { message: "Password must be atleast 6 characters" }),
//     confirmPassword: z
//       .string()
//       .min(1, { message: "Confirm Password is required" }),
//     terms: z.literal(true, {
//       errorMap: () => ({ message: "You must accept Terms and Conditions" }),
//     }),
//   })
//   .refine((data) => data.password === data.confirmPassword, {
//     path: ["confirmPassword"],
//     message: "Password don't match",
//   });
