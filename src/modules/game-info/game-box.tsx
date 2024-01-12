import React from "react";
interface Props {
  text?: string;
  bgColor: string;
}
const GameBox = ({ text, bgColor }: Props) => {
  return (
    <div className={`rounded-2xl ${bgColor} px-4 py-2 shadow-lg`}>
      <p className="font-bold text-4xl text-center capitalize h-10">{text}</p>
    </div>
  );
};

export default GameBox;
