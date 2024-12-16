"use client";

import { Button } from "@/components/ui/button";
import { headerConstants } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const HeaderComponent = () => {
  const pathname = usePathname();

  return (
    <header
      className={`absolute ${
        pathname !== "/" ? "bg-white" : "bg-[#FFFFFF33]"
      } top-[18px] left-0 right-0 mx-auto max-w-[1264px]  h-[73px] rounded-[21px] flex justify-between items-center px-[22px] z-10`}
    >
      <Link href="/">
        <Image
          src="/assets/images/header-img.png"
          alt="header img"
          width={146}
          height={41}
        />
      </Link>

      <div className="flex items-center gap-7">
        {headerConstants.map((item) => {
          const isActive = item.route === pathname;

          return (
            <Link
              key={item.route}
              href={item.route}
              className={`${isActive ? "#F7A33C" : "text-[#09121F]"} text-sm`}
            >
              {item.text}
            </Link>
          );
        })}
      </div>

      <Button className="hover:bg-[#09121F] bg-[#09121F] text-white font-semibold text-sm rounded-[10px]">
        Log in
      </Button>
    </header>
  );
};

export default HeaderComponent;
