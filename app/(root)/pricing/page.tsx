import PriceCard from "@/components/shared/PriceCard";
import React from "react";

const PricingPage = () => {
  return (
    <section className="w-full bg-[#E9EBF0] pb-[125px] rounded-b-[63px]">
      <div className="flex flex-col items-center gap-3">
        <h1 className="text-[#09121F] font-bold text-[57px] pt-[156px] text-center">
          Choose you plan
        </h1>
        <p className="text-base text-[#09121F] text-center">
          Your ultimate resource for architects, <br /> studios, and landowners.
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

      <div className="mt-6 flex gap-[68px]  max-w-[1070px] mx-auto">
        <PriceCard />
        <PriceCard />
        <PriceCard />
      </div>
    </section>
  );
};

export default PricingPage;
