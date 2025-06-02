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
    setIsZoomed(false);
    const timer = setTimeout(() => {
      setIsZoomed(true);
    }, 100);
    return () => clearTimeout(timer);
  }, [activeSlide]);

  return (
    <section className="relative w-full bg-gradient-to-b from-[#0e0e0e] to-[#1a1a1a]">
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
        className="h-[600px] md:h-[800px]"
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
              <div className="absolute inset-0 bg-gradient-to-b from-[#0e0e0e]/90 via-[#0e0e0e]/70 to-[#1a1a1a]" />
            </div>

            <div className="relative z-10 h-full flex items-center">
              <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center">
                  <div className="inline-flex items-center px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6 opacity-0 translate-y-8 animate-fade-up">
                    <span className="text-primary text-sm font-semibold tracking-wider uppercase">
                      {slide.subtitle}
                    </span>
                  </div>
                  <h1 className="heading-hero text-5xl md:text-7xl text-white mb-8 opacity-0 translate-y-8 animate-fade-up animation-delay-200 font-bold tracking-tight">
                    {slide.title}
                  </h1>
                  <p className="body-text text-xl text-[#B0B0B0] mb-10 opacity-0 translate-y-8 animate-fade-up animation-delay-400 max-w-2xl mx-auto leading-relaxed">
                    {slide.description}
                  </p>
                  <div className="flex gap-6 justify-center opacity-0 translate-y-8 animate-fade-up animation-delay-600">
                    <a
                      href="https://wa.me/553199595991?text=Olá,%20vi%20seu%20site%20e%20quero%20fazer%20um%20orçamento."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-8 py-4 bg-primary hover:bg-[#4596b2] text-white text-lg font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-primary/20"
                    >
                      Solicite seu orçamento
                      <svg
                        className="w-5 h-5 ml-2"
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
                    <a
                      href="/sobre"
                      className="inline-flex items-center px-8 py-4 bg-[#222222] text-white text-lg font-semibold rounded-full border-2 border-primary hover:bg-primary/10 transition-all duration-300"
                    >
                      Saiba mais
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* Navigation Buttons */}
        <div className="swiper-button-prev !text-primary !w-14 !h-14 !bg-[#0e0e0e]/80 !rounded-full hover:!bg-[#1a1a1a] transition-colors"></div>
        <div className="swiper-button-next !text-primary !w-14 !h-14 !bg-[#0e0e0e]/80 !rounded-full hover:!bg-[#1a1a1a] transition-colors"></div>
      </Swiper>
    </section>
  );
};

export default HeroSection;
