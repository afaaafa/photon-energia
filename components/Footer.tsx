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
    <footer className="bg-background border-t border-primary/10">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
          {/* Menu */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-text-primary">MENUS</h3>
            <ul className="space-y-3">
              <li>
                <a href="/" className="text-text-secondary hover:text-primary transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#projetos" className="text-text-secondary hover:text-primary transition-colors">
                  Projetos
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/553199595991?text=Ol%C3%A1,%20quero%20um%20or%C3%A7amento!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-secondary hover:text-primary transition-colors"
                >
                  Orçamento
                </a>
              </li>
              <li>
                <a href="#sobre" className="text-text-secondary hover:text-primary transition-colors">
                  Sobre a Photon
                </a>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-text-primary">CONTATO</h3>
            <ul className="space-y-4">
              <li className="flex items-center justify-center md:justify-start text-text-secondary">
                <MapPin className="mr-3 text-primary" size={20} />
                <span className="text-sm">
                  Rua Cônsul Robert Levy, n° 1.010, 
                  São Bento 30350-710 – Belo Horizonte – MG
                </span>
              </li>
              <li className="flex items-center justify-center md:justify-start text-text-secondary">
                <Phone className="mr-3 text-primary" size={20} />
                <span className="text-sm">(31) 3291-9143</span>
              </li>
              <li className="flex items-center justify-center md:justify-start text-text-secondary">
                <Mail className="mr-3 text-primary" size={20} />
                <span className="text-sm">comercial@photonenergia.com.br</span>
              </li>
            </ul>
          </div>

          {/* Redes Sociais */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-text-primary">REDES SOCIAIS</h3>
            <div className="flex justify-center md:justify-start space-x-4">
              <a
                href="https://www.facebook.com/photonenergia/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-button-secondary border border-primary/20 rounded-full hover:bg-primary/10 transition-colors"
              >
                <Facebook className="text-primary" size={20} />
              </a>
              <a
                href="https://www.instagram.com/photonenergiasolar/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-button-secondary border border-primary/20 rounded-full hover:bg-primary/10 transition-colors"
              >
                <Instagram className="text-primary" size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/jose-euclides-correa-758452a4/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-button-secondary border border-primary/20 rounded-full hover:bg-primary/10 transition-colors"
              >
                <Linkedin className="text-primary" size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-text-secondary/10 text-center">
          <p className="text-text-secondary text-sm">
            © {new Date().getFullYear()} Photon Energia. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
