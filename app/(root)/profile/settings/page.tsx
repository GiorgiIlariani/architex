import { ProfileSettingsForm } from "@/components/forms/ProfileSettingsForm";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import React from "react";

const SettingsPage = () => {
  return (
    <div className="flex-1 min-h-screen">
      <h1 className="text-[#09121F] text-[45px] font-bold pt-[41px] text-center md:text-left">
        Settings
      </h1>

      <div className="mt-[37px]">
        <div className="flex gap-[18px] items-start">
          {/* <Image /> */}
          <Image
            src="/assets/images/profile.png"
            alt="profile"
            width={66}
            height={66}
          />

          <div className="flex flex-col gap-[7px]">
            <h4 className="text-[#09121F] font-bold text-lg">
              Profile picture
            </h4>

            <div className="flex gap-3">
              <Button className="bg-[#09121F] hover:bg-[#09121F] [10px] px-[18px] font-semibold text-white text-sm rounded-[10px]">
                Upload Image
              </Button>
              <Button className="bg-[#E10C0C] hover:bg-[#E10C0C] [10px] px-[18px] font-semibold text-white text-sm rounded-[10px]">
                Remove
              </Button>
            </div>
            <p className="font-medium text-[13px] text-[#747D8A]">
              We support PNG, JPEGs under 10MB
            </p>
          </div>
        </div>

        <Separator className="border border-[#D9D9D9] mt-6 mb-7" />

        <ProfileSettingsForm />
      </div>
    </div>
  );
};

export default SettingsPage;
