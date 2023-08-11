import React from "react";
import Image from "next/image";

interface Project {
  title: string;
  description: string;
  image: string;
  details: string;
  link: string;
}

interface ProjectModalProps {
  project: Project;

  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div
          className="fixed inset-0 backdrop-blur-md backdrop-filter saturate-150"
          aria-hidden="true"
        ></div>
        <span
          className="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        >
          &#8203;
        </span>
        <div className="inline-block align-bottom bg-opacity-80 backdrop-blur-md bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <div className="bg-opacity-80 backdrop-blur-md bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="sm:flex sm:items-start">
              <div className="mt-3 text-center sm:mt-0 sm:text-left w-full">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  {project.title}
                </h3>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">{project.details}</p>
                </div>
                <div className="mt-2">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="w-full h-100 object-cover"
                    width={800}
                    height={800}
                  />
                </div>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">
                    👉{" "}
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:font-bold"
                    >
                      {project.link}
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-opacity-80 backdrop-blur-md bg-gray-50 px-4 py-3 sm:px-6 flex justify-end">
            <button
              onClick={onClose}
              className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-gray-500 text-base font-medium text-white hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600 sm:ml-3 sm:w-auto sm:text-sm"
            >
              Fermer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
