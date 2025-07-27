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
        category: "Agronegócio"
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
      <section id="projetos" className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
        {/* Background Effects */}
        <div className="absolute inset-0">
          {/* Gradient Orbs */}
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-32 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/15 to-pink-500/15 rounded-full blur-3xl animate-pulse delay-1000" />
          <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-full blur-3xl animate-pulse delay-2000" />
          
          {/* Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
        </div>

        <div className="relative pt-24 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-6">
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                  <span className="text-primary text-sm font-semibold tracking-wider uppercase">
                    Projetos Concluídos
                  </span>
              </div>
              
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-white via-blue-100 to-cyan-200 bg-clip-text text-transparent">
                  Energia Solar
                </span>
                <br />
                <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                  em Ação
                </span>
              </h2>
              
              <p className="text-lg text-white/70 max-w-3xl mx-auto leading-relaxed">
                Descubra nossos projetos de energia solar implementados com excelência, 
                transformando residências, indústrias e agronegócios em fontes de energia limpa
              </p>
            </div>

            {/* Projects Carousel */}
            <div className="relative">
              <Swiper
                modules={[Navigation, Pagination, EffectFade, Autoplay]}
                navigation={{
                  prevEl: '.custom-prev',
                  nextEl: '.custom-next',
                }}
                pagination={{ 
                  clickable: true,
                  bulletClass: 'swiper-pagination-bullet !bg-white/30 !w-3 !h-3',
                  bulletActiveClass: 'swiper-pagination-bullet-active !bg-emerald-400',
                }}
                slidesPerView={1}
                spaceBetween={24}
                className="pb-16 project-swiper"
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
                    <div className="group relative">
                      {/* Glow Effect */}
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-2xl blur opacity-0 group-hover:opacity-75 transition-opacity duration-300" />
                      
                      {/* Card */}
                      <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden transition-all duration-300 hover:bg-white/10 hover:border-white/20">
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
                                  className="relative h-full w-full cursor-pointer group/image"
                                  onClick={() => handleImageClick(image, project)}
                                >
                                  <Image
                                    src={image}
                                    alt={`Projeto ${project.category} - Imagem ${imageIndex + 1}`}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover/image:scale-110"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    quality={90}
                                  />
                                  
                                  {/* Overlay */}
                                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover/image:opacity-100 transition-opacity duration-300" />
                                  
                                  {/* Zoom Icon */}
                                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/image:opacity-100 transition-opacity duration-300">
                                    <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 flex items-center justify-center">
                                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                                      </svg>
                                    </div>
                                  </div>
                                </div>
                              </SwiperSlide>
                            ))}
                          </Swiper>
                        </div>

                        {/* Category Tag */}
                        <div className="absolute top-4 left-4 z-10">
                          <span className="px-4 py-1.5 text-sm font-semibold bg-gradient-to-r from-blue-500/90 to-indigo-500/90 backdrop-blur-sm text-white rounded-full border border-white/20 shadow-lg shadow-blue-500/10 hover:shadow-blue-500/20 transition-all duration-300">
                            {project.category}
                          </span>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Custom Navigation */}
              <button className="custom-prev absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 group">
                <svg className="w-6 h-6 group-hover:-translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <button className="custom-next absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 group">
                <svg className="w-6 h-6 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          {/* Close Button */}
          <button
            className="absolute top-6 right-6 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 group z-20"
            onClick={() => setSelectedImage(null)}
          >
            <svg className="w-6 h-6 group-hover:rotate-90 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Navigation Buttons */}
          <button
            className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 group z-20"
            onClick={(e) => {
              e.stopPropagation();
              handlePrevImage();
            }}
          >
            <svg className="w-6 h-6 group-hover:-translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 group z-20"
            onClick={(e) => {
              e.stopPropagation();
              handleNextImage();
            }}
          >
            <svg className="w-6 h-6 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Image Container */}
          <div 
            className="relative w-full h-full max-w-7xl max-h-[90vh] p-8"
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

          {/* Category Badge in Modal */}
          {selectedProject && (
            <div className="absolute top-6 left-6 z-20">
              <span className="px-4 py-1.5 text-sm font-semibold bg-gradient-to-r from-blue-500/90 to-indigo-500/90 backdrop-blur-sm text-white rounded-full border border-white/20 shadow-lg shadow-blue-500/10">
                {selectedProject.category}
              </span>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default ProjectsSection;
