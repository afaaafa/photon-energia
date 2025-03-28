import React from "react";
import {
  CheckCircle2,
  TrendingUp,
  Shield,
  InfoIcon,
  BarChart2,
  Target,
} from "lucide-react";

const ServiceCard = ({ icon: Icon, title, description, features }: any) => (
  <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 transition-all duration-300 hover:bg-white/20 hover:shadow-xl">
    <div className="flex items-center mb-4">
      <Icon className="text-blue-400 mr-4" size={40} />
      <h3 className="text-xl font-bold text-white">{title}</h3>
    </div>
    <p className="text-gray-300 mb-4">{description}</p>
    <ul className="space-y-2">
      {features.map((feature: any, index: any) => (
        <li key={index} className="flex items-center text-gray-200">
          <CheckCircle2 size={16} className="mr-2 text-blue-300" />
          {feature}
        </li>
      ))}
    </ul>
  </div>
);

export default function ServicesSection() {
  const services = [
    {
      icon: TrendingUp,
      title: "Migração Simplificada",
      description:
        "Realizamos um estudo de viabilidade para identificar o potencial de economia e cuidamos de todo o processo de migração.",
      features: [
        "Verificação dos requisitos técnicos e regulatórios",
        "Celebração de contratos de energia com fornecedores",
        "Atendimento a todas as exigências legais",
      ],
    },
    {
      icon: Shield,
      title: "Suporte Especializado",
      description:
        "Fornecemos estudos regulatórios e análises de mercado para orientar suas decisões e otimizar seus investimentos em energia.",
      features: [
        "Obtenção de autorizações para operação e comercialização",
        "Contratação do acesso junto à distribuidora ou transmissora local",
      ],
    },
    {
      icon: InfoIcon,
      title: "Atualização Contínua",
      description:
        "Mantenha-se sempre informado sobre o mercado de energia com nossos serviços especializados.",
      features: [
        "Treinamentos especializados",
        "Relatórios e estudos detalhados",
        "Informativo mensal com análises e atualizações regulatórias",
      ],
    },
    {
      icon: BarChart2,
      title: "Representação na CCEE",
      description:
        "Cuidamos de toda a operação no mercado livre, garantindo sua conformidade e eficiência.",
      features: [
        "Adesão e modelagem dos ativos de consumo e geração",
        "Registros e ajustes contratuais",
        "Conferência e validação dos dados de consumo",
        "Apuração dos resultados financeiros",
      ],
    },
    {
      icon: Target,
      title: "Gestão Inteligente de Energia",
      description:
        "Otimize sua contratação e reduza riscos com nossa gestão especializada.",
      features: [
        "Balanços mensais de consumo e geração",
        "Oportunidades comerciais no mercado livre",
        "Compra e venda de energia no curto prazo",
        "Análise e recomendação das melhores estratégias de contratação",
      ],
    },
  ];

  return (
    <section className="bg-[#1e1e1e] py-16 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-[#5ab7de]">
            Migre para o Mercado Livre de Energia com a Photon
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Reduza Custos e Tenha Mais Controle Sobre sua Energia. A Photon
            Energia te ajuda a migrar para o mercado livre de energia,
            garantindo economia, segurança e total conformidade com as
            exigências regulatórias.
          </p>
        </div>

        {/* Seção explicativa sobre o Mercado Livre de Energia */}
        <div className="bg-white/5 border border-white/10 rounded-xl p-8 mb-12">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-[#5ab7de]">
              O que é o Mercado Livre de Energia?
            </h3>
            <p className="text-gray-300 mb-4">
              É o direito adquirido pelas empresas de médio e grande porte de
              negociar a compra de energia. Esse mercado ainda não é aberto a
              clientes residenciais ou a pequenos comerciantes, para ter acesso
              a ele é necessária uma demanda contratada de{" "}
              <span className="font-bold text-blue-300">500 KW</span>.
            </p>
            <h4 className="text-xl font-semibold mb-4 text-blue-300">
              Benefícios
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-300">
                <CheckCircle2 size={20} className="mr-3 text-blue-400" />
                Melhores preços e um aumento da previsibilidade nos negócios.
              </li>
              <li className="flex items-center text-gray-300">
                <CheckCircle2 size={20} className="mr-3 text-blue-400" />
                No mercado cativo, o consumidor não possui controle sobre o
                custo do insumo, diferentemente do mercado livre.
              </li>
            </ul>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              features={service.features}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
