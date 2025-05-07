"use client";

import { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectFade, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import { projects } from "@/app/data/projects";

const ProjectsSection = () => {
  const [activeTab, setActiveTab] = useState<"residential" | "commercial">("residential");
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  const filteredProjects = projects.filter((project) => project.type === activeTab);

  const handleImageError = (imagePath: string) => {
    setImageErrors((prev) => ({ ...prev, [imagePath]: true }));
  };

  const handleImageClick = (image: string, project: typeof projects[0]) => {
    setSelectedImage(image);
    setSelectedProject(project);
  };

  const handleNextImage = () => {
    if (!selectedProject || !selectedImage) return;
    
    const currentIndex = selectedProject.images.indexOf(selectedImage);
    const nextIndex = (currentIndex + 1) % selectedProject.images.length;
    setSelectedImage(selectedProject.images[nextIndex]);
  };

  const handlePrevImage = () => {
    if (!selectedProject || !selectedImage) return;
    
    const currentIndex = selectedProject.images.indexOf(selectedImage);
    const prevIndex = (currentIndex - 1 + selectedProject.images.length) % selectedProject.images.length;
    setSelectedImage(selectedProject.images[prevIndex]);
  };

  return (
    <>
      <section id="projetos" className="py-12 md:py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="heading-hero text-2xl md:text-4xl text-gray-900 mb-3 md:mb-4">
              Alguns de nossos projetos
            </h2>
            <p className="body-text text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Conheça alguns dos nossos projetos de energia solar, realizados com
              excelência e compromisso com a sustentabilidade
            </p>
          </div>

          {/* Tabs */}
          <div className="flex justify-center mb-6 md:mb-8">
            <div className="inline-flex rounded-full p-1 bg-white shadow-md">
              <button
                onClick={() => setActiveTab("residential")}
                className={`px-4 md:px-6 py-2 rounded-full text-xs md:text-sm font-medium transition-all duration-300 ${
                  activeTab === "residential"
                    ? "bg-[#2ecc71] text-white"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Residencial
              </button>
              <button
                onClick={() => setActiveTab("commercial")}
                className={`px-4 md:px-6 py-2 rounded-full text-xs md:text-sm font-medium transition-all duration-300 ${
                  activeTab === "commercial"
                    ? "bg-[#2ecc71] text-white"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Empresarial
              </button>
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1"
              >
                {/* Image Carousel */}
                <div className="relative h-48 md:h-64">
                  <Swiper
                    modules={[Navigation, Pagination, EffectFade, Autoplay]}
                    navigation
                    pagination={{ clickable: true }}
                    effect="fade"
                    fadeEffect={{ crossFade: true }}
                    className="h-full"
                    loop={true}
                    speed={500}
                    autoplay={{
                      delay: 3000,
                      disableOnInteraction: false,
                      pauseOnMouseEnter: true,
                    }}
                  >
                    {project.images.map((image, index) => (
                      !imageErrors[image] && (
                        <SwiperSlide key={index}>
                          <div 
                            className="relative h-full w-full cursor-pointer"
                            onClick={() => handleImageClick(image, project)}
                          >
                            <Image
                              src={image}
                              alt={`${project.name} - Imagem ${index + 1}`}
                              fill
                              className="object-cover transition-transform duration-500 group-hover:scale-105"
                              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                              priority={index === 0}
                              onError={() => handleImageError(image)}
                              quality={90}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          </div>
                        </SwiperSlide>
                      )
                    ))}
                  </Swiper>
                </div>

                {/* Project Info */}
                <div className="p-4 md:p-6">
                  <h3 className="heading-hero text-lg md:text-xl text-gray-900 mb-2">
                      {project.name}
                  </h3>
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2 md:gap-4 text-sm text-gray-500">
                    <span className="flex items-center">
                      <svg
                        className="w-4 h-4 mr-1 text-[#2ecc71]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      {project.city}
                    </span>
                    <span className="flex items-center">
                      <svg
                        className="w-4 h-4 mr-1 text-[#2ecc71]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                      </svg>
                      {project.power}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal de Imagem */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors duration-300"
            onClick={() => setSelectedImage(null)}
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* Botões de Navegação */}
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors duration-300"
            onClick={(e) => {
              e.stopPropagation();
              handlePrevImage();
            }}
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors duration-300"
            onClick={(e) => {
              e.stopPropagation();
              handleNextImage();
            }}
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          <div 
            className="relative w-full h-full max-w-7xl max-h-[90vh] p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedImage}
              alt="Imagem em tela cheia"
              fill
              className="object-contain"
              quality={100}
              priority
            />
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectsSection; 