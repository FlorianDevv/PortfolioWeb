import { Key, useState } from "react";
import ProjectModal from "../Components/modal";
import ProjectCard from "../Components/projectCard";
import { useTranslations } from "next-intl";

import Project from "../Data/Iproject";
export default function Projetview() {
  const t = useTranslations("");
  const projects: Project[] = [
    "AnimeSaver",
    "BetterSurvival",
    "ChatbotSpring",
  ].map((key) => ({
    title: t(`Project.${key}.title`),
    description: t(`Project.${key}.description`),
    image: t(`Project.${key}.image`),
    details: t(`Project.${key}.details`),
    link: t(`Project.${key}.link`),
  }));
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedProject(null);
  };

  return (
    <section className="w-full flex flex-col items-center bg-[url(../image/bd-project.svg)] bg-cover bg-center">
      <h1 className="text-5xl font-bold mb-6 mt-4 text-[#ccf381] drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,2.0)]">
        {t("Project-text.title")}
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2  gap-4">
        {projects.map((project: Project, index: Key | null | undefined) => (
          <ProjectCard
            key={index}
            project={project}
            onClick={() => handleProjectClick(project)}
          />
        ))}
        <h1 className="text-4xl font-bold mt-12 mb-8 text-[#ccf381] drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,2.0)]">
          {t("Project-text.more")}
        </h1>
      </div>
      {showModal && selectedProject && (
        <ProjectModal project={selectedProject} onClose={closeModal} />
      )}
    </section>
  );
}
