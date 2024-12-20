"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { signUpWithEmailFormSchema } from "@/lib/validation";

export function SignUpWithEmailForm() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof signUpWithEmailFormSchema>>({
    resolver: zodResolver(signUpWithEmailFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      phoneNumber: "",
      email: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof signUpWithEmailFormSchema>) {}

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-[25px] mt-8"
        id="contact-form"
      >
        <div className="flex items-center gap-6">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-[13px] font-semibold text-[#09121F]">
                  First Name
                </FormLabel>
                <FormControl>
                  <Input
                    className="auth-input placeholder-gray-400"
                    placeholder="Enter First Name"
                    {...field}
                  />
                </FormControl>

                <FormMessage className="text-red-600" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-[13px] font-semibold text-[#09121F]">
                  Last Name
                </FormLabel>
                <FormControl>
                  <Input
                    className="auth-input"
                    placeholder="Enter Last Name"
                    {...field}
                  />
                </FormControl>

                <FormMessage className="text-red-600" />
              </FormItem>
            )}
          />
        </div>

        <div className="flex items-center gap-6">
          <FormField
            control={form.control}
            name="phoneNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-[13px] font-semibold text-[#09121F]">
                  Phone Number
                </FormLabel>
                <FormControl>
                  <Input
                    className="auth-input"
                    placeholder="Enter Your Phone Number"
                    {...field}
                  />
                </FormControl>

                <FormMessage className="text-red-600" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-[13px] font-semibold text-[#09121F]">
                  Email
                </FormLabel>
                <FormControl>
                  <Input
                    className="auth-input"
                    placeholder="Enter Your Email Name"
                    {...field}
                  />
                </FormControl>

                <FormMessage className="text-red-600" />
              </FormItem>
            )}
          />
        </div>

        <div className="flex items-end gap-6">
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-[13px] font-semibold text-[#09121F]">
                  Password
                </FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    className="auth-input"
                    placeholder="Enter Your Password"
                    {...field}
                  />
                </FormControl>

                <FormMessage className="text-red-600" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="repeatPassword"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    type="password"
                    className="auth-input"
                    placeholder="Repeat Password"
                    {...field}
                  />
                </FormControl>

                <FormMessage className="text-red-600" />
              </FormItem>
            )}
          />
        </div>
        <Button className="w-full rounded-[10px] font-semibold text-white text-base bg-[#09121F] hover:bg-[#09121F] cursor-pointer py-[10px] px-[18px]">
          Sign Up
        </Button>
      </form>
    </Form>
  );
}
