import { ContactForm } from "@/components/forms/ContactForm";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const ContactUsPage = () => {
  return (
    <section className="w-full bg-[#E9EBF0] pb-[125px] rounded-b-[63px]">
      <div className="max-w-[1170px] pt-[100px] md:pt-[156px] mx-auto flex flex-col md:flex-row items-center md:items-start justify-between gap-10 px-4">
        <div className="flex flex-col gap-[10px] max-w-[350px] mt-14">
          <h2 className="text-[#09121F] text-[45px] font-bold text-center md:text-left">
            Contact Us
          </h2>
          <p className="text-base font-medium text-[#09121F]">
            Download quality assets and templates from global artists, with one
            great-value subscription.
          </p>
        </div>

        <div className="max-w-[500px] w-full flex flex-col items-end gap-[29px]">
          <div className="w-full bg-[#FFFFFF99] rounded-[21px] p-[14px] md:p-[22px]">
            <div className="bg-white flex items-center gap-4 p-[25px] rounded-[19px]">
              <Image
                src="/assets/images/mail-line.png"
                alt="mail"
                width={32}
                height={32}
              />
              <strong className="text-lg md:text-[25px] font-bold text-[#09121F]">
                contact@architexai.com
              </strong>
            </div>
          </div>

          <div className="w-full bg-[#FFFFFF99] rounded-[21px] p-[14px] md:p-[22px]">
            <ContactForm />
          </div>

          <Button
            type="submit"
            form="contact-form"
            className="bg-[#09121F] text-white font-semibold text-sm rounded-[10px] hover:bg-[#09121F] w-full md:w-auto"
          >
            Send
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactUsPage;
