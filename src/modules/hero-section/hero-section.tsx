import HeroTitle from "@/components/hero-section/hero-title";
import KeyBox from "@/components/hero-section/key-box";
import React from "react";

const HeroSection = () => {
  return (
    <div className="flex flex-col justify-center items-center my-10">
      <div className=" w-full max-w-[53.25rem]">
        <HeroTitle />
        <div className="my-6 flex flex-col justify-center items-center space-y-2">
          <div className="grid grid-cols-10 gap-1">
            <KeyBox text="q" />
            <KeyBox text="w" />
            <KeyBox text="e" />
            <KeyBox text="r" />
            <KeyBox text="t" />
            <KeyBox text="y" />
            <KeyBox text="u" />
            <KeyBox text="i" />
            <KeyBox text="o" />
            <KeyBox text="p" />
          </div>
          <div className="grid grid-cols-9 gap-1 ">
            <KeyBox text="a" />
            <KeyBox text="s" />
            <KeyBox text="d" />
            <KeyBox text="f" />
            <KeyBox text="g" />
            <KeyBox text="h" />
            <KeyBox text="j" />
            <KeyBox text="k" />
            <KeyBox text="l" />
          </div>
          <div className="grid grid-cols-10 gap-1 ">
            <KeyBox text="enter" />
            {/* <div className="rounded-lg bg-tertiary px-4 py-2 w-10">
            <p className="font-semibold text-xl capitalize text-center text-white ">
              enter
            </p>
          </div> */}
            <KeyBox text="z" />
            <KeyBox text="x" />
            <KeyBox text="c" />
            <KeyBox text="v" />
            <KeyBox text="b" />
            <KeyBox text="n" />
            <KeyBox text="m" />
            {/* <div className="rounded-lg bg-tertiary px-4 py-2 w-20">
            <p className="font-semibold text-xl capitalize text-center text-white ">
              backspace
            </p>
          </div> */}
            <KeyBox text="delete" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
