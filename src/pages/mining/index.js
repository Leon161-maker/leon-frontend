import React, { useState, useEffect } from "react";

// Components import
import DetailsButton from "../../components/detailsButton";

// images import
import { ButtonCoin, ButtonLion, CountingCoin, TapCoin, ShockIcon, MainBackground, Boost } from '../../assests/svgs/index'
import { Link } from "react-router-dom";


const levelThresholds = [
  { name: "Bronze", maxLevel: 10 },
  { name: "Silver", maxLevel: 20 },
  { name: "Gold", maxLevel: 30 },
];

const Mining = () => {
  const [availableBalance, setAvailableBalance] = useState(0); // Initial balance of zero
  const [levelProgress, setLevelProgress] = useState(0); // Initial progress of 0% (0-100 scale)
  const [shockValue, setShockValue] = useState(1000); // Initial shock value
  const [currentLevel, setCurrentLevel] = useState(1); // Start at level 1
  const [currentTier, setCurrentTier] = useState(levelThresholds[0].name); // Start at Bronze
  const [canTap, setCanTap] = useState(true); // State to track if user can tap

  const perTapValue = 1; // Per tap value is set to 1 coin
  const shockDecrement = 10; // Shock value decrement per tap
  const shockIncrement = 5; // Shock value increment over time
  const shockIncrementInterval = 1000; // Interval in milliseconds for shock value increment
  const coinsPerLevel = 10000; // Coins required to level up

  useEffect(() => {
    const interval = setInterval(() => {
      setShockValue((prevShock) => {
        if (prevShock < 1000) {
          return prevShock + shockIncrement;
        }
        return prevShock;
      });
    }, shockIncrementInterval);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (shockValue > 0) {
      setCanTap(true);
    }
  }, [shockValue]);

  const handleButtonClick = () => {
    if (!canTap) return;

    setAvailableBalance((prevBalance) => {
      const newBalance = prevBalance + perTapValue;
      if (newBalance >= coinsPerLevel) {
        setCurrentLevel((prevLevel) => {
          const newLevel = prevLevel + 1;
          const newTier = levelThresholds.find((threshold) => newLevel <= threshold.maxLevel)?.name || "Bronze";
          setCurrentTier(newTier);
          return newLevel;
        });
        setLevelProgress(0);
        return newBalance % coinsPerLevel;
      }
      setLevelProgress((newBalance / coinsPerLevel) * 100);
      return newBalance;
    });

    setShockValue((prevShock) => {
      const newShock = prevShock - shockDecrement;
      if (newShock <= 0) {
        setCanTap(false);
        return 0;
      }
      return newShock;
    });
  };

  return (
    <div
      className="w-[100vw] pb-6 pt-1"
      style={{
        background: `url(${MainBackground})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      {/* Top 2 buttons */}
      <div className="flex justify-between mx-4 pt-14 pb-10">
        <button className="bg-gradient-to-b from-[#99E23B] to-[#547C21] px-2 py-1 rounded-lg">
          <div className="flex items-center gap-x-2">
            <img src={ButtonCoin} alt="leon-coin" />
            <p className="text-center text-xs text-white">Person Name</p>
          </div>
        </button>
        <button className="bg-gradient-to-b from-[#99E23B] to-[#547C21] px-2 py-1 rounded-lg">
          <Link to={'/settings'} className="flex items-center gap-x-2">
            <img src={ButtonLion} />
            <p className="text-center text-xs text-white">Choose Exchange</p>
          </Link>
        </button>
      </div>

      <div className="bg-gradient-to-b from-[#74561d] via-[#303c20] to-[#303c20] py-6 rounded-t-3xl shadow-lg shadow-[#9b8255]">
        <div className="flex justify-center space-x-4">
          {/* 3 details button */}
          <DetailsButton className="text-center shadow-lg bg-gray-100 p-3  rounded-md" heading={"Earn per Tap"} IsIcon={true} value={`+${perTapValue}`} />
          <DetailsButton className="text-center shadow-lg bg-gray-100 p-4 rounded-md" heading={"Profit per hour"} IsIcon={true} value={"0"} />
          <DetailsButton className="text-center shadow-lg bg-gray-100 p-4 rounded-md" heading={"Daily Task"} IsIcon={true} value={"0"} />
        </div>

        {/* Coin counting */}
        <div className="flex items-center">
          <img className="w-40" src={CountingCoin} alt="leon-counting-coin"/>
          <p className="text-white text-3xl mr-4 font-semibold">{availableBalance}</p>
        </div>

        {/* Progress bar */}
        <div className="px-4">
          <div className="flex justify-between mb-1">
            <p className="text-white text-xs">Level {currentTier}</p>
            <p className="text-white text-xs">Level {currentLevel}/{levelThresholds.find((threshold) => threshold.name === currentTier)?.maxLevel}</p>
          </div>
          <div className="bg-black relative h-4 w-full rounded-2xl">
            <div
              className="bg-gradient-to-b from-[#99E23B] to-[#547C21] absolute top-0 left-0 h-full rounded-2xl"
              style={{ width: `${levelProgress}%` }}
            ></div>
          </div>
        </div>

        {/* Tap coin */}
        <div className="text-center">
          <button
            className="transform transition-transform duration-0 scale-95 active:scale-100 1 focus:outline-none"
            onClick={handleButtonClick} disabled={!canTap}>
            <img src={TapCoin} alt="tab-coin"/>
          </button>
        </div>

        {/* Tap health */}
        <div className="flex items-center justify-between pb-8 pl-4 pr-4 w-full">
          <div className="flex items-center gap-x-2">
            <img src={ShockIcon} alt="Shock Icon" />
            <p className="text-center text-white text-xl">{shockValue}/1000</p>
          </div>
          <div className="flex items-center gap-x-2">
            <img src={Boost} alt="Shock Icon" className="w-12" />
            <p className="text-center text-white text-xl">Boost</p>
          </div>
        </div>


      </div>
    </div>
  );
};

export default Mining;
