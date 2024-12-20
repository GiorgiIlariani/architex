"use client";

import React, { useState } from "react";
import { Separator } from "../ui/separator";
import Link from "next/link";
import Image from "next/image";
import { Button } from "../ui/button";

const ProfileResultCard = ({
  id,
  coordinates,
  label,
  img,
  showAllLabels,
  searchResultPage,
  upgradeToSee,
}: ProfileResultCardProps) => {
  const [isSaved, setIsSaved] = useState(false);
  const [showSaveButton, setShowSaveButton] = useState(false);

  // Toggle the saved state
  const handleSaveClick = () => {
    setIsSaved((prevState) => !prevState);
    setShowSaveButton(false); // Hide the button after saving/unsaving
  };

  // Show the button when the image is clicked
  const handleImageClick = () => {
    setShowSaveButton((prev) => !prev);
  };

  return (
    <div
      className={`relative max-w-[561px] w-full py-[19px] px-4 bg-white rounded-[14px] ${
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

            <div className="flex flex-col items-center">
              <div className="cursor-pointer" onClick={handleImageClick}>
                {isSaved ? (
                  <Image
                    src="/assets/images/saved-profile-res.png"
                    alt="Saved"
                    width={24}
                    height={24}
                    className="w-6 h-6 object-contain"
                  />
                ) : (
                  <Image
                    src="/assets/images/not-saved-profile-res.png"
                    alt="Not saved"
                    width={24}
                    height={24}
                    className="w-6 h-6 object-contain"
                  />
                )}
              </div>

              {showSaveButton && (
                <Button
                  className="absolute -top-2 right-1 mt-[-10px] mr-[-10px] bg-[#09121F] hover:bg-[#09121F] text-white text-sm rounded-[14px]"
                  onClick={handleSaveClick}
                >
                  {isSaved ? "Unsave" : "Save"}
                </Button>
              )}
            </div>
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

        {upgradeToSee && (
          <div className="flex flex-col gap-[18px] items-center pb-[52px]">
            <div className="flex flex-col gap-3">
              <h2 className="text-[28px] text-[#09121F] font-bold">
                Upgrade to see more
              </h2>
              <p className="text-[#747D8A]">
                Our applications feature is available to use for <br /> feed
                listings if you have a connected
              </p>
            </div>
            <Link href="/pricing">
              <Button className="bg-[#09121F] text-white font-semibold text-sm rounded-[10px] hover:bg-[#09121F]">
                Pricing
              </Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileResultCard;
