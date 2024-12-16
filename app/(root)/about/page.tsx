import Image from "next/image";
import React from "react";

const AboutPage = () => {
  return (
    <>
      <section className="w-full bg-[#E9EBF0] pb-[114px] rounded-b-[63px]">
        <div className="max-w-[603px] pt-[156px] mx-auto  z-20 text-center">
          <h1 className="text-[57px] font-bold text-[#09121F]">
            Welcome to - Architex.land
          </h1>
          <p className="text-base text-[#09121F]">
            Your ultimate resource for architects, studios, and landowners.
          </p>
        </div>

        <Image
          src=""
          alt="about img"
          width={1070}
          height={604}
          className="rounded-[43px]"
        />
      </section>
    </>
  );
};

export default AboutPage;
