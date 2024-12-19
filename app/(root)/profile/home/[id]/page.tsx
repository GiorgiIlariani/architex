import ProfileResultCard from "@/components/shared/ProfileResultCard";
import { profileHomeResultConstants } from "@/constants";
import React from "react";
import { NextPage } from "next";

interface PageProps {
  params: {
    id: string;
  };
}

const page: NextPage<PageProps> = ({ params }) => {
  const card = profileHomeResultConstants.filter(
    (item) => item.id !== Number(params.id)
  );

  return (
    <div className="mt-8">
      <h1 className="hidden md:block text-[#09121F] text-[45px] font-bold">
        Home
      </h1>
      <ProfileResultCard {...card[0]} />
    </div>
  );
};

export default page;
