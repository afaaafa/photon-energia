"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

const slides = [
  {
    id: 1,
    image: "/banners/hero-solucoes.jpeg",
    title: "Energia Solar",
    subtitle: "Transformando o Futuro",
    description:
      "Soluções sustentáveis em energia solar para residências, comércios e indústrias",
    gradient: "from-emerald-900/40 via-emerald-800/30 to-emerald-900/60",
    accent: "emerald",
  },
  {
    id: 2,
    image: "/banners/hero-treinamentos.jpeg",
    title: "Treinamentos",
    subtitle: "Capacitação Profissional",
    description:
      "Forme-se com os melhores especialistas do mercado em energia fotovoltaica",
    gradient: "from-blue-900/40 via-blue-800/30 to-blue-900/60",
    accent: "blue",
  },
  {
    id: 3,
    image: "/banners/hero-sustentabilidade.jpg",
    title: "Sustentabilidade",
    subtitle: "Compromisso com o Futuro",
    description: "Junte-se a nós na missão de criar um mundo mais sustentável",
    gradient: "from-green-900/40 via-green-800/30 to-green-900/60",
    accent: "green",
  },
  {
    id: 4,
    image: "/banners/hero-eficiencia.jpg",
    title: "Eficiência Energética",
    subtitle: "Otimização e Economia",
    description:
      "Maximize o uso da energia e minimize custos com nossas soluções",
    gradient: "from-orange-900/40 via-orange-800/30 to-orange-900/60",
    accent: "orange",
  },
  {
    id: 5,
    image: "/banners/hero-iluminacoes.jpg",
    title: "Iluminação Industrial",
    subtitle: "Segurança e Economia",
    description:
      "Iluminação inteligente e eficiente para ambientes industriais",
    gradient: "from-purple-900/40 via-purple-800/30 to-purple-900/60",
    accent: "purple",
  },
];

const HeroSection = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleSlideChange = (swiper: SwiperType) => {
    setActiveSlide(swiper.activeIndex);
  };

  const goToSlide = (index: number) => {
    if (swiperInstance) {
      swiperInstance.slideTo(index);
    }
  };

  return (
    <section id="home" className="relative w-full h-screen overflow-hidden">
      {/* Background pattern overlay */}
      <div className="absolute inset-0 z-[1] opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent"></div>
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
                             radial-gradient(circle at 75% 75%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)`,
          }}
        ></div>
      </div>

      <Swiper
        modules={[Autoplay, EffectFade, Navigation, Pagination]}
        effect="fade"
        speed={1500}
        fadeEffect={{
          crossFade: true,
        }}
        navigation={{
          nextEl: ".hero-button-next",
          prevEl: ".hero-button-prev",
        }}
        autoplay={{
          delay: 7000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        onSwiper={setSwiperInstance}
        onSlideChange={handleSlideChange}
        className="w-full h-full"
        loop={true}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={slide.id} className="relative">
            {/* Background Image with Ken Burns Effect */}
            <div className="absolute inset-0 overflow-hidden">
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                className={`object-cover transition-transform duration-[12000ms] ease-out scale-105 hover:scale-110`}
                priority={slide.id === 1}
                quality={100}
              />
              
              {/* Gradient Overlays */}
              <div className={`absolute inset-0 bg-gradient-to-br ${slide.gradient}`} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/20" />
            </div>

            {/* Content */}
            <div className="relative z-10 h-full flex items-center justify-center">
              <div className="container mx-auto px-6 lg:px-8 text-center">
                <div className="max-w-6xl mx-auto">
                  {/* Animated Badge */}
                  <div 
                    className={`inline-flex items-center px-8 py-4 mb-8 rounded-full backdrop-blur-md border transition-all duration-1000 ${
                      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`}
                    style={{
                      background: 'rgba(255, 255, 255, 0.1)',
                      borderColor: 'rgba(255, 255, 255, 0.2)',
                      transitionDelay: '0.2s'
                    }}
                  >
                    <div className="relative">
                      <div className="w-3 h-3 bg-white rounded-full mr-4 animate-pulse"></div>
                      <div className="absolute inset-0 w-3 h-3 bg-white rounded-full mr-4 animate-ping"></div>
                    </div>
                    <span className="text-white/90 text-sm font-semibold tracking-widest uppercase letterspacing">
                      {slide.subtitle}
                    </span>
                  </div>

                  {/* Main Title */}
                  <h1 
                    className={`text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-none transition-all duration-1000 ${
                      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                    }`}
                    style={{ 
                      textShadow: '0 4px 20px rgba(0, 0, 0, 0.5)',
                      transitionDelay: '0.4s'
                    }}
                  >
                    <span className="block bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent">
                      {slide.title}
                    </span>
                  </h1>

                  {/* Description */}
                  <p 
                    className={`text-xl sm:text-2xl md:text-3xl text-white/80 mb-12 max-w-4xl mx-auto leading-relaxed transition-all duration-1000 ${
                      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`}
                    style={{ 
                      textShadow: '0 2px 10px rgba(0, 0, 0, 0.5)',
                      transitionDelay: '0.6s'
                    }}
                  >
                    {slide.description}
                  </p>

                  {/* Action Buttons */}
                  <div 
                    className={`flex flex-col sm:flex-row gap-6 justify-center items-center transition-all duration-1000 ${
                      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`}
                    style={{ transitionDelay: '0.8s' }}
                  >
                    <a
                      href="https://wa.me/553199595991?text=Olá,%20vi%20seu%20site%20e%20quero%20fazer%20um%20orçamento."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative inline-flex items-center px-10 py-5 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white text-lg font-bold rounded-full transition-all duration-500 shadow-2xl hover:shadow-emerald-500/25 hover:scale-105 transform overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <svg className="w-6 h-6 mr-4 relative z-10" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.515z"/>
                      </svg>
                      <span className="relative z-10">Solicitar Orçamento</span>
                      <svg
                        className="w-6 h-6 ml-4 transition-transform duration-500 group-hover:translate-x-2 relative z-10"
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
                      href="#solucoes"
                      className="group inline-flex items-center px-10 py-5 bg-white/10 backdrop-blur-md text-white text-lg font-semibold rounded-full border-2 border-white/30 hover:bg-white/20 hover:border-white/50 transition-all duration-500"
                    >
                      <span>Saiba mais</span>
                      <svg
                        className="w-6 h-6 ml-4 transition-transform duration-500 group-hover:translate-y-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 14l-7 7m0 0l-7-7m7 7V3"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* Navigation Buttons - Ocultos no mobile, visíveis apenas em tablet+ */}
        <button className="hero-button-prev group absolute left-4 md:left-8 top-1/2 transform -translate-y-1/2 z-30 w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 backdrop-blur-xl bg-white/10 border border-white/20 text-white rounded-full hover:bg-white/20 hover:border-white/40 hover:scale-110 transition-all duration-500 shadow-2xl hidden sm:flex items-center justify-center">
          <svg className="w-5 h-5 md:w-7 md:h-7 lg:w-8 lg:h-8 transition-transform duration-300 group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button className="hero-button-next group absolute right-4 md:right-8 top-1/2 transform -translate-y-1/2 z-30 w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 backdrop-blur-xl bg-white/10 border border-white/20 text-white rounded-full hover:bg-white/20 hover:border-white/40 hover:scale-110 transition-all duration-500 shadow-2xl hidden sm:flex items-center justify-center">
          <svg className="w-5 h-5 md:w-7 md:h-7 lg:w-8 lg:h-8 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </Swiper>

      {/* Custom Slide Indicators */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-30 flex space-x-4">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`relative group transition-all duration-500 ${
              activeSlide === index
                ? 'w-12 h-3'
                : 'w-3 h-3 hover:w-6'
            }`}
          >
            <div
              className={`absolute inset-0 rounded-full backdrop-blur-md transition-all duration-500 ${
                activeSlide === index
                  ? 'bg-white shadow-lg shadow-white/25'
                  : 'bg-white/40 hover:bg-white/60'
              }`}
            />
            {activeSlide === index && (
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-400 to-emerald-500 animate-pulse" />
            )}
          </button>
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <div className="flex flex-col items-center space-y-2">
          <div className="w-8 h-12 border-2 border-white/40 rounded-full flex justify-center backdrop-blur-sm">
            <div className="w-1.5 h-4 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
          <span className="text-white/60 text-xs font-medium tracking-wider uppercase">Scroll</span>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 z-20 opacity-20">
        <div className="w-4 h-4 bg-white rounded-full animate-float"></div>
      </div>
      <div className="absolute top-32 right-16 z-20 opacity-20">
        <div className="w-6 h-6 bg-white rounded-full animate-float-delayed"></div>
      </div>
      <div className="absolute bottom-32 left-20 z-20 opacity-20">
        <div className="w-3 h-3 bg-white rounded-full animate-float-slow"></div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-30px); }
        }
        
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 5s ease-in-out infinite;
          animation-delay: 1s;
        }
        
        .animate-float-slow {
          animation: float-slow 6s ease-in-out infinite;
          animation-delay: 2s;
        }

        .letterspacing {
          letter-spacing: 0.2em;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;