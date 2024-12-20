"use client";

import { testimonyConstans } from "@/constants";
import Image from "next/image";
import React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Testimonies = () => {
  return (
    <>
      <h3 className="text-[28px] xl:text-[45px] text-[#09121F] font-bold mr-[54px] xl:mr-0 lg:max-w-[350px] h-max">
        Read testimony from our users
      </h3>

      <Carousel
        opts={{
          align: "start",
        }}
        className="static w-full lg:w-4/6 h-max mt-[35px] lg:my-0"
      >
        <CarouselContent className="lg:ml-0">
          {testimonyConstans.map((testimony) => (
            <CarouselItem key={testimony.id} className=" basis-auto">
              <Card className="w-[302px] lg:w-[410px] bg-[#FFFFFF99] bg:backdrop-blur-[20px] rounded-[21px] p-[14px] shadow-none">
                <CardContent className="bg-[#FFFFFF] rounded-[19px] px-[16px] lg:px-[25px] py-[18px] lg:pt-[25px] lg:pb-[61px]">
                  <h4 className="text-[20px] font-bold mb-2">
                    {testimony.title}
                  </h4>
                  <p className="text-[14px] font-[400]">{testimony.details}</p>
                </CardContent>

                <div className="flex items-center gap-[16px] mt-[22px]">
                  <Image
                    src={testimony.img}
                    height={45}
                    width={45}
                    alt="profile image"
                  />

                  <p className="font-semibold text-[13px]">
                    {testimony.fullName}{" "}
                    <span className="font-normal">{testimony.proffession}</span>
                  </p>
                </div>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>

        <div className="absolute bottom-20 lg:top-[235px] left-16 lg:left-[235px]">
          <CarouselPrevious className="border-none w-[48px] h-[48px] bg-[#FFFFFF] rounded-[13px]" />
          <CarouselNext className="border-none w-[48px] h-[48px] bg-[#FFFFFF] rounded-[13px] -right-[68px]" />
        </div>
      </Carousel>
    </>
  );
};

export default Testimonies;
