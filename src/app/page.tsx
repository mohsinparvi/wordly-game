import GameDetials from "@/modules/game-detail/game-detials";
import GameInfo from "@/modules/game-info/game-info";
import HeroSection from "@/modules/hero-section/hero-section";
import LeasderBoard from "@/modules/leaderboard/leasderboard";
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
        <div className="bg-[#FFEEDE]">
          <div className="flex flex-col justify-center items-center my-10 bg-white rounded-[3rem]">
            <div className=" w-full max-w-[1100px]">
              <Score />
              <LeasderBoard />
            </div>
          </div>
          <div className="flex justify-center items-center ">
            <GameDetials />
          </div>
          <div className="bg-[#FFEEDE]">
            <div className="flex flex-col justify-center items-center my-10 bg-white rounded-[3rem]">
              <div className=" w-full max-w-[1100px]">
                <GameInfo />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
