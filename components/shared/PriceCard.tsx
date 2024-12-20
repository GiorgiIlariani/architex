"use client";

import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import Image from "next/image";
import { DialogLayout } from "./Dialog";
import Link from "next/link";
import { DialogHeader, DialogTitle, DialogDescription } from "../ui/dialog";

const PriceCard = () => {
  return (
    <div className="w-full bg-[#FFFFFF99] rounded-[21px] p-[15px] lg:p-[22px]">
      <div className="bg-white flex flex-col items-start justify-between gap-4 p-5 rounded-[19px]">
        <span className="rounded-[10px] p-[10px] bg-[#F7A33C] text-p[#09121F">
          Basic
        </span>
        <p className="mt-[14px] text-sm text-[#09121F]">
          View the exact location of the plot with an interactive map feature.
        </p>
        <p className="text-[#09121F] text-sm">
          <span className="font-bold text-[25px] ">$10</span> /Month
        </p>
        {/* <Button className="w-full bg-[#09121F] text-white font-semibold text-sm rounded-[10px] hover:bg-[#09121F]">
          Select
        </Button> */}
        <DialogLayout
          trigger={
            <Button className="w-full bg-[#E10C0C] text-white font-semibold text-sm rounded-[10px] hover:bg-[#E10C0C]">
              Cancel
            </Button>
          }
          content={
            <div className="flex flex-col gap-[28px] items-center">
              <DialogHeader className="flex flex-col gap-[18px]">
                <DialogTitle className="text-xl text-[#09121F] font-bold text-center">
                  Cancelation Confirmed
                </DialogTitle>
                <DialogDescription className="text-sm text-center text-[#747D8A]">
                  You won’t billed again.
                </DialogDescription>
              </DialogHeader>

              <Link href="/profile/home">
                <Button className="bg-[#09121F] text-white font-semibold text-sm rounded-[10px] hover:bg-[#09121F]">
                  Go Home
                </Button>
              </Link>
            </div>
          }
          onConfirm={() => {}}
        />

        <Separator className="w-full my-5 border border-[#F7A33C]" />

        <div className="flex flex-col gap-[15px]">
          <div className="flex items-center gap-[10px]">
            <Image
              src="/assets/images/tick.png"
              alt="tick"
              width={24}
              height={24}
            />

            <p className="text-base text-[#09121F] font-medium">Text</p>
          </div>
          <div className="flex items-center gap-[10px]">
            <Image
              src="/assets/images/tick.png"
              alt="tick"
              width={24}
              height={24}
            />

            <p className="text-base text-[#09121F] font-medium">Text</p>
          </div>
          <div className="flex items-center gap-[10px]">
            <Image
              src="/assets/images/tick.png"
              alt="tick"
              width={24}
              height={24}
            />

            <p className="text-base text-[#09121F] font-medium">Text</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceCard;
