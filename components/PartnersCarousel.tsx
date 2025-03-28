"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// Importações de estilos do Swiper
import "swiper/css";
import "swiper/css/autoplay";

// Lista de logos (substitua pelos seus arquivos reais)
const partners = [
  "/partners/logo-absolar.jpg",
  "/partners/logo-aldo.jpg",
  "/partners/logo-bv-financeira.jpg",
  "/partners/logo-cmu.jpg",
  "/partners/logo-ecori.jpg",
  "/partners/logo-loja-eletrica.jpg",
  "/partners/logo-minha-casa-solar.jpg",
  "/partners/logo-portal-solar.jpg",
  "/partners/logo-sices.jpg",
  "/partners/logo-weg.jpg",
];

const PartnersSection: React.FC = () => {
  return (
    <div className="w-full py-12 bg-gray-50 flex justify-center">
      <div className="w-[60%]">
        <h2 className="text-3xl font-extrabold text-gray-800 text-center mb-6">
          Nossos Parceiros
        </h2>

        <Swiper
          modules={[Autoplay]}
          spaceBetween={0}
          slidesPerView="auto"
          centeredSlides={true}
          loop={true}
          speed={2000} // Velocidade de transição mais rápida
          autoplay={{
            delay: 0, // Reduz o tempo entre transições
            disableOnInteraction: false,
            pauseOnMouseEnter: true, // Pausa ao passar o mouse
          }}
          className="partners-swiper w-full"
        >
          {partners.map((logo, index) => (
            <SwiperSlide
              key={index}
              className="!w-auto flex items-center justify-center mx-4"
            >
              <div className="max-w-[150px] grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100">
                <Image
                  src={logo}
                  alt={`Parceiro ${index + 1}`}
                  width={120}
                  height={80}
                  className="max-h-20 object-contain"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default PartnersSection;
