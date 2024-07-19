import React, { useState } from "react";

// Components import
import DetailsButton from "../../components/detailsButton";

// images import
import ButtonCoin from "../../assests/svgs/button-coin-icon.svg";
import ButtonLion from "../../assests/svgs/button-lion-face.svg";
import CountingCoin from "../../assests/svgs/counting-coin.svg";
import TapCoin from "../../assests/svgs/main-big-tap-coin.svg";
import ShockIcon from "../../assests/svgs/shock-icon.svg";

const Mining = () => {
  const [availableBalance, setAvailableBalance] = useState(10000000);

  const handleButtonClick = () => {
    setAvailableBalance((prevBalance) => prevBalance + 100);
  };
  
  return (
    <div className="bg-black">
      {/* Top 2 buttons */}

      <div className="flex justify-between mx-4 pt-14 pb-10">
        <button className="bg-gradient-to-b from-[#99E23B] to-[#547C21] px-2 py-1 rounded-lg">
          <div className="flex items-center gap-x-2">
            <img src={ButtonCoin} />
            <p className="text-center text-xs text-white">Person Name</p>
          </div>
        </button>

        <button className="bg-gradient-to-b from-[#99E23B] to-[#547C21] px-2 py-1 rounded-lg">
          <div className="flex items-center gap-x-2">
            <img src={ButtonLion} />
            <p className="text-center text-xs text-white">Choose Exchange</p>
          </div>
        </button>
      </div>

      <div className="bg-gradient-to-b from-[#74561d] via-[#303c20] to-[#303c20] py-6 rounded-t-3xl shadow-lg shadow-[#9b8255]">
        <div className="flex justify-around">
          {/* 3 details button  */}
          <DetailsButton heading={"Earn per Tap"} IsIcon={true} value={"+ 2"} />
          <DetailsButton
            heading={"Profit per hour"}
            IsIcon={false}
            value={"5 K"}
          />
          <DetailsButton heading={"Daily Task"} IsIcon={true} value={"0"} />
        </div>

        {/* coin counting  */}

        <div className="flex items-center">
          <img src={CountingCoin} className="w-44" />
          <p className="text-white text-3xl text-center font-semibold">
           {availableBalance}
          </p>
        </div>

        {/* Progress bar  */}

        <div className="px-4">
          <div className="flex justify-between mb-1">
            <p className="text-white text-xs">Level Bronze</p>
            <p className="text-white text-xs">Level 2/10</p>
          </div>

          <div className="bg-black relative h-4 w-full rounded-2xl">
            <div className="bg-gradient-to-b from-[#99E23B] to-[#547C21] absolute top-0 left-0 h-full w-1/2 rounded-2xl"></div>
          </div>
        </div>

        {/* Tap coin  */}
        <div className="text-center">
          <button onClick={() => setAvailableBalance(availableBalance + 100)}>
            <img src={TapCoin} />
          </button>
        </div>

        {/* Tap health  */}
        <div className="flex items-center pb-8 pl-4 gap-x-2 ">
          <img src={ShockIcon} />
          <p className="text-center text-white text-xl">1500/2000</p>
        </div>
      </div>
    </div>
  );
};

export default Mining;
