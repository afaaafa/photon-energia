"use client";

import { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectFade, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const hospitalImages = [
  '/usinas/industrial/hospital_abaete/1.jpg',
  '/usinas/industrial/hospital_abaete/2.jpg',
  '/usinas/industrial/hospital_abaete/3.jpg',
  '/usinas/industrial/hospital_abaete/4.jpg',
  '/usinas/industrial/hospital_abaete/5.jpg',
  '/usinas/industrial/hospital_abaete/6.jpg',
  '/usinas/industrial/hospital_abaete/7.jpg',
  '/usinas/industrial/hospital_abaete/8.jpg',
];

const HospitalSection = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  return (
    <section className="py-16 bg-background relative">
      {/* Gradiente de fundo */}
      <div className="absolute inset-0 bg-gradient-complex opacity-5"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6">
            <span className="text-primary text-sm font-semibold tracking-wider uppercase">
              Caso de Sucesso
            </span>
          </div>
          <h2 className="heading-hero text-3xl md:text-4xl text-text-primary mb-4 font-bold">
            Projeto Hospital São Vicente de Paulo
          </h2>
          <p className="body-text text-lg text-text-secondary max-w-3xl mx-auto">
            Um projeto especial que transformou o Hospital de Abaeté em uma referência
            em sustentabilidade e eficiência energética na cidade
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Imagem de Capa */}
          <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-xl border border-primary/10">
            <Image
              src="/hospital.jpg"
              alt="Hospital de Abaeté"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
              quality={90}
            />
          </div>

          {/* Carrossel de Imagens */}
          <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-xl border border-primary/10">
            <Swiper
              modules={[Navigation, Pagination, EffectFade, Autoplay]}
              navigation
              pagination={{ clickable: true }}
              effect="fade"
              fadeEffect={{ crossFade: true }}
              className="h-full project-swiper"
              loop={true}
              speed={500}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
            >
              {hospitalImages.map((image, index) => (
                <SwiperSlide key={index}>
                  <div 
                    className="relative h-full w-full cursor-pointer"
                    onClick={() => setSelectedIndex(index)}
                  >
                    <Image
                      src={image}
                      alt={`Hospital de Abaeté - Imagem ${index + 1}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      priority={index === 0}
                      quality={90}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        {/* Informações do Projeto */}
        <div className="mt-12 grid md:grid-cols-2 gap-8">
          <div className="bg-background-alt p-6 rounded-xl border border-primary/10">
            <div className="flex items-center gap-3 mb-3">
              <svg
                className="w-6 h-6 text-primary"
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
              <h3 className="heading-hero text-xl text-text-primary font-semibold">Potência Instalada</h3>
            </div>
            <p className="body-text text-text-secondary">75 kWp</p>
          </div>
          <div className="bg-background-alt p-6 rounded-xl border border-primary/10">
            <div className="flex items-center gap-3 mb-3">
              <svg
                className="w-6 h-6 text-primary"
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
              <h3 className="heading-hero text-xl text-text-primary font-semibold">Localização</h3>
            </div>
            <p className="body-text text-text-secondary">Abaeté, MG</p>
          </div>
        </div>
      </div>

      {/* Modal de Imagem com Navegação */}
      {selectedIndex !== null && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/95"
          onClick={() => setSelectedIndex(null)}
        >
          {/* Conteúdo do modal */}
          <div 
            className="relative w-full h-full max-w-7xl max-h-[90vh] p-4 flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Botão Fechar */}
            <button
              className="absolute top-4 right-4 text-text-primary hover:text-primary transition-colors duration-300 z-10"
              onClick={() => setSelectedIndex(null)}
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Botão Anterior */}
            <button
              className="absolute left-4 text-text-primary hover:text-primary transition-colors duration-300 z-10"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedIndex((prev) =>
                  prev === 0 ? hospitalImages.length - 1 : (prev ?? 0) - 1
                );
              }}
            >
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M15 19l-7-7 7-7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            {/* Botão Próximo */}
            <button
              className="absolute right-4 text-text-primary hover:text-primary transition-colors duration-300 z-10"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedIndex((prev) =>
                  prev === hospitalImages.length - 1 ? 0 : (prev ?? 0) + 1
                );
              }}
            >
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M9 5l7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            {/* Imagem no modal */}
            <div className="relative w-full h-full">
              <Image
                src={hospitalImages[selectedIndex]}
                alt={`Imagem ${selectedIndex + 1}`}
                fill
                className="object-contain"
                quality={100}
                priority
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default HospitalSection;
