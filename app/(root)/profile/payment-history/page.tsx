"use client";

import { paymentHistoryConstants } from "@/constants";
import Pagination from "@/components/shared/Pagination";
import React, { useState } from "react";

const PAGE_SIZE = 5;

const PaymentHistoryPage = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(paymentHistoryConstants.length / PAGE_SIZE);

  const startIndex = (currentPage - 1) * PAGE_SIZE;
  const currentData = paymentHistoryConstants.slice(
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
        Payment History
      </h1>

      {paymentHistoryConstants.length === 0 ? (
        <div className="flex flex-1 min-h-[50vh] flex-col justify-center items-center gap-8">
          <span className="text-[#09121F] font-bold text-[25px] text-center">
            No Payment History Found
          </span>
        </div>
      ) : (
        <>
          <div className="flex flex-col gap-4 mt-8">
            {currentData.map((payment) => (
              <div
                className="w-full bg-white rounded-[19px] py-5 px-6 flex items-center justify-between"
                key={payment.id}
              >
                <div className="max-w-[160px] flex flex-col gap-[14px]">
                  <div className="w-full flex items-center gap-3">
                    <span className="text-[25px] text-[#09121F] font-bold">
                      {payment.price}₾
                    </span>
                    <div className="bg-[#489004] rounded-[14px] text-white py-2 px-[13px]">
                      {payment.isSuccessful ? "Successful" : "Not Successful"}
                    </div>
                  </div>
                  <div className="w-full flex items-center gap-6">
                    <span className="text-[#09121F] text-base">
                      {payment.date}
                    </span>
                    <p className="text-[#09121F] text-base">{payment.type}</p>
                  </div>
                </div>
                <span className="text-[#09121F] font-medium text-base underline cursor-pointer">
                  Invoice
                </span>
              </div>
            ))}
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

export default PaymentHistoryPage;
