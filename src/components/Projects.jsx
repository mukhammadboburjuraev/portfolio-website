import { useTranslation } from "react-i18next";
import ProjectsWrapper from "./ProjectsWrapper";

function Projects({ t }) {
  return (
    <div className="w-screen flex flex-col md:flex-row justify-center items-center bg-white text-black py-30">
      <div data-aos="fade-up" className="text-center">
        <h1 className="font-bold text-4xl">{t("projects")} </h1>
        <p className="text-gray-600 mt-2.5">{t("projects-sub-title")}</p>

        <ProjectsWrapper t={t} />
      </div>
    </div>
  );
}

export default Projects;
