"use client";

import { testimonyConstans } from "@/constants";
import Image from "next/image";
import React, { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Testimonies = () => {
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
                    <span className="font-normal">{testimony.proffession}</span>
                  </p>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Testimonies;
