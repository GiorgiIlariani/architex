import PriceCard from "@/components/shared/PriceCard";
import { Button } from "@/components/ui/button";
import React from "react";

const PricingPage = () => {
  return (
    <section className="w-full bg-[#E9EBF0] pb-[125px] rounded-b-[63px]">
      <div className="flex flex-col items-center gap-3 px-4">
        <h1 className="text-[#09121F] font-bold text-[40px] md:text-[57px] pt-[100px] md:pt-[156px] text-center">
          Choose your plan
        </h1>
        <p className="text-base text-[#09121F] text-center">
          Your ultimate resource for architects,{" "}
          <br className="hidden md:block" /> studios, and landowners.
        </p>

        <div className="flex items-center gap-2">
          <span className="text-[#09121F] font-medium">Monthly</span>
          <label className="relative inline-flex cursor-pointer items-center">
            <input id="switch" type="checkbox" className="peer sr-only" />
            <div className="peer h-7 w-14 rounded-full border bg-slate-200 p-1 after:absolute after:left-[4px] after:top-[4px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-transform after:content-[''] peer-checked:bg-slate-800 peer-checked:after:translate-x-7 peer-checked:after:border-white"></div>
          </label>
          <span className="text-[#09121F] font-medium">Yearly</span>
        </div>
      </div>

      <div className="mt-14 md:mt-6 grid grid-cols-1 xs:grid-cols-2 md:flex md:flex-row gap-4 xs:gap-6 lg:gap-[68px] max-w-[1070px] mx-auto px-8 xs:px-6 md:px-4">
        <PriceCard />
        <PriceCard />
        <PriceCard />
      </div>

      <div className="mt-[100px] md:mt-[179px] flex flex-col md:flex-row gap-10 md:gap-0 justify-between items-center max-w-[1070px] mx-auto px-4">
        <h3 className="text-[32px] md:text-[45px] font-bold text-[#09121F] text-center md:text-left">
          Or pay per <br className="block xs:hidden" /> LookUp
        </h3>

        <div className="flex flex-col gap-6 items-center md:items-start">
          <p className="text-base font-medium text-[#09121F] text-center md:text-left">
            Add and save it in the history for free{" "}
            <br className="hidden md:block" /> research later
          </p>
          <Button className="bg-[#09121F] text-white font-semibold text-sm rounded-[10px] hover:bg-[#09121F]">
            Select
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PricingPage;
