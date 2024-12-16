import HomeCard from "@/components/shared/HomeCard";
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

        <div className="max-w-[603px] absolute top-[156px] left-0 right-0 mx-auto  z-20 text-center">
          <h1 className="text-[57px] font-bold text-white">
            Welcome to - Architex.land
          </h1>
          <p className="text-base text-white max-w-[300px] mx-auto">
            Your ultimate resource for architects, studios, and landowners.
          </p>
        </div>

        {/* search component */}
        {/* <div></div> */}

        <div className="max-w-[1070px] mx-auto mt-[125px] flex flex-col gap-[45px]">
          <div className="flex flex-col gap-[10px]">
            <h3 className="text-[#09121F] font-bold text-[45px]">
              What you get
            </h3>
            <p className="text-base text-[#09121F]">
              Download quality assets and templates from global artists, with
              one great-value subscription.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-[70px]">
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
        <div className="max-w-[1070px] mx-auto flex flex-col gap-[25px]">
          <h3 className="text-white font-bold text-[45px]">Our Partners</h3>
          <div className="flex items-center gap-[25px]">
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

      <section className="w-full bg-[#E9EBF0] rounded-[63px] h-[628px]"></section>
    </>
  );
};

export default HomePage;
