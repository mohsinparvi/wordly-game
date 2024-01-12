import React from "react";
interface Props {
  text: string;
}
const KeyBox = ({ text }: Props) => {
  return (
    <div className="rounded-lg bg-tertiary px-4 py-2 w-auto">
      <p className="font-semibold text-xl capitalize text-center text-white ">
        {text}
      </p>
    </div>
  );
};

export default KeyBox;
