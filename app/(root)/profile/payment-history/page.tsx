import { paymentHistoryConstants } from "@/constants";
import React from "react";

const PaymentHistoryPage = () => {
  return (
    <div className="flex-1 min-h-screen">
      <h1 className="text-[#09121F] text-[45px] font-bold pt-[41px]">
        Payment History
      </h1>

      <div className="flex flex-col gap-4 mt-8">
        {paymentHistoryConstants.map((payment) => {
          return (
            <div
              className="w-full bg-white rounded-[19px] py-5 px-6 flex items-center justify-between "
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
          );
        })}
      </div>
    </div>
  );
};

export default PaymentHistoryPage;
