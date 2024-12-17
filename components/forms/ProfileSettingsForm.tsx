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
import { Separator } from "../ui/separator";

export function ProfileSettingsForm() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof signUpWithEmailFormSchema>>({
    resolver: zodResolver(signUpWithEmailFormSchema),
    defaultValues: {
      firstName: "Georg",
      lastName: "Johnes",
      phoneNumber: "599999999",
      email: "g@gmail.com",
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
        <div className="flex items-end gap-10">
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
                    className="profile-settings-input placeholder-[#747D8A] "
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
                    className="profile-settings-input"
                    placeholder="Enter Last Name"
                    {...field}
                  />
                </FormControl>

                <FormMessage className="text-red-600" />
              </FormItem>
            )}
          />

          <Button className="rounded-[10px] font-semibold text-white text-base bg-[#09121F] hover:bg-[#09121F] cursor-pointer py-[10px] px-[18px]">
            Save
          </Button>
        </div>

        <Separator className="border border-[#D9D9D9] my-7" />

        <div className="flex items-end gap-10">
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
                    className="profile-settings-input"
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
                    className="profile-settings-input"
                    placeholder="Enter Your Email Name"
                    {...field}
                  />
                </FormControl>

                <FormMessage className="text-red-600" />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            className="rounded-[10px] font-semibold text-white text-base bg-[#09121F] hover:bg-[#09121F] cursor-pointer py-[10px] px-[18px]"
          >
            Save
          </Button>
        </div>

        <Separator className="border border-[#D9D9D9] mt-7 mb-[37px]" />

        <div className="flex flex-col gap-7">
          <span className="text-base font-medium underline text-[#09121F] cursor-pointer">
            Change your password
          </span>
          <span className="text-base font-medium underline text-[#E10C0C] cursor-pointer">
            Remove your account
          </span>
        </div>
      </form>
    </Form>
  );
}
