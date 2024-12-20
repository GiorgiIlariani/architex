"use client";

import { profileLeftSidebarConstants } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Separator } from "../ui/separator";
import { usePathname } from "next/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const ProfileLeftSidebar = () => {
  const pathname = usePathname();
  return (
    <>
      {/* <h1 className="md:hidden block text-[#09121F] text-[40px] font-bold pb-8 text-center">
        Home
      </h1> */}
      <div className="flex md:hidden max-w-full snap-x snap-mandatory space-x-3 overflow-x-auto justify-start sm:justify-center no-scrollbar w-full">
        <Swiper
          mousewheel
          direction="horizontal"
          pagination={false}
          className="categories"
          spaceBetween={18}
          slidesPerView="auto"
        >
          {profileLeftSidebarConstants.map((link) => {
            const isActive = link.route === pathname;

            return (
              <SwiperSlide key={link.route} style={{ width: "auto" }}>
                <Link
                  href={link.route}
                  className={`shrink-0 snap-start py-[11px] px-[12px]  text-base flex items-center gap-[10px] rounded-[10px] ${
                    isActive ? "bg-[#F7A33C]" : "bg-white"
                  }`}
                >
                  <Image
                    src={link.img}
                    alt={link.text}
                    width={24}
                    height={24}
                  />
                  {link.text}
                </Link>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>

      <aside className="hidden md:block w-[334px] min-h-screen max-h-screen rounded-[21px] p-[14px] lg:p-[22px] bg-[#FFFFFF99]">
        <div className="h-full rounded-[19px] bg-white px-[10px] lg:px-[14px] pt-[18px]">
          {/* User Profile Section */}
          <div className="flex items-center gap-3">
            <div className="rounded-full bg-[#D9D9D9] text-[28px] w-14 h-14 flex items-center justify-center">
              G
            </div>
            <div className="flex flex-col">
              <h4 className="text-lg text-[#09121F] font-bold">
                Giorgi Ilariani
              </h4>
              <p className="text-[#747D8A] font-medium text-[13px]">
                george.johnes@gmail.com
              </p>
            </div>
          </div>

          <Separator className="border border-[#E9EBF0] mt-4 mb-7" />

          {/* Categories Section */}
          <div className="flex flex-col gap-3">
            {profileLeftSidebarConstants.map((link) => {
              const isActive = link.route === pathname;

              return (
                <Link
                  key={link.route}
                  href={link.route}
                  className={`w-full py-[11px] px-[12px] text-base flex items-center gap-[10px] rounded-[10px] ${
                    isActive && "bg-[#F7A33C]"
                  }`}
                >
                  <Image
                    src={link.img}
                    alt={link.text}
                    width={24}
                    height={24}
                  />
                  {link.text}
                </Link>
              );
            })}
          </div>
        </div>
      </aside>
    </>
  );
};

export default ProfileLeftSidebar;
