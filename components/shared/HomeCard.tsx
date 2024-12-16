import Image from "next/image";
import React from "react";

const HomeCard = ({ image, title, text }: HomeCardTypes) => {
  return (
    <div className="flex-1 bg-white h-[175px] p-[22px] rounded-[21px]">
      <div className="flex flex-col gap-2 p-[25px]">
        <div className="flex items-center gap-4">
          <Image src={image} alt="title" width={32} height={32} />
          <h4 className="text-[25px] font-bold text-[#09121F]">{title}</h4>
        </div>
        <p className="text-[#09121F] text-sm">{text}</p>
      </div>
    </div>
  );
};

export default HomeCard;
