"use client";
import HomeIcons from "@/components/HomeIcons";
import Image from "next/image";
import { useFadeScroll } from "./useFadeScroll";
import { downloadResume } from "./functions";
import { downloadIcon } from "./icons";
import "../components/i18n";

function HomePage({ t }) {
  useFadeScroll();

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <div
        data-aos="fade-up"
        className="flex items-center justify-between w-[920px] mx-auto"
      >
        <div className="">
          <h1 className="font-bold text-5xl">
            <span>{t("main-first-name")}</span>
            <span className="block mt-2">{t("main-last-name")}</span>
          </h1>
          <p className="w-[490px] mt-8 text-gray-600">{t("main-sub-title")}</p>
          <button
            onClick={() => downloadResume()}
            className="flex justify-center items-center gap-2 bg-white px-8 py-2  text-black font-bold mt-8 min-w-40 rounded-lg hover:bg-white/90 transition-colors cursor-pointer"
          >
            {t("main-btn")}
            <span>{downloadIcon}</span>
          </button>
        </div>
        <div className="">
          <Image
            className="rounded-full"
            src="/home_img4.webp"
            width={350}
            height={350}
            alt="Picture of the author"
          />
        </div>
      </div>
      <div className="flex justify-center mt-24">
        <HomeIcons />
      </div>
    </div>
  );
}

export default HomePage;
