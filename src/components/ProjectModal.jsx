import Image from "next/image";
import Link from "next/link"; // Добавляем импорт Link
import React from "react";

function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 bg-[#080808] bg-opacity-50 flex flex-col items-center justify-center z-50 transition-opacity duration-300 shadow">
      <div className="mt-10">
        <div className="text-black text-sm mb-3 flex justify-center gap-2">
          {project.tags?.map((tag, i) => (
            <span key={i} className=" bg-gray-600 px-2 py-1 rounded">
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
      <div className="bg-white mt-[45px] h-full w-full relative overflow-y-auto">
        <Image
          src={project.image}
          alt={project.projectName}
          className="rounded mb-4 w-full object-cover"
          width={500}
          height={300}
        />
        <p className="text-gray-600 mb-4">
          {project.fullDescription || "Здесь подробное описание проекта."}
        </p>
        {project.features && (
          <ul className="list-disc pl-5 mb-4">
            {project.features.map((feature, index) => (
              <li key={index} className="text-gray-600">
                {feature}
              </li>
            ))}
          </ul>
        )}
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
