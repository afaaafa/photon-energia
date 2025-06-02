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
  <div className="group relative bg-gradient-to-b from-background-alt to-background/80 border border-primary/10 rounded-xl p-6 transition-all duration-300 hover:border-primary/30">
    {/* Efeito de brilho no hover */}
    <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
    
    <div className="relative">
      <div className="flex items-center mb-4">
        <div className="p-2 rounded-lg bg-primary/10 mr-4">
          <Icon className="text-primary" size={32} />
        </div>
        <h3 className="text-xl font-bold text-text-primary">{title}</h3>
      </div>
      <p className="text-text-secondary mb-6">{description}</p>
      <ul className="space-y-3">
        {features.map((feature: any, index: any) => (
          <li key={index} className="flex items-start text-text-secondary group-hover:text-text-primary transition-colors duration-300">
            <CheckCircle2 size={18} className="mr-3 text-primary shrink-0 mt-1" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
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
    <section className="relative">
      {/* Gradiente de fundo principal */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      
      {/* Efeitos decorativos */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-20" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-20" />
      </div>

      {/* Gradiente de transição superior */}
      <div className="absolute top-0 left-0 right-0">
        <div className="h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        <div className="h-24 bg-gradient-to-b from-primary/5 to-transparent" />
      </div>

      <div className="relative pt-24 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6">
              <span className="text-primary text-sm font-semibold tracking-wider uppercase">
                Mercado Livre
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6 leading-tight">
              Migre para o Mercado Livre de Energia
              <span className="block text-primary mt-2">com a Photon</span>
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              Reduza Custos e Tenha Mais Controle Sobre sua Energia. A Photon
              Energia te ajuda a migrar para o mercado livre de energia,
              garantindo economia, segurança e total conformidade com as
              exigências regulatórias.
            </p>
          </div>

          {/* Seção explicativa sobre o Mercado Livre de Energia */}
          <div className="bg-gradient-to-br from-background-alt/80 to-background-alt border border-primary/10 rounded-2xl p-8 mb-16 backdrop-blur-sm">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-text-primary to-primary bg-clip-text text-transparent">
                O que é o Mercado Livre de Energia?
              </h3>
              <p className="text-text-secondary mb-6 leading-relaxed">
                É o direito adquirido pelas empresas de médio e grande porte de
                negociar a compra de energia. Esse mercado ainda não é aberto a
                clientes residenciais ou a pequenos comerciantes, para ter acesso
                a ele é necessária uma demanda contratada de{" "}
                <span className="font-bold text-primary">500 KW</span>.
              </p>
              <h4 className="text-xl font-semibold mb-4 text-text-primary">
                Benefícios
              </h4>
              <ul className="space-y-4">
                <li className="flex items-start text-text-secondary">
                  <div className="p-1 rounded-full bg-primary/10 mr-3">
                    <CheckCircle2 size={20} className="text-primary" />
                  </div>
                  <span>Melhores preços e um aumento da previsibilidade nos negócios.</span>
                </li>
                <li className="flex items-start text-text-secondary">
                  <div className="p-1 rounded-full bg-primary/10 mr-3">
                    <CheckCircle2 size={20} className="text-primary" />
                  </div>
                  <span>No mercado cativo, o consumidor não possui controle sobre o
                  custo do insumo, diferentemente do mercado livre.</span>
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
      </div>
    </section>
  );
}
