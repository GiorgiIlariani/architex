"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useState } from "react";
import { faqsConstants } from "@/constants";

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
    <section className="w-full bg-[#E9EBF0] pb-[125px] rounded-b-[63px]">
      <h1 className="text-[#09121F] font-bold text-[57px] pt-[156px] text-center">
        FAQs
      </h1>

      <div className="max-w-[438px] mx-auto relative mt-[50px]">
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

      {submittedTerm && (
        <div className="flex justify-center mt-4">
          <div className="inline-flex items-center bg-[#09121F] text-white px-4 py-2 rounded-[13px]">
            <p className="text-base">{submittedTerm}</p>
            <button
              onClick={clearSearch}
              className="ml-2 text-white text-xl font-bold cursor-pointer"
            >
              &times;
            </button>
          </div>
        </div>
      )}

      <div className="max-w-[1070px] mx-auto mt-[60px] flex flex-col gap-[22px]">
        {faqsConstants.map((faq, index) => (
          <div
            key={index}
            className="w-full bg-[#FFFFFF99] rounded-[21px] p-[22px]"
          >
            <div
              className="bg-white flex items-center justify-between gap-4 p-[25px] rounded-[19px] cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <h3 className="text-[25px] text-[#09121F] font-bold flex-1">
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
        ))}
      </div>
    </section>
  );
};

export default FAQsPage;
