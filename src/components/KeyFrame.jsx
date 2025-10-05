"use client";
import { useFadeScroll } from "./useFadeScroll";
import KayFrameWrapper from "./KayFrameWrapper";
import "../components/i18n";
import { useTranslation } from "react-i18next";

function KeyFrame({ t }) {
  useFadeScroll();
  return (
    <div className="w-screen flex flex-col justify-center items-center bg-white text-black py-30">
      <div data-aos="fade-up" className="text-center">
        <h1 className="font-bold text-4xl">{t("core-competencies")}</h1>
        <p className="text-gray-600 mt-2.5">
          {t("core-competencies-subtitle")}
        </p>
      </div>

      <div className="flex">
        <KayFrameWrapper t={t} />
      </div>
    </div>
  );
}

export default KeyFrame;
