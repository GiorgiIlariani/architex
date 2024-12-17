"use client";

import { profileLeftSidebarConstants } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Separator } from "../ui/separator";
import { usePathname } from "next/navigation";

const ProfileLeftSidebar = () => {
  const pathname = usePathname();

  return (
    <aside className="w-[334px] min-h-screen max-h-screen rounded-[21px] p-[22px] bg-[#FFFFFF99]">
      <div className="h-full rounded-[19px] bg-white px-[14px] pt-[18px]">
        {/* user */}
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
                <Image src={link.img} alt={link.text} width={24} height={24} />
                {link.text}
              </Link>
            );
          })}
        </div>
      </div>
    </aside>
  );
};

export default ProfileLeftSidebar;
