import React from "react";

const GameTitle = () => {
  return (
    <div className="w-4/5 space-y-2">
      <h1 className="font-bold text-2xl text-center text-secondary">
        How to play
      </h1>
      <h2 className="font-bold text-4xl text-primary text-center ">
        How to play Wordle Game?
      </h2>
      <p className="text-base font-normal text-[#545454]  text-center">
        Start with Any Five-Letter Word: Kick off your Wordle adventure by
        typing in any five-letter word. This is your first step towards
        unraveling the word puzzle.
      </p>
    </div>
  );
};

export default GameTitle;
