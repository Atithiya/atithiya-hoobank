import styles from "../style";
import { arrowUp } from "../assets";
import React from "react";

const GetStarted = () => {
  return (
    <div
      className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer `}
    >
      <div
        className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}
      >
        <div className={`${styles.flexStart} flxe-row`}>
          <p className="font-poppins font-medium text-[18px] leading-[23px]">
            <span>Get</span>
            <img
              src={arrowUp}
              alt="arrowUp"
              className="w-[23px] h-[23px] object-contain"
            />
          </p>
        </div>
        <p className="font-poppins font-medium text-[18px] leading-[23px]">
          <span>Started</span>
        </p>
      </div>
    </div>
  );
};

export default GetStarted;
