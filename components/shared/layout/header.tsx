import { Button } from "@/components/ui/button";
import { headerConstants } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const HeaderComponent = () => {
  return (
    <header className="absolute top-[18px] left-0 right-0 mx-auto max-w-[1264px] bg-[#FFFFFF33] h-[73px] rounded-[21px] flex justify-between items-center px-[22px] z-10">
      <Image
        src="/assets/images/header-img.png"
        alt="header img"
        width={146}
        height={41}
      />

      <div className="flex items-center gap-7">
        {headerConstants.map((item) => (
          <Link
            key={item.route}
            href={item.route}
            className="text-[#09121F] text-sm"
          >
            {item.text}
          </Link>
        ))}
      </div>

      <Button className="bg-[#09121F] text-white font-semibold text-sm rounded-[10px]">
        Log in
      </Button>
    </header>
  );
};

export default HeaderComponent;
