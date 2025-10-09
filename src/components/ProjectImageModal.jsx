import Image from "next/image";
import React from "react";

function ProjectImageModal({ selectedImage, handleCloseImage }) {
  return (
    <>
      {selectedImage && (
        <div
          className="fixed inset-0 bg-[#080808] bg-opacity-80 flex items-center justify-center z-[100] transition-opacity duration-300"
          onClick={handleCloseImage}
        >
          <div className="relative max-w-[60vw] max-h-[60vh]">
            <button
              className="absolute top-4 right-4 text-3xl font-bold text-white hover:text-gray-300 transition-colors"
              onClick={handleCloseImage}
              aria-label="Close image"
            >
              &times;
            </button>
            <Image
              src={selectedImage}
              alt="Enlarged project image"
              className="rounded object-contain"
              width={1200}
              height={800}
              style={{ maxWidth: "50vw", maxHeight: "50vh" }}
            />
          </div>
        </div>
      )}
    </>
  );
}

export default ProjectImageModal;
