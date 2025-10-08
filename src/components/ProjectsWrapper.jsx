import Image from "next/image";
import { projectsJson } from "./projects-json.js";
import Link from "next/link.js";
import ProjectModal from "./ProjectModal.jsx";
import { useState } from "react";

function ProjectsWrapper({ t }) {
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };
  return (
    <div className="grid grid-cols-3 w-[950px] gap-8 ">
      {projectsJson.map((project, i) => (
        <div
          key={i}
          className="group relative grid items-start justify-between mt-10 rounded border border-gray-400 p-4 hover:bg-gray-200"
        >
          <div
            className="absolute inset-0 backdrop-blur-none group-hover:backdrop-blur-xs transition-all duration-400 z-10"
            style={{ background: "rgba(0, 0, 0, 0)" }}
          ></div>
          <div className="relative max-w-72 ">
            {project.wrapperImage && (
              <Image
                src={project.wrapperImage}
                alt="Project Image 1"
                className="rounded"
                width={280}
                height={280}
              />
            )}
            <h1 className="text-2xl font-extrabold mt-4">
              {project.wrapperProject}
            </h1>
            <p className="mt-2 text-gray-600 text-xs tracking-[0.5px] font-light ">
              {t(`project-${i + 1}`)}
            </p>
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
            <div className="h-[100px] flex flex-col justify-between">
              <button
                onClick={() => openModal(project)}
                className=" px-4 py-2 bg-black rounded text-white hover:bg-black/80 cursor-pointer
              "
              >
                자세히 보기
              </button>
              <button
                className="px-4 py-2 bg-black rounded text-white hover:bg-black/80 cursor-pointer
              "
              >
                GitHub
              </button>
            </div>
          </div>
        </div>
      ))}
      <ProjectModal
        selectedProject={selectedProject}
        onClose={closeModal}
        t={t}
      />
    </div>
  );
}

export default ProjectsWrapper;
