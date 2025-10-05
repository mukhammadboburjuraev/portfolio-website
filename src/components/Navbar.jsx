"use client";
import React from "react";
import { downloadResume } from "./functions";
import Link from "next/link";
import { downloadIcon, GitHubIcon, GitHubIconNavbar } from "./icons";

function Navbar() {
  return (
    <nav className="w-full h-16 flex items-center justify-between fixed px-30 z-50 py-10 bg-black/60 backdrop-blur-sm">
      <div className="text-white font-bold text-2xl">
        <h1>
          <Link href={"/"}>Mukhammadbobur</Link>
        </h1>
      </div>
      <div className="flex items-center gap-8">
        <select name="language" id="language-select">
          <option value="KO">KO</option>
          <option value="ENG">ENG</option>
          <option value="UZ">UZ</option>
        </select>

        <p className="flex justify-center items-center px-2 py-2 border border-white/40 text-white/40 rounded-lg hover:bg-white/90 hover:text-black transition-colors cursor-pointer">
          <Link
            href={"https://github.com/mukhammadboburjuraev"}
            className="w-5"
          >
            {GitHubIconNavbar}
          </Link>
        </p>

        <button
          onClick={() => downloadResume()}
          className="flex justify-center items-center px-1.5 py-1.5 border border-white/40 text-white/40 rounded-lg hover:bg-white/90 hover:text-black transition-colors cursor-pointer"
        >
          <span>{downloadIcon}</span>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
