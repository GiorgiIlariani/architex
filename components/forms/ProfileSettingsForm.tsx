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
import { Separator } from "../ui/separator";
import { signUpWithEmailFormSchema } from "@/lib/validation";
import { DialogLayout } from "@/components/shared/Dialog";
import {
  DialogClose,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { useState } from "react";
import { ChangePasswordForm } from "./ChangePasswordForm";

export function ProfileSettingsForm() {
  const [code, setCode] = useState("");

  const form = useForm<z.infer<typeof signUpWithEmailFormSchema>>({
    resolver: zodResolver(signUpWithEmailFormSchema),
    defaultValues: {
      firstName: "Georg",
      lastName: "Johnes",
      phoneNumber: "599999999",
      email: "g@gmail.com",
    },
  });

  function onSubmit(values: z.infer<typeof signUpWithEmailFormSchema>) {
    // Handle form submission
  }

  function handleAccountRemoval() {
    // Logic to handle account removal
    console.log("Account removed");
  }

  const isCodeCorrect = true;

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
                    className="profile-settings-input placeholder-[#747D8A]"
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
          <DialogLayout
            trigger={
              <span className="text-base font-medium underline text-[#09121F] cursor-pointer">
                Change your password
              </span>
            }
            content={
              isCodeCorrect ? (
                <>
                  <DialogHeader>
                    <DialogTitle className="text-xl text-[#09121F] font-bold text-center">
                      Change password
                    </DialogTitle>
                  </DialogHeader>

                  <DialogFooter className="flex justify-end gap-4 mt-6">
                    <div className="w-full flex items-center justify-center">
                      <Button
                        type="submit"
                        // onClick={onConfirm}
                        className="bg-[#09121F] hover:bg-[#09121F] text-white py-[10px] px-[18px] rounded-[10px] text-base font-semibold"
                      >
                        Change Password
                      </Button>
                    </div>
                  </DialogFooter>
                </>
              ) : (
                <>
                  <DialogHeader>
                    <DialogTitle className="text-xl text-[#09121F] font-bold text-center">
                      Verify your email
                    </DialogTitle>
                    <div className="my-[9px]" />
                    <DialogDescription className="text-sm text-center text-[#747D8A]">
                      We've sent you Code, to sure that email address is yours.
                      So, check inbox and continue there.
                    </DialogDescription>
                  </DialogHeader>

                  <div className="max-w-[165px] mx-auto">
                    <label htmlFor="code">Enter Code</label>
                    <Input
                      name="code"
                      id="code"
                      className="bg-white h-[45px] text-[#09121F] px-6 py-[18px] text-base border-white focus:border focus:border-[#F7A33C] rounded-[10px] mt-[6px] mb-[17px]"
                      value={code}
                      onChange={(e) => setCode(e.target.value)}
                    />
                    <div className="w-full items-center flex justify-center">
                      <span className="text-[#09121F] font-medium text-base underline cursor-pointer w-full text-center">
                        Resend
                      </span>
                    </div>
                  </div>

                  <DialogFooter className="flex justify-end gap-4 mt-6">
                    <div className="w-full flex items-center justify-center">
                      <Button
                        // onClick={onConfirm}
                        className="bg-[#09121F] hover:bg-[#09121F] text-white py-[10px] px-[18px] rounded-[10px] text-base font-semibold"
                      >
                        Verify
                      </Button>
                    </div>
                  </DialogFooter>
                </>
              )
            }
            onConfirm={() => {}}
          />

          <DialogLayout
            trigger={
              <span className="text-base font-medium underline text-[#E10C0C] cursor-pointer">
                Remove your account
              </span>
            }
            content={
              <>
                <DialogHeader>
                  <DialogTitle className="text-xl text-[#09121F] font-bold text-center">
                    Are you sure?
                  </DialogTitle>
                  <div className="my-[9px]" />
                  <DialogDescription className="text-sm text-center text-[#747D8A]">
                    Delete account text
                  </DialogDescription>
                </DialogHeader>
                <DialogFooter className="flex justify-end gap-4">
                  <div className="flex gap-[14.5px] w-full items-center justify-center">
                    <Button
                      // onClick={onConfirm}
                      className="bg-[#E10C0C] hover:bg-[#E10C0C]  text-white py-[10px] px-[18px] rounded-[10px]"
                    >
                      Delete
                    </Button>
                    <DialogClose asChild>
                      <Button className="bg-[#09121F] hover:bg-[#09121F] text-white py-[10px] px-[18px] rounded-[10px]">
                        Cancel
                      </Button>
                    </DialogClose>
                  </div>
                </DialogFooter>
              </>
            }
            onConfirm={handleAccountRemoval}
          />
        </div>
      </form>
    </Form>
  );
}
