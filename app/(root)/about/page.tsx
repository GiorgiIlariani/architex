import { ourMemberConstants } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const AboutPage = () => {
  return (
    <>
      <section className="w-full bg-[#E9EBF0] pb-[114px] rounded-b-[63px]">
        <div className="max-w-[603px] pt-[156px] mx-auto  z-20 text-center">
          <h1 className="text-[57px] font-bold text-[#09121F]">
            Welcome to - Architex.land
          </h1>
          <p className="text-base text-[#09121F] max-w-[300px] mx-auto">
            Your ultimate resource for architects, studios, and landowners.
          </p>
        </div>

        <div className="max-w-[1070px] mx-auto flex flex-col gap-20 mt-[65px]">
          <Image
            src="/assets/images/about-hero-img.png"
            alt="about img"
            width={1070}
            height={604}
            className="rounded-[43px]"
          />

          <div className="flex flex-col gap-[10px]">
            <h4 className="text-[#09121F] text-[45px] font-bold">About Us</h4>
            <div className="max-h-[315px] columns-2 gap-8 overflow-hidden">
              <p className="text-[#09121F] text-base">
                Real estate is an incredibly personal experience — and for most
                people, it’s the biggest transaction they’ll ever make. Zillow
                is built on a deep understanding of movers’ needs and a
                motivation to help you accomplish your moving goals. When you
                request to connect with an agent, Zillow works to understand
                your unique situation in order to connect you with a local real
                estate professional who can tailor their services to you, help
                you explore options, and be your advocate to win your next home.
                That’s also why Zillow provides a suite of products and services
                that helps most agents across the country do business more
                efficiently. This means agents can spend more time on what
                matters: helping you get home. In short, Zillow shows up for our
                real estate agent partners so they can better show up for you.
                Buying and selling real estate is a difficult process to
                navigate, because it is fragmented and complex. Your journey
                from your current home to your new home includes many steps —
                research, shop, tour, finance, appraise, inspect, negotiate an
                offer, close and move — all with no central navigator. Zillow,
                the housing super app, solves these real pain points by
                providing seamless solutions integrated within the same
                ecosystem. With new functionality and features continuously
                improving the app and site, as well as connections to great
                agent partners and expert loan officers at Zillow Home Loans,
                Zillow offers a better experience for renters, buyers and
                sellers.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full pt-20 py-[95px]">
        <div className="flex flex-col gap-10 max-w-[1070px] mx-auto">
          <h4 className="text-[45px] text-white font-bold">Our Team</h4>

          <div className="bg-[#E9EBF0] rounded-[21px] p-5">
            <div className="flex items-center gap-[70px]">
              {ourMemberConstants.map((member, i) => (
                <div className="flex flex-col gap-[22px]" key={i}>
                  <Image
                    src={member.img}
                    alt={member.fullName}
                    width={297}
                    height={297}
                    className="rounded-[21px]"
                  />

                  <div className="flex flex-col items-center gap-[15px]">
                    <h5 className="font-bold text-[#09121F] text-[25px]">
                      {member.fullName}
                    </h5>
                    <span className="text-[#09121F] text-[13px]">
                      {member.proffesion}
                    </span>

                    <div className="flex items-center gap-[18px]">
                      {member.links.map((link, i) => (
                        <Link href="/" key={i}>
                          <Image
                            src={link}
                            alt={member.fullName}
                            width={48}
                            height={48}
                          />
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="w-full h-[740px] bg-[#E9EBF0] rounded-[63px] px-[185px] py-[125px]">
        <div className="max-w-[1070px] mx-auto flex items-start gap-[88px]">
          <Image
            src="/assets/images/about-hero-img.png"
            alt="about img"
            width={476}
            height={490}
            className="w-[476px] h-[490px] object-cover rounded-[43px]"
          />

          <div className="flex flex-col gap-3">
            <h3 className="text-[57px] font-bold text-[#09121F]">
              Welcome to - Architex.land
            </h3>
            <p className="text-[#09121F]">
              Zillow, the housing super app, solves these real pain points by
              providing seamless solutions integrated within the same ecosystem.
              With new functionality and features continuously improving the app
              and site, as well as connections to great agent partners and
              expert loan officers at Zillow Home Loans, Zillow offers a better
              experience for renters, buyers and sellers.  
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
