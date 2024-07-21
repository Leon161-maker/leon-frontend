import React from "react";

import {CoinIcon} from "../assests/svgs/index";

const Button = ({ heading, IsIcon, value }) => {
  return (
    <button className="bg-gradient-to-b from-[#99E23B] to-[#547C21] rounded-lg px-4 py-1 text-xs text-white flex flex-col">
      <p>{heading}</p>
      <div className="flex items-center">
        {IsIcon && <img src={CoinIcon} />}
        <p className={`text-center justify-center ${!IsIcon && "mt-2" }`}>{value}</p>
      </div>
    </button>
  );
};

export default Button;
