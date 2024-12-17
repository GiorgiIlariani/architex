"use client";

import { Button } from "@/components/ui/button";
import { headerConstants } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Modal from "@/components/shared/RegistrationModal";
import { LogInForm } from "@/components/forms/LogInForm";
import { SignUpWithEmailForm } from "@/components/forms/SignUpWithEmailForm";

const HeaderComponent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSignUpWithEmail, setIsSignUpWithEmail] = useState(false);
  const [authMethod, setAuthMethod] = useState<"sign-up" | "sign-in" | null>(
    null
  );

  const openModal = (method: "sign-up" | "sign-in") => {
    setIsModalOpen(true);
    setAuthMethod(method);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setIsSignUpWithEmail(false); // Reset state when closing the modal
    setAuthMethod(null); // Reset auth method
  };

  const handleGoLogInPage = () => {
    setAuthMethod("sign-in");
    setIsSignUpWithEmail(false);
  };

  return (
    <header
      className={`absolute ${
        window.location.pathname !== "/" ? "bg-white" : "bg-[#FFFFFF33]"
      } top-[18px] left-0 right-0 mx-auto max-w-[1264px] h-[73px] rounded-[21px] flex justify-between items-center px-[22px] z-10`}
    >
      <Link href="/">
        <Image
          src="/assets/images/header-img.png"
          alt="header img"
          width={146}
          height={41}
        />
      </Link>

      <div className="flex items-center gap-7">
        {headerConstants.map((item) => {
          const isActive = item.route === window.location.pathname;

          return (
            <Link
              key={item.route}
              href={item.route}
              className={`${
                isActive ? "text-[#F7A33C]" : "text-[#09121F]"
              } text-sm`}
            >
              {item.text}
            </Link>
          );
        })}
      </div>

      <Button
        className="hover:bg-[#09121F] bg-[#09121F] text-white font-semibold text-sm rounded-[10px]"
        onClick={() => openModal("sign-in")}
      >
        Log in
      </Button>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <div className="flex flex-row">
          <div className="flex-1">
            <div className="flex flex-col py-[44px] px-[60px]">
              <div className="flex flex-col gap-[9px]">
                {authMethod === "sign-up" ? (
                  <>
                    <h2 className="text-[28px] font-bold text-[#09121F]">
                      Sign up
                    </h2>
                    <p className="text-base text-[#09121F]">
                      Already a member?{" "}
                      <span
                        onClick={handleGoLogInPage}
                        className="underline text-[#F7A33C] cursor-pointer"
                      >
                        Log in
                      </span>
                    </p>
                  </>
                ) : (
                  <>
                    <h2 className="text-[28px] font-bold text-[#09121F]">
                      Log in
                    </h2>
                    <p className="text-base text-[#09121F]">
                      Don't have an account?{" "}
                      <span
                        onClick={() => openModal("sign-up")}
                        className="underline text-[#F7A33C] cursor-pointer"
                      >
                        Sign up
                      </span>
                    </p>
                  </>
                )}
              </div>
              {!isSignUpWithEmail ? (
                <>
                  <div className="flex flex-col">
                    <div className="flex flex-col gap-4 mt-16">
                      <Button className="flex items-center gap-[10px] bg-[#1877F2] hover:bg-[#1877F2] rounded-[10px] cursor-pointer">
                        <Image
                          src="/assets/images/registration-facebook.png"
                          alt="img"
                          width={24}
                          height={24}
                        />
                        <p className="font-medium text-white text-base">
                          {authMethod === "sign-up"
                            ? "Sign up with facebook"
                            : "Log in with facebook"}
                        </p>
                      </Button>

                      <span className="text-base text-[#09121F] text-center">
                        Or
                      </span>

                      {authMethod === "sign-up" ? (
                        <Button
                          className="rounded-[10px] font-semibold text-[#09121F] text-base border border-[#747D8A] cursor-pointer py-[10px] px-[18px]"
                          onClick={() => setIsSignUpWithEmail(true)}
                        >
                          Sign up with email
                        </Button>
                      ) : (
                        <LogInForm />
                      )}
                    </div>
                  </div>
                  <p className="mt-[60px] text-[13px] text-[#00000040] text-center">
                    By continuing, you accept our{" "}
                    <span className="text-[#09121F] underline">
                      Privacy Policy
                    </span>
                  </p>
                </>
              ) : (
                <SignUpWithEmailForm />
              )}
            </div>
          </div>
          <Image
            src="/assets/images/registration-modal.png"
            alt="img"
            width={232}
            height={517}
            className="max-w-[232px] max-h-[517px]"
          />
        </div>
      </Modal>
    </header>
  );
};

export default HeaderComponent;
