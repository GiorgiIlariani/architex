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
            return (
              <div
                className="flex-1 py-[19px] px-4 bg-white rounded-[14px]"
                key={res.id}
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
                          {res.coordinates}
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
                      src="/assets/images/profile-result-card-img.png"
                      alt="img"
                      width={403}
                      height={223}
                      className="w-full"
                    />

                    <div className="flex flex-col gap-6">
                      <div className="flex items-center justify-between">
                        <label>Coordinator</label>
                        <span className="bg-[#E6E6E6] p-[6px] rounded-[5px]">
                          {res.coordinates}
                        </span>
                      </div>
                      <Separator className="border border-[#D9D9D9]" />

                      <div>
                        {res.label.length > 0 && (
                          <>
                            <div className="flex items-center justify-between">
                              <label className="text-[#09121F] font-medium">
                                {res.label[0]}
                              </label>
                              <span className="bg-[#E6E6E6] p-[6px] rounded-[5px]">
                                {res.coordinates}
                              </span>
                            </div>
                            <Separator className="mt-[27px] mb-6 border border-[#D9D9D9]" />
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                  <Link
                    href={`/profile/home/${res.id}`}
                    className="text-[#09121F] font-medium text-base text-center"
                  >
                    See more
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Profile;
