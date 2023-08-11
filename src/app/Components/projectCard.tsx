import Image from "next/image";
import Project from "../Data/Iproject";
import { useTranslations } from "next-intl";

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

export default function ProjectCard({ project, onClick }: ProjectCardProps) {
  return (
    <div
      className="m-1 bg-opacity-20 backdrop-blur-md bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer transform transition-transform hover:scale-105 "
      onClick={onClick}
    >
      <Image
        src={project.image}
        alt={project.title}
        className="w-full object-cover"
        width={200}
        height={200}
      />{" "}
      <div className="p-2">
        <h3 className="text-lg font-bold mb-2 break-words text-[#ccf381] lg:text-2xl">
          {project.title}
        </h3>
        <p className=" text-white lg:text-xl">{project.description}</p>
      </div>
    </div>
  );
}
