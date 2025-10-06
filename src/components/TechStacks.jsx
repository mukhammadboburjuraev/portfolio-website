"use client";
import {
  iconsTechStackFirst,
  iconsTechStackSecond,
  iconsTechStackThird,
} from "./icons.js";
import { useFadeScroll } from "./useFadeScroll.jsx";

function TechStacks({ t }) {
  useFadeScroll();

  return (
    <div
      data-aos="fade-up"
      className="w-screen h-screen flex flex-col justify-center items-center py-30"
    >
      <div className="text-center">
        <h1 className="font-bold text-4xl">{t("tech-stack")} </h1>
        <p className="text-gray-600 mt-2.5">{t("tech-stack-sub-title")}</p>
      </div>

      <div className="flex justify-between items-center gap-5 mt-15">
        {iconsTechStackFirst.map((icon, i) => (
          <div className="flex flex-col bg-white p-3 rounded" key={i}>
            <div className="w-10">{icon}</div>
          </div>
        ))}
      </div>

      <div className="flex justify-between items-center gap-5 mt-5">
        {iconsTechStackSecond.map((icon, i) => (
          <div className="flex flex-col bg-white p-3 rounded" key={i}>
            <div className="w-10">
              {icon === "GithubIcon" ? (
                <p className="text-black">{icon}</p>
              ) : (
                icon
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-between items-center gap-5 mt-5">
        {iconsTechStackThird.map((icon, i) => (
          <div className="flex flex-col bg-white p-3 rounded" key={i}>
            <div className="w-10">{icon}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TechStacks;
