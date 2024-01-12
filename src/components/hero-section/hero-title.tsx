import React from "react";
import TextBox from "./text-box";

const HeroTitle = () => {
  return (
    <div className="space-y-2">
      <h1 className="font-bold text-4xl text-center text-primary">Welcome!</h1>
      <p className="font-medium text-base text-tertiary text-center">
        Go to this step by step guideline process on how to certify for your
        weekly benefits:
        <span className="font-semibold text-green underline">
          See our guideline
        </span>
        <div className="flex flex-col items-center justify-center ">
          <button className="rounded-full py-2 px-4 bg-secondary text-white my-4">
            00:10:25:06:250
          </button>
          <div className="grid grid-cols-5 gap-4">
            <div className="rounded-2xl bg-white px-4 py-2 ">
              <p className="font-bold text-4xl capitalize">A</p>
            </div>
            <TextBox />
            <TextBox />
            <TextBox />
            <TextBox />
            <TextBox />
            <TextBox />
            <TextBox />
            <TextBox />
            <TextBox />
            <TextBox />
            <TextBox />
            <TextBox />
            <TextBox />
            <TextBox />
            <TextBox />
            <TextBox />
            <TextBox />
            <TextBox />
            <TextBox />
            <TextBox />
            <TextBox />
            <TextBox />
            <TextBox />
            <TextBox />
            <TextBox />
            <TextBox />
            <TextBox />
            <TextBox />
            <TextBox />
            <TextBox />
            <TextBox />
            <TextBox />
            <TextBox />
            <TextBox />
          </div>
        </div>
      </p>
    </div>
  );
};

export default HeroTitle;
