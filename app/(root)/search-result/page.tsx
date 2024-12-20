import ProfileResultCard from "@/components/shared/ProfileResultCard";
import SearchByLand from "@/components/shared/SearchByLend";
import { profileHomeResultConstants } from "@/constants";
import React from "react";

const SearchResultPage = () => {
  const result = profileHomeResultConstants[0];

  return (
    <div className="w-full gap-[60px] bg-[#E9EBF0] min-h-[200vh] flex flex-col">
      <div className="pt-0">
        <SearchByLand searchResultPage={true} />
      </div>
      <ProfileResultCard
        key={result.id}
        {...result}
        showAllLabels={true}
        searchResultPage={true}
      />
    </div>
  );
};

export default SearchResultPage;
