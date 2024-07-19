import React from "react";
import { Link } from "react-router-dom";

// images import
import MainBackground from "../../assests/svgs/main-page-bg.svg";
import LeonLogo from "../../assests/svgs/Leon-Lion-Logo.svg";
import LeonText from "../../assests/svgs/LEON.svg";
import LionCharacter from "../../assests/svgs/cute-lion-posing-studi0.svg";

// icons imports
import { FaTelegramPlane } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";

const Home = () => {
  return (
    <div
      className="border-2 border-red-600 w-[100vw]] h-[100vh]"
      style={{
        background: `url(${MainBackground})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      {/* Logo */}
      <img src={LeonLogo} className="w-[66px] mt-4 ml-4" />

      {/* text */}
      <img src={LeonText} className="w-48 m-auto mt-8" />

      {/* Lion character Image  */}
      <img src={LionCharacter} className="m-auto w-72" />

      {/* PlayNow button */}
      <div className="flex  justify-center ">
        <button className="rounded-md px-7 py-3 font-bold text-md text-white bg-gradient-to-b from-[#99E23B] to-[#547C21]">
          PLAY NOW
        </button>
      </div>

      {/* text */}
      <p className="text-white font-bold text-center mt-4">Stay tuned</p>
      <p className="text-white text-lg font-bold text-center">
        More info at our official channels
      </p>

      {/* icons */}

      <div className="flex justify-evenly mt-4 px-20">
        <Link to={"#"} className="p-2 bg-black rounded-full">
          <FaTelegramPlane className="text-white text-2xl" />
        </Link>

        <Link to={"#"} className="p-2 bg-black rounded-full">
          <FaFacebookF className="text-white text-2xl" />
        </Link>

        <Link to={"#"} className="p-2 bg-black rounded-full">
          <FaXTwitter className="text-white text-2xl" />
        </Link>

        {/* className="text-white bg-black rounded-full p-2" />/ */}
      </div>
    </div>
  );
};

export default Home;
