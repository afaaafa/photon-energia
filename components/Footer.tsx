"use client";

import React from "react";
import {
  Mail,
  MapPin,
  Phone,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#5ab7de] text-white py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
        {/* Menu */}
        <div>
          <h3 className="text-xl font-semibold mb-4">MENUS</h3>
          <ul className="space-y-2 text-lg">
            <li>
              <a href="/" className="hover:text-gray-200 transition">
                Home
              </a>
            </li>
            <li>
              <a href="#projetos" className="hover:text-gray-200 transition">
                Projetos
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/553199595991?text=Ol%C3%A1,%20quero%20um%20or%C3%A7amento!"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-200 transition"
              >
                Orçamento
              </a>
            </li>
            <li>
              <a href="#sobre" className="hover:text-gray-200 transition">
                Sobre a Photon
              </a>
            </li>
          </ul>
        </div>

        {/* Contato */}
        <div>
          <h3 className="text-xl font-semibold mb-4">CONTATO</h3>
          <ul className="space-y-4 text-lg">
            <li className="flex items-center justify-center md:justify-start">
              <MapPin className="mr-3" size={22} />
              Rua Cônsul Robert Levy, n° 1.010, 
              São Bento 30350-710 – Belo Horizonte – MG
            </li>
            <li className="flex items-center justify-center md:justify-start">
              <Phone className="mr-3" size={22} />
              (31) 3291-9143
            </li>
            <li className="flex items-center justify-center md:justify-start">
              <Mail className="mr-3" size={22} />
              comercial@photonenergia.com.br
            </li>
          </ul>
        </div>

        {/* Redes Sociais */}
        <div>
          <h3 className="text-xl font-semibold mb-4">REDES SOCIAIS</h3>
          <div className="flex justify-center md:justify-start space-x-6">
            <a
              href="https://www.facebook.com/photonenergia/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/20 rounded-full hover:bg-white/30 transition"
            >
              <Facebook className="text-white" size={26} />
            </a>
            <a
              href="https://www.instagram.com/photonenergiasolar/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/20 rounded-full hover:bg-white/30 transition"
            >
              <Instagram className="text-white" size={26} />
            </a>
            <a
              href="https://www.linkedin.com/in/jose-euclides-correa-758452a4/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/20 rounded-full hover:bg-white/30 transition"
            >
              <Linkedin className="text-white" size={26} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
