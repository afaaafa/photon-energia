'use client';

import Image from 'next/image';
import { Home, Building2, Tractor } from 'lucide-react';

interface SolutionCardProps {
  title: string;
  description: string;
  imageSrc: string;
  icon: React.ReactNode;
}

const SolutionCard = ({ title, description, imageSrc, icon }: SolutionCardProps) => {
  return (
    <div className="relative bg-background-alt rounded-2xl overflow-hidden shadow-xl border border-primary/10">
      <div className="relative h-56 w-full overflow-hidden">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
        
        <div className="absolute top-4 right-4 z-20">
          <div className="p-3 bg-primary rounded-xl shadow-lg border border-primary/20">
            {icon}
          </div>
        </div>
      </div>
      
      <div className="relative z-20 p-8">
        <h3 className="text-2xl font-bold text-text-primary mb-4">
          {title}
        </h3>
        <p className="text-text-secondary leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

export default function SolutionsSection() {
  const solutions = [
    {
      title: "Residencial",
      description: "Transforme sua casa em uma fonte de energia sustentável com painéis solares e diminua significativamente os custos da sua conta de luz.",
      imageSrc: "/usinas/residencial/residencial_01/1.jpeg",
      icon: <Home className="w-6 h-6 text-text-primary" />
    },
    {
      title: "Industrial",
      description: "Impulsione seu negócio com energia solar. Além de economizar mais, estará demonstrando seu compromisso com a responsabilidade ambiental.",
      imageSrc: "/usinas/industrial/sempel/1.jpeg",
      icon: <Building2 className="w-6 h-6 text-text-primary" />
    },
    {
      title: "Agronegócio",
      description: "Amplie a produtividade com a adoção de energia solar, garantindo ainda mais eficiência energética e maior sustentabilidade no campo.",
      imageSrc: "/usinas/rural/rural_paineras/1.jpeg",
      icon: <Tractor className="w-6 h-6 text-text-primary" />
    }
  ];

  return (
    <section id="solucoes" className="py-32 bg-background relative overflow-hidden border-t border-primary/10">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/50 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6">
            <span className="text-primary text-sm font-semibold tracking-wider uppercase">
              Soluções
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6 leading-tight">
            Energia solar para
            <span className="block text-primary">
              todas as necessidades
            </span>
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Descubra como nossa tecnologia solar pode transformar seu consumo energético
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 mb-20">
          {solutions.map((solution, index) => (
            <SolutionCard
              key={index}
              title={solution.title}
              description={solution.description}
              imageSrc={solution.imageSrc}
              icon={solution.icon}
            />
          ))}
        </div>
        
        <div className="text-center">
          <a
            href="https://wa.me/553199595991?text=Olá,%20vi%20seu%20site%20e%20quero%20fazer%20um%20orçamento."
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full font-semibold shadow-lg shadow-blue-600/20 hover:shadow-blue-600/40 transition-all duration-300 hover:scale-105 hover:brightness-110"
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-shimmer" />
            
            <svg 
              className="w-5 h-5 animate-pulse" 
              fill="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm6.067 16.943c-.183.521-.537.972-1.053 1.323-1.246.826-3.94.598-5.392.365-2.464-.39-4.954-1.42-6.833-3.014-.478-.404-.91-.822-1.306-1.27-.667-.756-1.23-1.596-1.627-2.495-.536-1.214-.824-2.466-.872-3.755.004-.99.193-1.973.557-2.889.221-.556.506-1.075.849-1.571.55-.795 1.275-1.44 2.067-1.899C5.05 1.516 5.68 1.292 6.326 1.2c.296-.041.597.013.879.159.418.214.72.611.919 1.017.327.669.664 1.337.999 2.002.087.168.162.342.198.526.052.262.034.533-.052.784-.169.49-.419.965-.621 1.451-.077.186-.088.393-.033.587.528 1.482 1.53 2.732 2.838 3.541.203.124.432.186.663.178.332-.012.654-.11.924-.287l1.018-.664c.326-.214.715-.329 1.109-.344.372.004.738.086 1.071.248.742.36 1.485.716 2.23 1.071.293.14.559.334.769.579.285.331.488.727.586 1.149.096.415.138.841.123 1.267.035.634-.114 1.264-.431 1.813z"/>
            </svg>
            <span className="relative">Quero Economizar com Energia Solar</span>
          </a>
          
          <p className="text-text-secondary text-sm mt-4">
            Resposta rápida • Comprometimento • Transparência
          </p>
        </div>
      </div>
    </section>
  );
}
