import React from "react";

const Footer = () => {
  return (
    <div className="py-4 textt-white">
      <div className="flex flex-col justify-center items-center ">
        <div className=" w-full max-w-[1100px] ">
          <div className="flex flex-col lg:flex-row justify-center lg:justify-between items-center text-white font-medium space-y-2'">
            <p>©2023 Guess This Word. All Rights Reserved.</p>
            <div className="flex items-center  gap-2">
              <p>New Game</p>
              <svg
                width="6"
                height="6"
                viewBox="0 0 6 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="3" cy="3" r="3" fill="#FFD700" />
              </svg>

              <p>Privacy Policy</p>
              <svg
                width="6"
                height="6"
                viewBox="0 0 6 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="3" cy="3" r="3" fill="#FFD700" />
              </svg>

              <p>About</p>
              <svg
                width="6"
                height="6"
                viewBox="0 0 6 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="3" cy="3" r="3" fill="#FFD700" />
              </svg>

              <p>Feedback</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
