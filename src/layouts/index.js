import React from "react";
import { Link } from "react-router-dom";

// icons import
import Tap from "../assests/svgs/layout-icons/tap.svg";
import Invite from "../assests/svgs/layout-icons/invite.svg";
import Task from "../assests/svgs/layout-icons/task.svg";
import Airdrop from "../assests/svgs/layout-icons/airdrop.svg";

const MainLayout = ({ children }) => {
  return (
    <div>
      <div className="mb-8">{children}</div>

      <div className="bg-black rounded-t-3xl flex justify-around py-2 fixed bottom-0 w-full">
        <Link to={"/"} className="flex flex-col text-center">
          <img src={Tap} />
          <p className="text-sm text-[#B1B0B0]">Tap</p>
        </Link>

        <Link to={"#"} className="flex flex-col text-center">
          <img src={Task} />
          <p className="text-sm text-[#B1B0B0]">Task</p>
        </Link>

        <Link to={"#"} className="flex flex-col text-center">
          <img src={Invite} />
          <p className="text-sm text-[#B1B0B0]">Invite</p>
        </Link>

        <Link to={"#"} className="flex flex-col text-center">
          <img src={Airdrop} className="w-10" />
          <p className="text-sm text-[#B1B0B0]">Airdrop</p>
        </Link>

      </div>
    </div>
  );
};

export default MainLayout;
