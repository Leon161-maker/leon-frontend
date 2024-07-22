import React from "react";
import { Link } from "react-router-dom";

//  icons import
import { IoArrowBackOutline } from "react-icons/io5";
import { FaAngleRight } from "react-icons/fa6";

const Settings = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#74561d] via-[#303c20] to-[#303c20] text-white p-4 flex flex-col justify-between">
      <div>
        <Link to={"/mining"} className="mt-4 flex gap-x-4 items-center mb-4">
          <IoArrowBackOutline className="text-2xl text-center" />
          <h1 className="text-white text-3xl">LEON</h1>
        </Link>

        <h1 className="text-center text-4xl font-semibold mb-6">Settings</h1>

        <div className="bg-[#56683F] rounded-xl px-4 py-2 my-4">
          <div className="flex justify-between items-center">
            <div className="ml-4">
              <h2 className="font-bold text-lg">Select Language</h2>
              <p>English</p>
            </div>
            <FaAngleRight className="text-center text-xl" />
          </div>
        </div>

        <div className="bg-[#56683F] rounded-xl px-4 py-2 my-4">
          <div className="flex justify-between items-center">
            <div className="ml-4">
              <h2 className="font-bold text-lg">Select Exchange</h2>
              <p>Binance</p>
            </div>
            <FaAngleRight className="text-center text-xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
