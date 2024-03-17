import React from "react";
import { NavLink } from "react-router-dom";

const HeadingAd = () => {
  return (
    <div className=" w-full h-[60px] flex justify-between items-center px-8 bg-green-200">
      <div className="h-full flex items-center">
        <NavLink className="h-[60px]" to={"/"}>
          <img className="object-cover h-full" src="/logo.png" alt="" />
        </NavLink>
        <span className="pl-4 text-green-600 text-xl font-semibold">
          Goal Line Arena
        </span>
      </div>
      <div className="h-full flex items-center">
        <span className="pr-4 text-green-600 text-xl font-semibold">
          Welcome
        </span>
        <img
          className="object-cover h-[40px] w-[40px] rounded-full"
          src="/avatar.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default HeadingAd;
