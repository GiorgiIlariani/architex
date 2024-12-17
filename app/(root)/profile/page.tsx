import Image from "next/image";
import React from "react";

const Profile = () => {
  let result = [];

  return (
    <div className="flex-1 min-h-screen">
      <h1 className="text-[#09121F] text-[45px] font-bold pt-[41px]">Home</h1>

      {/* map over the result */}
      {result.length === 0 ? (
        <div className="flex flex-1 min-h-[50vh] flex-col justify-center items-center gap-8">
          <Image
            src="/assets/images/no-result.png"
            alt="no result"
            width={28}
            height={28}
          />

          <span className="text-[#09121F] font-bold text-[25px] text-center">
            No Results Found
          </span>
        </div>
      ) : (
        <div>Result</div>
      )}
    </div>
  );
};

export default Profile;
