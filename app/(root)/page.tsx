import HomeCard from "@/components/shared/HomeCard";
import SearchByLand from "@/components/shared/SearchByLend";
import Testimonies from "@/components/shared/Testimonies";
import Image from "next/image";

const HomePage = () => {
  return (
    <>
      <section className="w-full relative bg-[#E9EBF0] pb-[114px] rounded-b-[63px]">
        <Image
          src="/assets/images/home-img.png"
          alt="home page"
          width={1440}
          height={782}
          className="w-full h-[782px] object-cover rounded-b-[63px]"
        />

        <div className="max-w-[603px] absolute top-[156px] left-0 right-0 mx-auto text-center">
          <h1 className="text-[40px] lg:text-[57px] font-bold text-white">
            Welcome to - Architex.land
          </h1>
          <p className="text-sm lg:text-base text-white max-w-[300px] mx-auto">
            Your ultimate resource for architects, studios, and landowners.
          </p>
        </div>

        <SearchByLand searchResultPage={false} />

        <div className="max-w-[1070px] mx-auto mt-[125px] flex flex-col gap-9 lg:gap-[45px]">
          <div className="flex flex-col gap-[10px]">
            <h3 className="text-[28px] text-[#09121F] font-bold md:text-[45px] text-center">
              What you get
            </h3>
            <p className="text-sm md:text-base md:font-medium text-[#09121F] text-center">
              Download quality assets and templates from global artists, with
              one great-value subscription.
            </p>
          </div>

          <div className="min-w-[546px] mx-auto rounded-[19px]"></div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-10 xl:gap-[70px] px-4">
            <HomeCard
              image="/assets/images/file-info-line.png"
              text="Detailed insights on the specific building regulations for the land"
              title="Regulatory information"
            />
            <HomeCard
              image="/assets/images/shape-2-line.png"
              text="Accurate land measurements, including shape, form, and size in both square feet and square meters."
              title="Land Dimensions"
            />
            <HomeCard
              image="/assets/images/message-2-line.png"
              text="Detailed insights on the specific building regulations for the land"
              title="Development Recommendations"
            />
            <HomeCard
              image="/assets/images/road-map-line.png"
              text="View the exact location of the plot with an interactive map feature."
              title="Google Map"
            />
          </div>
        </div>
      </section>

      <section className="w-full py-20">
        <div className="max-w-[1070px] mx-auto flex flex-col gap-[25px] px-4">
          <h3 className="text-white font-bold lg:text-[45px] text-[28px]">
            Our Partners
          </h3>
          <div className="flex flex-col lg:flex-row items-center gap-[25px]">
            <Image
              src="/assets/images/partner-img-1.png"
              alt="partner"
              width={340}
              height={169}
            />
            <Image
              src="/assets/images/partner-img-2.png"
              alt="partner"
              width={340}
              height={169}
            />
            <Image
              src="/assets/images/partner-img-3.png"
              alt="partner"
              width={340}
              height={169}
            />
          </div>
        </div>
      </section>

      <section className="relative w-full lg:flex xl:gap-[70px] bg-[#E9EBF0] rounded-[63px]  pl-[16px] lg:pl-[185px] pt-[65px] lg:pt-[144px] pb-[118px] lg:pb-[206px]">
        <Testimonies />
      </section>
    </>
  );
};

export default HomePage;
