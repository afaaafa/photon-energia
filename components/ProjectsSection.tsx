"use client";

import { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectFade, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import imagesMap from '@/public/usinas/images-map.json';

const ProjectsSection = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedProject, setSelectedProject] = useState<{
    images: string[];
    category: string;
  } | null>(null);

  // Função para obter todos os projetos do mapeamento
  const getAllProjects = () => {
    const projects = [];
    
    // Industrial
    for (const [key, value] of Object.entries(imagesMap.industrial)) {
      projects.push({
        images: value.images,
        category: "Industrial"
      });
    }
    
    // Residencial
    for (const [key, value] of Object.entries(imagesMap.residencial)) {
      projects.push({
        images: value.images,
        category: "Residencial"
      });
    }
    
    // Rural
    for (const [key, value] of Object.entries(imagesMap.rural)) {
      projects.push({
        images: value.images,
        category: "Rural"
      });
    }
    
    return projects;
  };

  const allProjects = getAllProjects();

  const handleImageClick = (image: string, project: typeof allProjects[0]) => {
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
      <section id="projetos" className="relative bg-background">
        {/* Divisor estilizado */}
        <div className="absolute top-0 left-0 right-0">
          <div className="h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
          <div className="h-24 bg-gradient-to-b from-primary/5 to-transparent" />
        </div>

        <div className="pt-24 pb-16 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="heading-hero text-3xl md:text-4xl text-text-primary mb-4 font-bold">
                Projetos Concluídos ✅ 
              </h2>
              <p className="body-text text-lg text-text-secondary max-w-3xl mx-auto">
                Conheça alguns dos nossos projetos de energia solar, realizados com
                excelência e compromisso com a sustentabilidade
              </p>
            </div>

            {/* Projects Carousel */}
            <div className="relative">
              <Swiper
                modules={[Navigation, Pagination, EffectFade, Autoplay]}
                navigation
                pagination={{ clickable: true }}
                slidesPerView={1}
                spaceBetween={20}
                className="pb-12 project-swiper"
                loop={true}
                speed={800}
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                breakpoints={{
                  640: {
                    slidesPerView: 2,
                  },
                  1024: {
                    slidesPerView: 3,
                  },
                }}
              >
                {allProjects.map((project, projectIndex) => (
                  <SwiperSlide key={projectIndex}>
                    <div className="group bg-background-alt rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl border border-primary/10">
                      {/* Project Images Carousel */}
                      <div className="relative h-64">
                        <Swiper
                          modules={[EffectFade, Autoplay]}
                          effect="fade"
                          fadeEffect={{ crossFade: true }}
                          className="h-full"
                          loop={true}
                          speed={500}
                          autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                          }}
                        >
                          {project.images.map((image, imageIndex) => (
                            <SwiperSlide key={imageIndex}>
                              <div 
                                className="relative h-full w-full cursor-pointer"
                                onClick={() => handleImageClick(image, project)}
                              >
                                <Image
                                  src={image}
                                  alt={`Projeto ${project.category} - Imagem ${imageIndex + 1}`}
                                  fill
                                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                  quality={90}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                              </div>
                            </SwiperSlide>
                          ))}
                        </Swiper>
                      </div>

                      {/* Category Tag */}
                      <div className="absolute top-4 left-4 z-10">
                        <span className="px-3 py-1 text-xs font-semibold bg-primary text-text-primary rounded-full shadow-lg">
                          {project.category}
                        </span>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/95"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-text-primary hover:text-primary transition-colors duration-300"
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

          {/* Navigation Buttons */}
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 text-text-primary hover:text-primary transition-colors duration-300"
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
            className="absolute right-4 top-1/2 -translate-y-1/2 text-text-primary hover:text-primary transition-colors duration-300"
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