"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  location: string;
  capacity: string;
  images: string[];
  link: string;
}

const ProjectCard = ({
  title,
  description,
  location,
  capacity,
  images,
  link,
}: ProjectCardProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const previousImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div
        className="relative h-64"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Image
          src={images[currentImageIndex]}
          alt={`${title} - Imagem ${currentImageIndex + 1}`}
          fill
          className="object-cover"
        />
        {images.length > 1 && (
          <>
            <button
              onClick={previousImage}
              className={`absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md transition-all duration-300 ${
                isHovered
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-4"
              }`}
              aria-label="Imagem anterior"
            >
              <svg
                className="w-5 h-5 text-gray-800"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={nextImage}
              className={`absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md transition-all duration-300 ${
                isHovered
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-4"
              }`}
              aria-label="Próxima imagem"
            >
              <svg
                className="w-5 h-5 text-gray-800"
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
            </button>
            <div
              className={`absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1 transition-opacity duration-300 ${
                isHovered ? "opacity-100" : "opacity-0"
              }`}
            >
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentImageIndex ? "bg-white" : "bg-white/50"
                  }`}
                  aria-label={`Ir para imagem ${index + 1}`}
                />
              ))}
            </div>
          </>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
          <span>{location}</span>
          <span>{capacity}</span>
        </div>
        <Link
          href={link}
          className="inline-flex items-center text-[#2ecc71] hover:text-[#27ae60] transition-colors"
        >
          Ver mais detalhes
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
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
