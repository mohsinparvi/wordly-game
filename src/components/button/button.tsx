import React from "react";
interface Props {
  text: string;
}
const Button = ({ text }: Props) => {
  return (
    <div className="bg-primary border-b-4 font-semibold text-sm text-white capitalize border-primary rounded-full py-2 px-4">
      {text}
    </div>
  );
};

export default Button;
