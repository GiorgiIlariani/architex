"use client";

import { Button } from "@/components/ui/button";
import { headerConstants } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Modal from "@/components/shared/RegistrationModal";
import { LogInForm } from "@/components/forms/LogInForm";
import { SignUpWithEmailForm } from "@/components/forms/SignUpWithEmailForm";
import { Input } from "@/components/ui/input";
import { usePathname } from "next/navigation";
import { MdClose } from "react-icons/md";
import LoggedInUser from "./LoggedInUser";
import { GiHamburgerMenu } from "react-icons/gi";

const HeaderComponent = () => {
  const pathname = usePathname();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSignUpWithEmail, setIsSignUpWithEmail] = useState(false);
  const [authMethod, setAuthMethod] = useState<"sign-up" | "sign-in" | null>(
    null
  );
  const [code, setCode] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Simulate authenticated status for showcasing
  const isAuthenticated = false; // Change to `true` to simulate email verification view

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

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

  let user = {
    firstLetterOfName: "G",
  };

  // let user;

  return (
    <>
      <div
        className={`absolute top-[18px] left-4 right-4 mx-auto max-w-[1264px] ${
          pathname !== "/" ? "bg-white" : "bg-[#FFFFFF99]"
        } backdrop-blur-[20px] rounded-[21px] z-10`}
      >
        <header className="h-[73px] flex justify-between items-center px-[22px]">
          <Link href="/">
            <Image
              src="/assets/images/header-img.png"
              alt="header img"
              width={146}
              height={41}
              className="w-[110px] h-[31px] md:w-[146px] md:h-[41px]"
            />
          </Link>

          <div className="items-center gap-7 hidden md:flex">
            {headerConstants.map((item) => {
              const isActive = item.route === pathname;
              return (
                <Link
                  key={item.route}
                  href={item.route}
                  className={`${
                    isActive ? "text-[#F7A33C]" : "text-[#09121F]"
                  } text-sm hover:text-[#F7A33C] transition`}
                >
                  {item.text}
                </Link>
              );
            })}
          </div>

          <div className="flex items-center">
            {user ? (
              <>
                <Image
                  src="/assets/images/search-line.png"
                  alt="search icon"
                  width={32}
                  height={32}
                  className="w-6 h-6 md:8 md:8 cursor-pointer mr-0 md:mr-[13px]"
                />
                <LoggedInUser user={user} />
                <div className="md:hidden flex items-center justify-center">
                  <button onClick={toggleMobileMenu}>
                    {isMobileMenuOpen ? <MdClose /> : <GiHamburgerMenu />}
                  </button>
                </div>
              </>
            ) : (
              <>
                <Button
                  className="hover:bg-[#09121F] bg-[#09121F] text-white font-semibold text-sm rounded-[10px]"
                  onClick={() => openModal("sign-in")}
                >
                  Log in
                </Button>
                <div className="block md:hidden ">
                  <button onClick={toggleMobileMenu}>
                    {isMobileMenuOpen ? <MdClose /> : <GiHamburgerMenu />}
                  </button>
                </div>
              </>
            )}
          </div>
        </header>

        {isMobileMenuOpen && (
          <nav className="rounded-b-[21px] py-4 flex flex-col items-center gap-[14px] md:hidden">
            {headerConstants.map((item) => {
              const isActive = item.route === pathname;
              return (
                <Link
                  key={item.route}
                  href={item.route}
                  className={`${
                    isActive ? "text-[#F7A33C]" : "text-[#09121F]"
                  } text-xl`}
                  onClick={() => setIsMobileMenuOpen(false)} // Close menu on link click
                >
                  {item.text}
                </Link>
              );
            })}
          </nav>
        )}
      </div>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <div className="flex flex-row">
          <div className="flex-1">
            <div className="flex flex-col py-[65px] md:py-[44px] px-[31px] md:px-[60px]">
              <div className="flex flex-col gap-[9px]">
                {isAuthenticated ? (
                  <>
                    <h2 className="text-[28px] font-bold text-[#09121F]">
                      Verify Your Email
                    </h2>
                    <p className="text-base text-[#09121F]">
                      We've sent you a code to verify your email. Check your
                      inbox and continue there.
                    </p>

                    <div className="mt-[51px]">
                      <label htmlFor="code">Enter Code</label>
                      <Input
                        name="code"
                        id="code"
                        className="bg-white h-[45px] text-[#09121F] px-6 py-[18px] text-base border-white focus:border focus:border-[#F7A33C] rounded-[10px] mt-[6px] mb-[17px]"
                        value={code}
                        onChange={(e) => setCode(e.target.value)}
                      />
                      <span className="text-[#00000040] font-medium text-base underline cursor-pointer">
                        Resend
                      </span>

                      <Button className="w-full rounded-[10px] font-semibold text-white text-base bg-[#09121F] hover:bg-[#09121F] cursor-pointer py-[10px] px-[18px] mt-[132px]">
                        Verify
                      </Button>
                    </div>
                  </>
                ) : authMethod === "sign-up" ? (
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

              {!isSignUpWithEmail && !isAuthenticated ? (
                <>
                  <div className="flex flex-col">
                    <div className="flex flex-col gap-4 mt-16">
                      {/* <Button className="flex items-center gap-[10px] bg-[#1877F2] hover:bg-[#1877F2] rounded-[10px] cursor-pointer text-white">
                        <Image
                          src="/assets/images/registration-facebook.png"
                          alt="facebook login"
                          width={24}
                          height={24}
                        />
                        <p className="font-medium text-white text-base">
                          {authMethod === "sign-up"
                            ? "Sign up with Facebook"
                            : "Log in with Facebook"}
                        </p>
                      </Button> */}

                      <Button className="flex items-center gap-[10px] bg-[#E9EBF0] hover:bg-[#E9EBF0] rounded-[10px] cursor-pointer">
                        <Image
                          src="/assets/images/registration-google.png"
                          alt="google login"
                          width={24}
                          height={24}
                        />
                        <p className="font-medium text-[#09121F] text-base">
                          {authMethod === "sign-up"
                            ? "Sign up with Google"
                            : "Log in with Google"}
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
                  {authMethod === "sign-up" && (
                    <p className="mt-[60px] text-[13px] text-[#00000040] text-center">
                      By continuing, you accept our{" "}
                      <span className="text-[#09121F] underline">
                        Privacy Policy
                      </span>
                    </p>
                  )}
                </>
              ) : isSignUpWithEmail ? (
                <SignUpWithEmailForm />
              ) : null}
            </div>
          </div>

          <div className="hidden sm:block">
            <Image
              src="/assets/images/registration-modal.png"
              alt="registration modal"
              width={232}
              height={517}
              className="max-w-[232px] max-h-[517px]"
            />
          </div>
        </div>
      </Modal>
    </>
  );
};

export default HeaderComponent;
