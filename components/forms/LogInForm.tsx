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
import { LogInFormSchema } from "@/lib/validation";

export function LogInForm() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof LogInFormSchema>>({
    resolver: zodResolver(LogInFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof LogInFormSchema>) {}

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8"
        id="contact-form"
      >
        <div className="flex items-center gap-6">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-[13px] font-semibold text-[#09121F]">
                  Email
                </FormLabel>
                <FormControl>
                  <Input className="auth-input" {...field} />
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
                  <Input type="password" className="auth-input" {...field} />
                </FormControl>

                <FormMessage className="text-red-600" />
              </FormItem>
            )}
          />
        </div>

        <Button className="w-full rounded-[10px] font-semibold text-white text-base bg-[#09121F] hover:bg-[#09121F] cursor-pointer py-[10px] px-[18px] mt-[51px]">
          Log In
        </Button>
      </form>
    </Form>
  );
}
