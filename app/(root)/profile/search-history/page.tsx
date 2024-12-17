import React from "react";

const SearchHistoryPage = () => {
  let searchHistory = [
    { date: "2024/04/01", address: "41.40338, 2.17403" },
    { date: "2024/04/05", address: "41.40338, 2.17403" },
    { date: "2024/04/10", address: "41.40338, 2.17403" },
  ];

  return (
    <div className="flex-1 min-h-screen">
      <h1 className="text-[#09121F] text-[45px] font-bold pt-[41px]">
        Search History
      </h1>

      {searchHistory.length === 0 ? (
        <div className="flex flex-1 min-h-[50vh] flex-col justify-center items-center gap-8">
          <span className="text-[#09121F] font-bold text-[25px] text-center">
            No Search History Found
          </span>
        </div>
      ) : (
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
                {searchHistory.map((entry, index) => (
                  <tr key={index} className="border-b border-gray-300">
                    <td className="p-4">{entry.date}</td>
                    <td className="p-4">
                      <span className="bg-[#E6E6E6] p-[6px]">
                        {entry.address}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchHistoryPage;
