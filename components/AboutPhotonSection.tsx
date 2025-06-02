"use client";

import React from "react";
import { motion } from "framer-motion";

const AboutPhotonSection: React.FC = () => {
  return (
    <section id="sobre" className="bg-background py-16 px-4 relative">
      {/* Gradiente de fundo */}
      <div className="absolute inset-0 bg-gradient-complex opacity-5"></div>
      
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center relative">
        {/* Vídeo com animação */}
        <motion.div
          className="relative w-full h-64 md:h-[400px] rounded-xl overflow-hidden shadow-lg border border-primary/10"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <video
            src="/photon.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent"></div>
        </motion.div>

        {/* Texto com animação */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative z-10"
        >
          <h2 className="text-3xl text-center font-bold text-text-primary mb-6">
            Sobre a Photon
          </h2>
          <p className="text-text-secondary text-lg leading-relaxed">
            A Photon nasceu com o propósito de democratizar o acesso à energia
            solar no Brasil. Somos apaixonados por tecnologia, sustentabilidade
            e por oferecer soluções que fazem sentido para o presente e o
            futuro. <br />
            <br />
            Nosso compromisso vai além da instalação de sistemas solares —
            estamos aqui para transformar a relação das pessoas com a energia.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutPhotonSection;
