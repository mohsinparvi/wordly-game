import React from "react";
interface Props {
  text?: string;
}
const TextBox = ({ text }: Props) => {
  return (
    <div className="rounded-2xl bg-white px-4 py-2 shadow-lg">
      <p className="font-bold text-4xl capitalize h-10">{text}</p>
    </div>
  );
};

export default TextBox;
