import Image from "next/image";
import Link from "next/link"; // Добавляем импорт Link
import React from "react";

function ProjectModal({ project, onClose, t }) {
  if (!project) return null;
  console.log(t);

  return (
    <div className="fixed inset-0 bg-[#080808] bg-opacity-50 flex flex-col items-center justify-center z-50 transition-opacity duration-300 shadow">
      <div className="mt-10">
        <div className="text-black text-sm mb-3 flex justify-center gap-2">
          {project.tags?.map((tag, i) => (
            <span key={i} className=" bg-white px-2 py-1 rounded">
              {tag}
            </span>
          ))}
        </div>
        <h2 className="text-white text-2xl font-extrabold ">
          {project.projectName}
        </h2>
        <p className="text-gray-600 text-sm mt-2">{project.date}</p>
      </div>
      <button
        className="absolute top-4 right-4 text-2xl font-bold text-gray-600 hover:text-black transition-colors"
        onClick={onClose}
      >
        &times;
      </button>
      <div className="flex flex-col items-center bg-white pt-8 mt-[45px] h-full w-full relative overflow-y-auto">
        <Image
          src={project.image}
          alt={project.projectName}
          className="rounded mb-4 object-cover"
          width={650}
          height={350}
        />
        <p className="text-gray-600 my-8 w-[650px]">{project.desc}</p>

        <div className="mb-20 w-full flex flex-col items-center gap-2">
          <p className="font-bold text-2xl my-3">🛠️ {t("tech-stack-title")}</p>
          {project.techStacks.map((stack, index) => (
            <div
              key={index}
              className="flex items-center justify-center w-[70%] bg-gray-200 py-2"
            >
              <p className="">{stack}</p>
            </div>
          ))}
        </div>

        <div className="mb-20 w-full flex flex-col items-center gap-2">
          <p className="font-bold text-2xl my-3">
            💫{t("project-1-problem-title")}
          </p>

          <div className="w-[70%] text-start flex flex-col gap-y-3">
            <li className="text-sm">
              <span className="font-bold">{t("project-1-problem-name")}</span>{" "}
              {t("project-1-problem")}
            </li>

            <li className="text-sm">
              <span className="font-bold">{t("project-1-solve-name")}</span>{" "}
              {t("project-1-solve")}
            </li>

            <li className="text-sm">
              <span className="font-bold">{t("project-1-result-name")}</span>{" "}
              {t("project-1-result")}
            </li>
          </div>
        </div>
        <div className="mb-20 w-full flex flex-col items-center gap-2">
          <p className="font-bold text-2xl my-3">
            💻 {t("project-1-img-title")}
          </p>
        </div>

        {project.liveLink && (
          <Link
            href={project.liveLink}
            target="_blank"
            className="text-blue-500 hover:underline"
          >
            Visit Live Project
          </Link>
        )}
      </div>
    </div>
  );
}

export default ProjectModal;
