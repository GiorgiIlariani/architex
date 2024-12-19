import ProfileResultCard from "@/components/shared/ProfileResultCard";
import { Separator } from "@/components/ui/separator";
import { profileHomeResultConstants } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Profile = () => {
  let result = profileHomeResultConstants;

  return (
    <div className="flex-1 min-h-screen">
      <h1 className="hidden md:block text-[#09121F] text-[45px] font-bold pt-[41px]">
        Home
      </h1>

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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 rounded-[14px] mt-8">
          {result.map((res) => {
            return <ProfileResultCard key={res.id} {...res} />;
          })}
        </div>
      )}
    </div>
  );
};

export default Profile;
