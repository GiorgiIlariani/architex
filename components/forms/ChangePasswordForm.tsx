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
import { ChangePasswordFormSchema } from "@/lib/validation";

export function ChangePasswordForm() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof ChangePasswordFormSchema>>({
    resolver: zodResolver(ChangePasswordFormSchema),
    defaultValues: {
      oldPassword: "",
      password: "",
      repeatPassword: "",
    },
  });

  function onSubmit(values: z.infer<typeof ChangePasswordFormSchema>) {}

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-[23px] max-w-[165px] mx-auto"
        id="changePassword-form"
      >
        <FormField
          control={form.control}
          name="oldPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[13px] font-semibold text-[#09121F]">
                Repeat Password
              </FormLabel>
              <FormControl>
                <Input
                  type="password"
                  placeholder="Provide old password"
                  className="profileChangePassword-input"
                  {...field}
                />
              </FormControl>

              <FormMessage className="text-red-600" />
            </FormItem>
          )}
        />

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
                  placeholder="Provide new password"
                  type="password"
                  className="profileChangePassword-input"
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
              <FormLabel className="text-[13px] font-semibold text-[#09121F]">
                Repeat Password
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="Repeat new Password"
                  type="password"
                  className="profileChangePassword-input"
                  {...field}
                />
              </FormControl>

              <FormMessage className="text-red-600" />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
}
