"use client";

import { useState } from "react";
import HomeCard from "@/components/shared/HomeCard";
import { testimonyConstans } from "@/constants";
import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

const HomePage = () => {
  const [currentTestimonyIndex, setCurrentTestimonyIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentTestimonyIndex((prevIndex) =>
      prevIndex === 0 ? testimonyConstans.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentTestimonyIndex((prevIndex) =>
      prevIndex === testimonyConstans.length - 1 ? 0 : prevIndex + 1
    );
  };

  const isPrevDisabled = currentTestimonyIndex === 0;
  const isNextDisabled = currentTestimonyIndex === testimonyConstans.length - 1;

  return (
    <>
      <section className="w-full relative bg-[#E9EBF0] pb-[114px] rounded-b-[63px]">
        <Image
          src="/assets/images/home-img.png"
          alt="home page"
          width={1440}
          height={782}
          className="w-full h-[782px] object-cover rounded-b-[63px]"
        />

        <div className="max-w-[603px] absolute top-[156px] left-0 right-0 mx-auto text-center">
          <h1 className="text-[40px] lg:text-[57px] font-bold text-white">
            Welcome to - Architex.land
          </h1>
          <p className="text-sm lg:text-base text-white max-w-[300px] mx-auto">
            Your ultimate resource for architects, studios, and landowners.
          </p>
        </div>

        <div className="max-w-[1070px] mx-auto mt-[125px] flex flex-col gap-9 lg:gap-[45px]">
          <div className="flex flex-col gap-[10px]">
            <h3 className="text-[28px] text-[#09121F] font-bold md:text-[45px] text-center">
              What you get
            </h3>
            <p className="text-sm md:text-base md:font-medium text-[#09121F] text-center">
              Download quality assets and templates from global artists, with
              one great-value subscription.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-10 xl:gap-[70px] px-4">
            <HomeCard
              image="/assets/images/file-info-line.png"
              text="Detailed insights on the specific building regulations for the land"
              title="Regulatory information"
            />
            <HomeCard
              image="/assets/images/shape-2-line.png"
              text="Accurate land measurements, including shape, form, and size in both square feet and square meters."
              title="Land Dimensions"
            />
            <HomeCard
              image="/assets/images/message-2-line.png"
              text="Detailed insights on the specific building regulations for the land"
              title="Development Recommendations"
            />
            <HomeCard
              image="/assets/images/road-map-line.png"
              text="View the exact location of the plot with an interactive map feature."
              title="Google Map"
            />
          </div>
        </div>
      </section>

      <section className="w-full py-20">
        <div className="max-w-[1070px] mx-auto flex flex-col gap-[25px] px-4">
          <h3 className="text-white font-bold lg:text-[45px] text-[28px]">
            Our Partners
          </h3>
          <div className="flex flex-col lg:flex-row items-center gap-[25px]">
            <Image
              src="/assets/images/partner-img-1.png"
              alt="partner"
              width={340}
              height={169}
            />
            <Image
              src="/assets/images/partner-img-2.png"
              alt="partner"
              width={340}
              height={169}
            />
            <Image
              src="/assets/images/partner-img-3.png"
              alt="partner"
              width={340}
              height={169}
            />
          </div>
        </div>
      </section>

      <section className="w-full bg-[#E9EBF0] rounded-[63px] h-[628px] pl-[185px] pt-[144px] pb-[206px]">
        <div className="w-full flex gap-[70px]">
          <div className="flex flex-col items-start justify-between">
            <h3 className="text-[45px] text-[#09121F] font-bold">
              Read testimony <br /> from our users
            </h3>

            {/* Left and Right icons for scrolling */}
            <div className="flex gap-4 mt-4">
              <div
                className={`bg-[#FFFFFF99] rounded-[13px] p-3 ${
                  isPrevDisabled ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                <IoIosArrowBack
                  onClick={handlePrevClick}
                  size={24}
                  className={`cursor-pointer text-[#09121F] text-[30px] ${
                    isPrevDisabled ? "cursor-not-allowed" : ""
                  }`}
                />
              </div>
              <div
                className={`bg-[#FFFFFF99] rounded-[13px] p-3 ${
                  isNextDisabled ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                <IoIosArrowForward
                  onClick={handleNextClick}
                  size={24}
                  className={`cursor-pointer text-[#09121F] text-[30px] ${
                    isNextDisabled ? "cursor-not-allowed" : ""
                  }`}
                />
              </div>
            </div>
          </div>

          {/* Scrollable container for testimonies */}
          <div className="flex gap-[55px] overflow-x-auto scroll-smooth">
            {testimonyConstans
              .slice(currentTestimonyIndex, currentTestimonyIndex + 2)
              .map((testimony) => {
                return (
                  <div
                    className="max-w-[410px] bg-[#FFFFFF99] rounded-[21px] p-[14px] md:p-[22px]"
                    key={testimony.id}
                  >
                    <div className="bg-white items-center gap-4 p-[25px] rounded-[19px]">
                      <h4 className="text-[#09121F] text-[25px] font-bold">
                        {testimony.title}
                      </h4>
                      <p className="mt-2 text-[#09121F] text-sm text-wrap">
                        {testimony.details}
                      </p>
                    </div>

                    <div className="mt-[22px] flex items-center w-full gap-4">
                      <Image
                        src={testimony.img}
                        alt={testimony.title}
                        width={45}
                        height={45}
                      />
                      <p className="font-semibold text-[13px]">
                        {testimony.fullName}{" "}
                        <span className="font-normal">
                          {testimony.proffession}
                        </span>
                      </p>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
