"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/autoplay";

const partners = [
  { src: "/partners/logo-aldo.jpg", alt: "Aldo" },
  { src: "/partners/logo-belenergy.jpg", alt: "Belenergy" },
  { src: "/partners/logo-belmicro.jpg", alt: "Belmicro" },
  { src: "/partners/logo-corsolar.jpg", alt: "Corsolar" },
  { src: "/partners/logo-dah-solar.jpg", alt: "DAH Solar" },
  { src: "/partners/logo-fortlev.jpg", alt: "Fortlev" },
  { src: "/partners/logo-fronius.jpg", alt: "Fronius" },
  { src: "/partners/logo-huawei.jpg", alt: "Huawei" },
  { src: "/partners/logo-jasolar.jpg", alt: "JA Solar" },
  { src: "/partners/logo-jinko.jpg", alt: "Jinko" },
  { src: "/partners/logo-sbsolar.jpg", alt: "SB Solar" },
  { src: "/partners/logo-sma.jpg", alt: "SMA" },
  { src: "/partners/logo-solis-inverters.jpg", alt: "Solis Inverters" },
  { src: "/partners/logo-sunova.jpg", alt: "Sunova" },
  { src: "/partners/logo-trinasolar.jpg", alt: "Trina Solar" },
  { src: "/partners/logo-znshine.jpg", alt: "Znshine" },
  { src: "/partners/logo_weg.jpg", alt: "WEG" },
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
