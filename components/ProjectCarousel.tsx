"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import ProjectCard from "./ProjectCard";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const projects = [
  {
    id: 1,
    title: "Projeto Residencial Solar",
    description:
      "Instalação de sistema fotovoltaico em residência de alto padrão",
    images: [
      "/projects/marta-oliveira/1.jpg",
      "/projects/marta-oliveira/2.jpg",
      "/projects/marta-oliveira/3.jpg",
      "/projects/marta-oliveira/4.jpg",
      "/projects/marta-oliveira/5.jpg",
    ],
    location: "Belo Horizonte, MG",
    capacity: "5.5 kWp",
    link: "/projetos/residencial-1",
  },
  {
    id: 2,
    title: "Projeto Comercial",
    description: "Sistema solar para empresa de médio porte",
    images: [
      "/projects/joao-kleber/1.jpg",
      "/projects/joao-kleber/2.jpg",
      "/projects/joao-kleber/3.jpg",
    ],
    location: "São Paulo, SP",
    capacity: "15 kWp",
    link: "/projetos/comercial-1",
  },
  {
    id: 3,
    title: "Projeto Industrial",
    description: "Implementação de energia solar em fábrica",
    images: [
      "/projects/fernando-macedo/1.jpg",
      "/projects/fernando-macedo/2.jpg",
      "/projects/fernando-macedo/3.jpg",
    ],
    location: "Rio de Janeiro, RJ",
    capacity: "50 kWp",
    link: "/projetos/industrial-1",
  },
];

const ProjectCarousel = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Nossos Projetos Recentes
          </h2>
          <p className="text-lg text-gray-600">
            Conheça alguns dos nossos projetos de energia solar
          </p>
        </div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          loop={true}
          speed={800}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="project-swiper"
        >
          {projects.map((project) => (
            <SwiperSlide key={project.id}>
              <ProjectCard {...project} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ProjectCarousel;
