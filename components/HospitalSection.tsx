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
  '/usinas/empresas/hospital-abaete/1.jpg',
  '/usinas/empresas/hospital-abaete/2.jpg',
  '/usinas/empresas/hospital-abaete/3.jpg',
  '/usinas/empresas/hospital-abaete/4.jpg',
  '/usinas/empresas/hospital-abaete/5.jpg',
  '/usinas/empresas/hospital-abaete/6.jpg',
  '/usinas/empresas/hospital-abaete/7.jpg',
  '/usinas/empresas/hospital-abaete/8.jpg',
];

const HospitalSection = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="heading-hero text-3xl md:text-4xl text-gray-900 mb-4">
            Projeto Hospital São Vicente de Paulo
          </h2>
          <p className="body-text text-lg text-gray-600 max-w-3xl mx-auto">
            Um projeto especial que transformou o Hospital de Abaeté em uma referência
            em sustentabilidade e eficiência energética na cidade
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Imagem de Capa */}
          <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-xl">
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
          <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-xl">
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
              {hospitalImages.map((image, index) => (
                <SwiperSlide key={index}>
                  <div 
                    className="relative h-full w-full cursor-pointer"
                    onClick={() => setSelectedImage(image)}
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
          <div className="bg-gray-50 p-6 rounded-xl">
            <div className="flex items-center gap-3 mb-3">
              <svg
                className="w-6 h-6 text-green-600"
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
              <h3 className="heading-hero text-xl text-gray-900">Potência Instalada</h3>
            </div>
            <p className="body-text text-gray-600">75 kWp</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-xl">
            <div className="flex items-center gap-3 mb-3">
              <svg
                className="w-6 h-6 text-green-600"
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
              <h3 className="heading-hero text-xl text-gray-900">Localização</h3>
            </div>
            <p className="body-text text-gray-600">Abaeté, MG</p>
          </div>
        </div>
      </div>

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
    </section>
  );
};

export default HospitalSection; 