import { headerConstants } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const FooterComponent = () => {
  return (
    <footer className="w-full h-[356px] flex flex-col gap-[55px] md:gap-0 md:flex-row pl-4 lg:pl-[88px] pr-4 lg:pt-[80px] md:pr-20 lg:pr-[183px] pt-9">
      <div className="flex flex-col gap-20 pr-[143px]">
        <div className="flex flex-col gap-[34px]">
          <Image
            src="/assets/images/header-img.png"
            alt="header img"
            width={264}
            height={74}
          />
          <div className="flex items-center gap-4">
            <Image
              src="/assets/images/facebook.png"
              alt="facebook"
              width={48}
              height={48}
            />
            <Image
              src="/assets/images/linkedIn.png"
              alt="linkedIn"
              width={48}
              height={48}
            />
            <Image
              src="/assets/images/instagram.png"
              alt="instagram"
              width={48}
              height={48}
            />
          </div>
        </div>

        <p className="text-[13px] text-[#F7A33C] hidden md:block">
          Copyright © 2024, All Rights Reserved *{" "}
          <Link href="/">Privacy and Cookie Policy</Link>
        </p>
      </div>

      <div className="flex justify-between">
        <div className="flex flex-col gap-[15px] pr-10 md:pr-20 lg:pr-[204px]">
          {headerConstants.map((item) => (
            <Link
              key={item.route}
              href={item.route}
              className="text-white text-base"
            >
              {item.text}
            </Link>
          ))}
        </div>

        <div className="flex flex-col gap-[14px] max-w-[308px]">
          <h5 className="text-[#F7A33C] text-[25px]">
            Need help or <br className="block md:hidden" /> have a question?
          </h5>
          <p className="text-base text-white">
            Contact us at <br className="block md:hidden" />
            <Link href="contact-us" className="text-[#F7A33C]">
              contact@architexai.com
            </Link>
          </p>
        </div>
      </div>
      <p className="block md:hidden text-[13px] text-[#F7A33C]">
        Copyright © 2024, All Rights Reserved *{" "}
        <Link href="/">Privacy and Cookie Policy</Link>
      </p>
    </footer>
  );
};

export default FooterComponent;
