import React from "react";
import { Separator } from "../ui/separator";
import Link from "next/link";
import Image from "next/image";

const ProfileResultCard = ({
  id,
  coordinates,
  label,
  img,
  showAllLabels, // Default to false
  searchResultPage,
}: ProfileResultCardProps) => {
  return (
    <div
      className={`max-w-[561px] w-full py-[19px] px-4 bg-white rounded-[14px] ${
        searchResultPage ? "mt-[360px] mx-auto" : ""
      }`}
      key={id}
    >
      <div className="w-full flex flex-col gap-6">
        <div className="flex flex-col gap-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Image
                src="/assets/images/profile-res-card-header-img.png"
                alt="img"
                width={24}
                height={24}
              />
              <p className="text-[#09121F] font-semibold text-[22px]">
                {coordinates}
              </p>
            </div>

            <Image
              src="/assets/images/saved-profile-res.png"
              alt="img"
              width={24}
              height={24}
            />
          </div>

          <Image
            src={img}
            alt="img"
            width={403}
            height={223}
            className="w-full"
          />

          <div className="flex flex-col gap-6">
            <div className="flex items-center justify-between">
              <label>Coordinator</label>
              <span className="bg-[#E6E6E6] p-[6px] rounded-[5px]">
                {coordinates}
              </span>
            </div>

            <Separator className="border border-[#D9D9D9]" />

            <div>
              {label.length > 0 && (
                <>
                  {showAllLabels ? (
                    label.map((item, index) => (
                      <React.Fragment key={index}>
                        <div
                          key={index}
                          className="flex items-center justify-between mb-6"
                        >
                          <label className="text-[#09121F] font-medium">
                            {item}
                          </label>
                          <span className="bg-[#E6E6E6] p-[6px] rounded-[5px]">
                            {coordinates}
                          </span>
                        </div>
                        <Separator className="mt-[27px] mb-6 border border-[#D9D9D9]" />
                      </React.Fragment>
                    ))
                  ) : (
                    <div className="flex items-center justify-between mb-6">
                      <label className="text-[#09121F] font-medium">
                        {label[0]}
                      </label>
                      <span className="bg-[#E6E6E6] p-[6px] rounded-[5px]">
                        {coordinates}
                      </span>
                    </div>
                  )}

                  {/* <Separator className="mt-[27px] mb-6 border border-[#D9D9D9]" /> */}
                </>
              )}
            </div>
          </div>
        </div>

        <Link
          href={`/profile/home/${id}`}
          className={`text-[#09121F] font-medium text-base text-center ${
            showAllLabels && "hidden"
          }`}
        >
          See more
        </Link>
      </div>
    </div>
  );
};

export default ProfileResultCard;
