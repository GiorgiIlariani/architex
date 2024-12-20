"use client";

import Image from "next/image";
import React, { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Tab, Tabs, TabList } from "react-tabs";
import { IoCloseOutline } from "react-icons/io5";
import { Separator } from "../ui/separator";

const SearchByLand = ({ searchResultPage }: { searchResultPage: boolean }) => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedTabIndex, setSelectedTabIndex] = useState<number>(0); // Initial tab is 0 (Coordinates)

  const handleSearch = () => {};

  const handleClear = () => {
    setSearchTerm("");
  };

  const tabs = ["Coordinator", "Address", "MLS Code", "Google map link"];

  return (
    <div
      className={`bg:backdrop-blur-[30px] absolute ${
        searchResultPage
          ? "top-[156px] bg-transparent"
          : "top-[448px] bg-[#FFFFFFB2]"
      } left-1/2 transform -translate-x-1/2 flex flex-col gap-[12px] w-[343px] sm:w-[546px] px-3 sm:px-[44px] py-6 sm:py-[32px] rounded-[19px]`}
    >
      <h2 className="font-bold text-[28px] self-center">Search by land</h2>

      <form>
        <Tabs
          selectedIndex={selectedTabIndex}
          onSelect={(e) => setSelectedTabIndex(e)}
        >
          <TabList className="flex justify-between items-center sm:justify-start sm:gap-[14px] text-[13px] font-semibold mb-[20px]">
            {tabs.map((tab, index) => (
              <Tab
                className={`relative cursor-pointer ${
                  index === selectedTabIndex
                    ? "text-[#09121F] before:content-[''] before:block before:w-full before:h-[2px] rounded-[1px] before:bg-[#09121F] before:absolute before:left-0 before:bottom-0 before:mt-1"
                    : "text-[#00000040]"
                }`}
                key={tab}
              >
                {tab}
              </Tab>
            ))}
          </TabList>
        </Tabs>

        <div className="max-w-[458px] relative">
          <Image
            src="/assets/images/search-line.png"
            alt="search icon"
            width={32}
            height={32}
            className="absolute left-[14px] top-1"
          />
          <Input
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="bg-white rounded-[13px] text-[#09121F] placeholder:text-[#747D8A] px-[60px] py-5 text-base border-white pr-[120px]"
          />

          {/* Close Icon */}
          {searchResultPage && searchTerm && (
            <>
              <div className="absolute right-[110px] top-1/2 transform -translate-y-1/2 border-r border-[#E9EBF0] mr-[18px] pr-2">
                <IoCloseOutline
                  className="text-[#00000040] cursor-pointer text-2xl"
                  onClick={handleClear}
                />
              </div>
            </>
          )}

          <Button
            onClick={handleSearch}
            className="w-[98px] top-[2px] bg-[#09121F] absolute right-[6px] text-white font-semibold text-sm rounded-[10px] hover:bg-[#09121F]"
          >
            Search
          </Button>
        </div>
      </form>

      <p className="text-[13px]">
        <b className="font-semibold">Correct:</b> 41.40338, 2.17403
      </p>
    </div>
  );
};

export default SearchByLand;
