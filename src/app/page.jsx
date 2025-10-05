"use client";
import Education from "@/components/Education";
import HomePage from "@/components/HomePage";
import KeyFrame from "@/components/KeyFrame";
import Projects from "@/components/Projects";
import TechStacks from "@/components/TechStacks";
import { useTranslation } from "react-i18next";

export default function Home() {
  const { t } = useTranslation();
  return (
    <div className="h-screen w-full">
      <HomePage t={t} />
      <KeyFrame t={t} />
      <TechStacks t={t} />
      <Projects t={t} />
      <Education t={t} />
    </div>
  );
}
