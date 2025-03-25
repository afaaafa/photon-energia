import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { MapPin, Users, ArrowRight } from 'lucide-react';

const ProjectCard = ({
  title,
  description,
  location,
  capacity,
  images,
  link,
}: any) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const previousImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <motion.div 
      className="group bg-white rounded-xl border border-gray-200 overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative h-56 overflow-hidden">
        <Image
          src={images[currentImageIndex]}
          alt={`${title} - Imagem ${currentImageIndex + 1}`}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        
        {images.length > 1 && (
          <div className="absolute inset-0 flex items-center justify-between p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <motion.button
              onClick={previousImage}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="bg-white/80 backdrop-blur-sm p-2 rounded-full shadow-md"
              aria-label="Imagem anterior"
            >
              <ArrowRight className="w-5 h-5 text-gray-800 rotate-180" />
            </motion.button>
            <motion.button
              onClick={nextImage}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="bg-white/80 backdrop-blur-sm p-2 rounded-full shadow-md"
              aria-label="Próxima imagem"
            >
              <ArrowRight className="w-5 h-5 text-gray-800" />
            </motion.button>
          </div>
        )}
        
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {images.map((_:any, index:any) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentImageIndex ? "bg-white" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>
      
      <div className="p-6 space-y-4">
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-2 truncate">{title}</h3>
          <p className="text-gray-600 line-clamp-2">{description}</p>
        </div>
        
        <div className="flex items-center justify-between text-sm text-gray-500 space-x-4">
          <div className="flex items-center space-x-2">
            <MapPin className="w-4 h-4 text-[#5ab7de] hover:text-[#4aa0c4]" />
            <span className="truncate max-w-[150px]">{location}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Users className="w-4 h-4 text-green-500" />
            <span>{capacity}</span>
          </div>
        </div>
        
        <Link
          href={link}
          className="group/link flex items-center text-[#5ab7de] hover:text-[#4aa0c4] font-semibold transition-colors"
        >
          Ver mais detalhes
          <ArrowRight 
            className="w-4 h-4 ml-2 transition-transform group-hover/link:translate-x-1" 
          />
        </Link>
      </div>
    </motion.div>
  );
};

export default ProjectCard;