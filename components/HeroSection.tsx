"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";

const slides = [
  {
    id: 1,
    image: "/banners/hero-solucoes.jpeg",
    title: "Energia Solar",
    subtitle: "Transformando o Futuro",
    description:
      "Soluções sustentáveis em energia solar para residências, comércios e indústrias",
  },
  {
    id: 2,
    image: "/banners/hero-treinamentos.jpeg",
    title: "Treinamentos",
    subtitle: "Capacitação Profissional",
    description:
      "Forme-se com os melhores especialistas do mercado em energia fotovoltaica",
  },
  {
    id: 3,
    image: "/banners/hero-sustentabilidade.jpg",
    title: "Sustentabilidade",
    subtitle: "Compromisso com o Futuro",
    description: "Junte-se a nós na missão de criar um mundo mais sustentável",
  },
  {
    id: 4,
    image: "/banners/hero-eficiencia.jpg",
    title: "Eficiência Energética",
    subtitle: "Otimização e Economia",
    description:
      "Maximize o uso da energia e minimize custos com nossas soluções",
  },
  {
    id: 5,
    image: "/banners/hero-iluminacoes.jpg",
    title: "Iluminação Industrial",
    subtitle: "Segurança e Economia",
    description:
      "Iluminação inteligente e eficiente para ambientes industriais",
  },
];

const HeroSection = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);

  useEffect(() => {
    // Reset zoom state
    setIsZoomed(false);

    // Apply zoom effect after a short delay
    const timer = setTimeout(() => {
      setIsZoomed(true);
    }, 100);

    return () => clearTimeout(timer);
  }, [activeSlide]);

  return (
    <section className="relative w-full">
      <Swiper
        modules={[Autoplay, EffectFade, Navigation]}
        effect="fade"
        speed={1000}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        onSlideChange={(swiper) => {
          setActiveSlide(swiper.activeIndex);
          setIsZoomed(false);
        }}
        className="h-[500px] md:h-[600px]"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id} className="relative">
            <div className="absolute inset-0">
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                className={`object-cover transition-transform duration-[5000ms] ease-out ${
                  isZoomed ? "scale-110" : "scale-100"
                }`}
                priority={slide.id === 1}
                quality={100}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
            </div>

            <div className="relative z-10 h-full flex items-center">
              <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto text-center">
                  <h2 className="subheading-hero text-4xl md:text-5xl text-white mb-4 opacity-0 translate-y-8 animate-fade-up">
                    {slide.subtitle}
                  </h2>
                  <h1 className="heading-hero text-5xl md:text-7xl text-white mb-6 opacity-0 translate-y-8 animate-fade-up animation-delay-200">
                    {slide.title}
                  </h1>
                  <p className="body-text text-xl text-white/90 mb-8 opacity-0 translate-y-8 animate-fade-up animation-delay-400">
                    {slide.description}
                  </p>
                  <a
                    href="/orcamento"
                    className="body-text inline-flex items-center px-6 py-3 border border-white/20 text-base font-medium rounded-full text-white bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 opacity-0 translate-y-8 animate-fade-up animation-delay-600"
                  >
                    Solicite seu orçamento
                    <svg
                      className="w-4 h-4 ml-2"
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
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* Navigation Buttons */}
        <div className="swiper-button-prev !text-white !w-14 !h-14 !bg-black/30 !rounded-full hover:!bg-black/50 transition-colors"></div>
        <div className="swiper-button-next !text-white !w-14 !h-14 !bg-black/30 !rounded-full hover:!bg-black/50 transition-colors"></div>
      </Swiper>
    </section>
  );
};

export default HeroSection;
