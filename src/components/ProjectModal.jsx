import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import ProjectImageModal from "./ProjectImageModal";
import { GitHubIconNavbar, LinkIcon } from "./icons";

function ProjectModal({ selectedProject, onClose, t }) {
  const [selectedImage, setSelectedImage] = useState(null);

  // Блокировка прокрутки страницы при открытом изображении
  //   useEffect(() => {
  //     if (selectedImage) {
  //       document.body.style.overflow = "hidden";
  //     } else {
  //       document.body.style.overflow = "unset";
  //     }
  //     return () => {
  //       document.body.style.overflow = "unset";
  //     };
  //   }, [selectedImage]);

  if (!selectedProject) return null;

  //   const handleImageClick = (image) => {
  //     setSelectedImage(image);
  //   };

  //   const handleCloseImage = () => {
  //     setSelectedImage(null);
  //   };

  return (
    <>
      <div className="fixed h-[100vh] inset-0 bg-[#080808] bg-opacity-50 flex flex-col items-center justify-center z-50 transition-opacity duration-300">
        <div className="py-8">
          <button
            className="absolute top-4 right-4 text-2xl font-bold text-gray-600 transition-colors cursor-pointer"
            onClick={onClose}
            aria-label="Close modal"
          >
            &times;
          </button>

          <div className="text-center">
            {selectedProject.tags?.length > 0 && (
              <div className="text-black text-sm mb-3 flex justify-center gap-2 flex-wrap">
                {selectedProject.tags.map((tag, i) => (
                  <span key={i} className="bg-gray-100 px-2 py-1 rounded">
                    {tag}
                  </span>
                ))}
              </div>
            )}
            <h2 className="text-white text-2xl font-extrabold">
              {selectedProject.projectName || "Unnamed Project"}
            </h2>
            <p className="text-gray-600 text-sm mt-2">
              {selectedProject.date || ""}
            </p>
          </div>
        </div>

        <div className="bg-white p-6 relative w-full max-h-[90vh] overflow-auto">
          {selectedProject.wrapperImage && (
            <Image
              src={selectedProject.wrapperImage}
              alt={selectedProject.projectName || "Project image"}
              className="rounded mb-4 object-cover w-full max-w-[650px] mx-auto"
              width={650}
              height={350}
              priority
            />
          )}

          <p className="text-gray-600 my-8 w-full max-w-[650px] mx-auto">
            {t(`project-${selectedProject.id}`) || "No description available."}
          </p>

          {(selectedProject.githubLink || selectedProject.sitelink) && (
            <div className="flex justify-center gap-4 mb-8">
              {selectedProject.githubLink && (
                <Link
                  href={selectedProject.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-1/3"
                >
                  <div className="flex justify-center items-center rounded border border-gray-300 px-4 py-2 hover:bg-gray-100 transition-colors gap-x-1.5">
                    <span className="w-4 h-4">{GitHubIconNavbar}</span>
                    {"GitHub"}
                  </div>
                </Link>
              )}
              {selectedProject.sitelink && (
                <Link
                  href={selectedProject.sitelink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-1/3"
                >
                  <div className="flex justify-center items-center rounded border border-gray-300 px-4 py-2 hover:bg-gray-100 transition-colors gap-x-2">
                    <span className="w-4 h-4">{LinkIcon}</span>
                    {"Demo Link"}
                  </div>
                </Link>
              )}
            </div>
          )}

          {selectedProject.techStacks?.length > 0 && (
            <div className="mb-12 w-full flex flex-col items-center gap-2">
              <p className="font-bold text-2xl my-3">
                🛠️ {t("tech-stack-title") || "Tech Stack"}
              </p>
              {selectedProject.techStacks.map((stack, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center w-full max-w-[70%] bg-gray-200 py-2"
                >
                  <p>{stack}</p>
                </div>
              ))}
            </div>
          )}

          {selectedProject.id && (
            <div className="mb-12 w-full flex flex-col items-center gap-2">
              <p className="font-bold text-2xl my-3">
                💫 {t("project-problem-title") || "Trouble Shooting"}
              </p>
              <ul className="w-full max-w-[70%] text-start flex flex-col gap-y-3">
                <li className="text-sm">
                  <span className="font-bold">
                    {t("project-problem-name") || "[문제점]"}:
                  </span>{" "}
                  {t(`project-${selectedProject.id}-problem`) ||
                    "No problem description provided."}
                </li>
                <li className="text-sm">
                  <span className="font-bold">
                    {t("project-solve-name") || "[해결]"}:
                  </span>{" "}
                  {t(`project-${selectedProject.id}-solve`) ||
                    "No solution description provided."}
                </li>
                <li className="text-sm">
                  <span className="font-bold">
                    {t("project-result-name") || "[결과]"}:
                  </span>{" "}
                  {t(`project-${selectedProject.id}-result`) ||
                    "No result description provided."}
                </li>
              </ul>
            </div>
          )}

          {selectedProject.images?.length > 0 && (
            <div className="mb-12 w-full flex flex-col items-center gap-2">
              <p className="font-bold text-2xl my-3">
                💻 {t("project-img-title") || "Project Images"}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {selectedProject.images.map((image, index) => (
                  <div className="cursor-pointer" key={index}>
                    <Image
                      src={image}
                      alt={`Project image ${index + 1}`}
                      className="object-cover rounded"
                      width={200}
                      height={200}
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default ProjectModal;
