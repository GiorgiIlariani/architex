"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useState } from "react";
import { faqsConstants } from "@/constants";
import { Separator } from "@/components/ui/separator";

const FAQsPage = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [submittedTerm, setSubmittedTerm] = useState<string>("");

  const toggleFAQ = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const handleSearch = () => {
    setSubmittedTerm(searchTerm);
  };

  const clearSearch = () => {
    setSubmittedTerm("");
    setSearchTerm("");
  };

  // Function to highlight the searched term
  const highlightText = (text: string, term: string) => {
    if (!term) return text;

    const regex = new RegExp(`(${term})`, "gi");
    const parts = text.split(regex);

    return parts.map((part, index) =>
      part.toLowerCase() === term.toLowerCase() ? (
        <span key={index} className="bg-[#F7A33C]">
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  return (
    <>
      <section className="w-full bg-[#E9EBF0] pb-[125px] rounded-b-[63px]">
        <h1 className="text-[#09121F] font-bold text-[40px] md:text-[57px] pt-[100px] md:pt-[156px] text-center">
          FAQs
        </h1>

        <div className="px-4">
          <div className="max-w-[438px] mx-auto relative mt-[50px] ">
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
              className="bg-white rounded-[13px] text-[#09121F] placeholder:text-[#747D8A] px-[60px] py-5 text-base border-white"
            />
            <Button
              onClick={handleSearch}
              className="w-[98px] top-[2px] bg-[#09121F] absolute right-[6px] text-white font-semibold text-sm rounded-[10px] hover:bg-[#09121F]"
            >
              Search
            </Button>
          </div>
        </div>

        {submittedTerm && (
          <div className="flex justify-center mt-4">
            <div className="inline-flex items-center bg-white  text-white p-[10px] py-1 md:px-4 md:py-2 rounded-[13px]">
              <p className="text-base text-[#09121F]">{submittedTerm}</p>
              <Button
                onClick={clearSearch}
                className="ml-2 text-white text-xl font-bold cursor-pointer bg-[#09121F] hover:bg-[#09121F] rounded-[10px] p-3"
              >
                &times;
              </Button>
            </div>
          </div>
        )}

        <div className="max-w-[1070px] mx-auto mt-[60px] flex flex-col gap-[22px] px-4">
          {faqsConstants.map((faq, index) => (
            <div
              key={index}
              className="w-full bg-[#FFFFFF99] rounded-[21px] p-[15px] md:p-[22px]"
            >
              <div
                className="bg-white flex items-center gap-3 p-[25px] rounded-[19px] cursor-pointer flex-col"
                onClick={() => toggleFAQ(index)}
              >
                <div className="w-full flex gap-4 items-center justify-between">
                  <h3 className="text-[20px] md:text-[25px] text-[#09121F] font-bold flex-1">
                    {highlightText(faq.question, submittedTerm)}
                  </h3>
                  {openIndex === index ? (
                    <IoIosArrowUp size={30} color="#09121F" />
                  ) : (
                    <IoIosArrowDown size={30} color="#09121F" />
                  )}
                </div>

                {openIndex === index && (
                  <p className="mt-4 text-[#09121F] text-base">{faq.answer}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="w-full pt-20 hidden">
        <div className="flex flex-col gap-9 max-w-[1264px] mx-auto w-full justify-center items-center">
          <h2 className="text-[35px] md:text-[45px] font-bold text-white text-center">
            Have more questions?{" "}
          </h2>
          <Button className="bg-white hover:bg-white text-[#000000] py-[10px] px-[18px] text-base font-semibold rounded-[10px]">
            Contact us
          </Button>
        </div>
      </section>
      <Separator className="border border-[#F7A33C] w-full my-20 max-w-[1264px] mx-auto hidden" />
    </>
  );
};

export default FAQsPage;
