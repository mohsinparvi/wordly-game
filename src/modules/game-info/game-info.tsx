import GameTitle from "@/components/game-info/game-title";
import React from "react";
import GameBox from "./game-box";

const GameInfo = () => {
  return (
    <div>
      <div className="flex justify-center items-center py-10">
        <GameTitle />
      </div>

      <div className="border border-secondary rounded-2xl space-y-1 py-3 my-4 bg-[#FBF7F4] ">
        <h1 className="text-center text-2xl font-bold capitalize text-secondary">
          Uncover Letter Clues
        </h1>
        <p className="text-center text-base text-[#545454]">
          After entering your word, pay attention to the color-coded hints.
        </p>
        <p className="text-center text-base text-[#545454]">
          Letters highlighted in yellow indicate they are part of the hidden
          word but are placed in a different spot.
        </p>
        <p className="text-center text-base text-[#545454]">
          If a letter turns green, you&apos;ve sgot both the letter and its
          position correct. A gray letter means its not in the target word at
          all.
        </p>
      </div>
      <div className="border border-secondary rounded-2xl space-y-1 py-3 my-4 bg-[#FBF7F4]  px-10">
        <h1 className="text-center text-2xl font-bold capitalize text-secondary">
          Strategize Your Next Move
        </h1>
        <p className="text-center text-base text-[#545454]">
          With each guess, you&apos;ll gather more information. Use the{" "}
          <b>green</b>
          and <b>yellow</b> hints to refine your next word choice. The goal is
          to use these insights to correctly guess the Wordle games hidden word
          within your remaining attempts.
        </p>
        <div className="flex justify-center items-center py-4">
          <div className="grid grid-cols-5 gap-4">
            <GameBox text="c" bgColor="bg-white" />
            <GameBox text="h" bgColor="bg-white" />
            <GameBox text="a" bgColor="bg-green" />
            <GameBox text="i" bgColor="bg-white" />
            <GameBox text="n" bgColor="bg-white" />
            <GameBox text="b" bgColor="bg-white" />
            <GameBox text="r" bgColor="bg-yellow-500" />
            <GameBox text="e" bgColor="bg-white" />
            <GameBox text="a" bgColor="bg-white" />
            <GameBox text="k" bgColor="bg-white" />
            <GameBox text="d" bgColor="bg-white" />
            <GameBox text="a" bgColor="bg-white" />
            <GameBox text="i" bgColor="bg-white" />
            <GameBox text="l" bgColor="bg-[#7777]" />
            <GameBox text="y" bgColor="bg-white" />
          </div>
        </div>
      </div>

      <div className="border border-secondary rounded-2xl space-y-1 py-3 my-4 bg-[#FBF7F4] ">
        <h1 className="text-center text-2xl font-bold capitalize text-secondary">
          Solve the Mystery Word
        </h1>
        <p className="text-center text-base text-[#545454]">
          Combine your knowledge of the correct letters (<b>green</b> ) and the
          correct but misplaced ones (<b>yellow</b>) to deduce the secret word.
          Achieve this within six tries, and you&apos;ve conquered the Wordle
          challenge!
        </p>
      </div>
    </div>
  );
};

export default GameInfo;
