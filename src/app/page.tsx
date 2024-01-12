import HeroSection from "@/modules/hero-section/hero-section";
import Navbar from "@/modules/navbar/navbar";
import Score from "@/modules/score/score";
export default function Home() {
  return (
    <div className="bg-sectionbg  bg-cover h-full ">
      <div className=" w-full ">
        <div className="bg-white shadow-md">
          <Navbar />
        </div>
        <HeroSection />
        <div className="flex flex-col justify-center items-center my-10">
          <div className=" w-full max-w-[1100px]">
            <Score />
          </div>
        </div>
      </div>
    </div>
  );
}
