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
    <div className="">
      <h1 className="hidden md:block text-[#09121F] text-[45px] font-bold">
        Home
      </h1>
      <div className="flex flex-col items-center md:flex-row gap-5 md:items-start md:gap-8 lg:gap-[49px] mt-8">
        <Link
          href="/profile/home"
          className="w-full pt-7 flex items-center gap-[10px] h-8 justify-start"
        >
          <IoArrowBackOutline size={28} />
          <span className="text-[#09121F] font-medium text-base">Back</span>
        </Link>

        <ProfileResultCard {...card[0]} />
      </div>
    </div>
  );
};

export default HomeResultPage;
