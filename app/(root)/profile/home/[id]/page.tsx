import ProfileResultCard from "@/components/shared/ProfileResultCard";
import { profileHomeResultConstants } from "@/constants";
import Link from "next/link";
import React from "react";
import { IoArrowBackOutline } from "react-icons/io5";

const HomeResultPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;

  const card = profileHomeResultConstants.filter(
    (item) => item.id !== Number(id)
  );

  return (
    <div className="w-full">
      <h1 className="hidden md:block text-[#09121F] text-[45px] font-bold">
        Home
      </h1>

      <div className="flex flex-col items-center md:items-start md:flex-row gap-8 lg:gap-[49px] mt-8">
        <div className="w-full md:w-auto">
          <Link
            href="/profile/home"
            className="pt-7 flex items-center gap-[10px] h-8 self-start"
          >
            <IoArrowBackOutline size={28} />
            <span className="text-[#09121F] font-medium text-base">Back</span>
          </Link>
        </div>

        <ProfileResultCard
          searchResultPage={false}
          {...card[0]}
          showAllLabels={true}
        />
      </div>
    </div>
  );
};

export default HomeResultPage;
