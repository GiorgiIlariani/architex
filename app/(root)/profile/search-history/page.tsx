"use client";

import { searchHistoryConstants } from "@/constants";
import Pagination from "@/components/shared/Pagination";
import React, { useState } from "react";

const PAGE_SIZE = 10;

const SearchHistoryPage = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(searchHistoryConstants.length / PAGE_SIZE);

  const startIndex = (currentPage - 1) * PAGE_SIZE;
  const currentData = searchHistoryConstants.slice(
    startIndex,
    startIndex + PAGE_SIZE
  );

  const handlePrevious = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <div className="flex-1 min-h-screen">
      <h1 className="text-[#09121F] text-[45px] font-bold pt-[41px]">
        Search History
      </h1>

      {searchHistoryConstants.length === 0 ? (
        <div className="flex flex-1 min-h-[50vh] flex-col justify-center items-center gap-8">
          <span className="text-[#09121F] font-bold text-[25px] text-center">
            No Search History Found
          </span>
        </div>
      ) : (
        <>
          <div className="mt-8 bg-white rounded-[19px]">
            <div className="w-full py-[18px] px-10">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-300">
                    <th className="p-4 text-left">Date</th>
                    <th className="p-4 text-left">Address</th>
                  </tr>
                </thead>
                <tbody>
                  {currentData.map((entry, index) => (
                    <tr
                      key={index}
                      className={`${
                        index !== currentData.length - 1
                          ? "border-b border-gray-300"
                          : ""
                      }`}
                    >
                      <td className="p-5">{entry.date}</td>
                      <td className="p-5">
                        <span className="bg-[#E6E6E6] p-[6px] rounded-[5px]">
                          {entry.address}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPrevious={handlePrevious}
            onNext={handleNext}
          />
        </>
      )}
    </div>
  );
};

export default SearchHistoryPage;
