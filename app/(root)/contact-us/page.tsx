import { ProfileForm } from "@/components/forms/ContactForm";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const ContactUsPage = () => {
  return (
    <section className="w-full bg-[#E9EBF0] pb-[125px] rounded-b-[63px]">
      <div className="max-w-[1170px] pt-[156px] mx-auto flex items-start gap-[219px]">
        <div className="flex flex-col gap-[10px]">
          <h2 className="text-[#09121F] text-[45px] font-bold">Contact Us</h2>
          <p className="text-base font-medium text-[#09121F]">
            Download quality assets and templates from global artists, with one
            great-value subscription.
          </p>
        </div>

        <div className="w-full flex flex-col items-end gap-[29px]">
          <div className="w-full bg-[#FFFFFF99] rounded-[21px] p-[22px]">
            <div className="bg-white flex items-center gap-4 p-[25px] rounded-[19px]">
              <Image
                src="/assets/images/mail-line.png"
                alt="mail"
                width={32}
                height={32}
              />
              <strong className="text-[25px] font-bold text-[#09121F]">
                contact@architexai.com
              </strong>
            </div>
          </div>
          <div className="w-full bg-[#FFFFFF99] rounded-[21px] p-[22px]">
            <ProfileForm />
          </div>
          <Button
            type="submit"
            form="contact-form"
            className="bg-[#09121F] text-white font-semibold text-sm rounded-[10px] hover:bg-[#09121F]"
          >
            Select
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactUsPage;
