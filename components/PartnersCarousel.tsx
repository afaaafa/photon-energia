"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/autoplay";

const partners = [
  { src: "/partners/logo-absolar.jpg", alt: "Absolar" },
  { src: "/partners/logo-aldo.jpg", alt: "Aldo" },
  { src: "/partners/logo-bv-financeira.jpg", alt: "BV Financeira" },
  { src: "/partners/logo-cmu.jpg", alt: "CMU" },
  { src: "/partners/logo-ecori.jpg", alt: "Ecori" },
  { src: "/partners/logo-loja-eletrica.jpg", alt: "Loja Elétrica" },
  { src: "/partners/logo-minha-casa-solar.jpg", alt: "Minha Casa Solar" },
  { src: "/partners/logo-portal-solar.jpg", alt: "Portal Solar" },
  { src: "/partners/logo-sices.jpg", alt: "Sices" },
  { src: "/partners/logo-weg.jpg", alt: "WEG" },
];

const PartnersSection: React.FC = () => {
  return (
    <div className="w-full py-12 flex justify-center">
      <div className="w-[60%]">
        <h2 className="text-3xl font-extrabold text-center mb-6">
          Nossos Parceiros
        </h2>

        <Swiper
          modules={[Autoplay]}
          spaceBetween={0}
          slidesPerView="auto"
          centeredSlides={true}
          loop={true}
          speed={2000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          className="partners-swiper w-full"
        >
          {partners.map(({ src, alt }, index) => (
            <SwiperSlide
              key={index}
              className="!w-auto flex items-center justify-center mx-4"
            >
              <div className="max-w-[150px] grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100">
                <Image
                  src={src}
                  alt={alt}
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
