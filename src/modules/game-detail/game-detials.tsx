import React from "react";

const GameDetials = () => {
  return (
    <div className="my-10 text-center w-2/3 space-y-2  ">
      <h1 className="font-bold text-2xl text-secondary">Wordle Game</h1>
      <h2 className="font-bold text-4xl text-primary">Guess the hidden word</h2>
      <p className="text-[##545454] text-base  text-center">
        The rules are very simple: You need to guess the hidden word (from 4 to
        11 letters) in 6 tries. To get started, just type any word on the first
        line. If the letter is guessed correctly and is in the correct place, it
        will be highlighted in green, if the letter is in the word, but in the
        wrong place - in yellow, and if the letter is not in the word, it will
        remain gray. Can you guess the hidden word in 6 tries?
      </p>
    </div>
  );
};

export default GameDetials;
