import { z } from "zod";

export const contactFormSchema = z.object({
  email: z.string().email(),
  subject: z.string().min(5, "minimum 5 characters"),
  text: z.string().min(10, "minimum 10 charachters"),
});

export const signUpWithEmailFormSchema = z.object({
  firstName: z.string().min(2, "minimum 2 characters"),
  lastName: z.string().min(2, "minimum 2 charachters"),
  phoneNumber: z.string().min(2, "minimum 2 charachters"),
  email: z.string().email(),
  password: z.string().min(2, "minimum 2 characters"),
  repeatPassword: z.string().min(2, "minimum 2 characters"),
});

export const LogInFormSchema = z.object({
  email: z.string().email(),
  password: z.string().min(2, "minimum 2 characters"),
});

export const ProfileSettingsFormSchema = z.object({
  firstName: z.string().min(2, "minimum 2 characters"),
  lastName: z.string().min(2, "minimum 2 charachters"),
  phoneNumber: z.string().min(2, "minimum 2 charachters"),
  email: z.string().email(),
});

export const ChangePasswordFormSchema = z.object({
  oldPassword: z.string().min(2, "minimum 2 characters"),
  password: z.string().min(2, "minimum 2 characters"),
  repeatPassword: z.string().min(2, "minimum 2 characters"),
});
