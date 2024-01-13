"use client";
import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { FaBell } from "react-icons/fa";
export default function Topbar() {
  const [focus, setFocus] = useState(false);
  return (
    <div className="hidden sm:block w-full h-[60px] fixed top-0 text-white bg-[#040D12]">
      <div className="w-full h-full flex items-center justify-between px-4">
        <div className="w-[10%] h-full flex items-center justify-center text-[22px] font-burtons text-[#36B5B0]">
          S
        </div>
        <div
          className={`w-[70%] h-[22px] flex items-center rounded-lg bg-white/10  `}
        >
          <input className="w-[90%] px-3 py-1 h-full border-none outline-none bg-transparent text-[16px]" />

          <div className="w-[10%] h-full flex items-center justify-left">
            <AiOutlineSearch />
          </div>
        </div>
        <div className="w-[10%] h-full flex items-center pl-[">
          <FaBell />
        </div>
      </div>
    </div>
  );
}
