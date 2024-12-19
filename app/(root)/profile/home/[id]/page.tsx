import ProfileResultCard from "@/components/shared/ProfileResultCard";
import { profileHomeResultConstants } from "@/constants";
import React from "react";

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
    <div className="mt-8">
      <h1 className="hidden md:block text-[#09121F] text-[45px] font-bold pt-[41px]">
        Home
      </h1>
      <ProfileResultCard {...card[0]} />
    </div>
  );
};

export default HomeResultPage;
