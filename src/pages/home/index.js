import React from "react";
import { Link } from "react-router-dom";

// images import
import {MainBackground, LeonLogo, LeonText, LionCharacter} from '../../assests/svgs/index'

// icons imports
import { FaTelegramPlane } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";

const Home = () => {
  return (
    <div
      className="w-[100vw] pb-6 pt-1"
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
        <Link to={'/mining'} className="rounded-md px-7 py-3 font-bold text-md text-white bg-gradient-to-b from-[#99E23B] to-[#547C21] active:bg-gradient-to-t">
          PLAY NOW
        </Link>
      </div>

      {/* text */}
      <p className="text-white font-bold text-center mt-4">Stay tuned</p>
      <p className="text-white text-lg font-bold text-center">
        More info at our official channels
      </p>

      {/* icons */}

      <div className="flex justify-evenly mt-4 px-[20%]">
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
