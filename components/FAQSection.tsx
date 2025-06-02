'use client';

import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "Placas de energia solar: vale a pena investir neste tipo de equipamento?",
    answer: "Sim, o investimento em energia solar é altamente vantajoso. Além da economia significativa na conta de energia (redução de até 95%), você contribui para a sustentabilidade ambiental. O sistema tem vida útil de 25 anos e oferece retorno financeiro em média entre 3 a 5 anos, dependendo do seu consumo e região."
  },
  {
    question: "Em dias sem sol, as placas continuam gerando energia?",
    answer: "Sim, os painéis solares continuam gerando energia mesmo em dias nublados, embora com eficiência reduzida. O sistema é dimensionado considerando essas variações climáticas, e através do sistema de créditos da energia injetada na rede, você mantém seu fornecimento mesmo em dias com menor produção."
  },
  {
    question: "São necessárias muitas manutenções?",
    answer: "Não, o sistema fotovoltaico requer manutenção mínima. Recomenda-se apenas a limpeza periódica dos painéis (2 a 3 vezes por ano) e inspeções preventivas anuais para garantir o máximo desempenho. O sistema é robusto e projetado para funcionar por décadas com pouca intervenção."
  },
  {
    question: "Em quanto tempo terei retorno do meu investimento?",
    answer: "O tempo médio de retorno do investimento (payback) varia entre 3 a 5 anos, dependendo de fatores como consumo de energia, tarifa local e condições de irradiação solar. Após esse período, você terá décadas de economia substancial na conta de energia, com um sistema que continua gerando por 25 anos ou mais."
  }
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-background relative">
      {/* Divisor superior */}
      <div className="absolute top-0 left-0 right-0">
        <div className="h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        <div className="h-24 bg-gradient-to-b from-primary/5 to-transparent" />
      </div>

      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6">
            <span className="text-primary text-sm font-semibold tracking-wider uppercase">
              FAQ
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Dúvidas frequentes
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Encontre respostas para as perguntas mais comuns sobre energia solar
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-background-alt rounded-xl overflow-hidden border border-primary/10 transition-all duration-300 hover:border-primary/20"
              onClick={() => toggleFAQ(index)}
            >
              <button
                className="w-full px-6 py-4 text-left flex items-center justify-between focus:outline-none group"
              >
                <span className="font-medium text-text-primary">{faq.question}</span>
                <svg
                  className={`w-6 h-6 text-primary transform transition-transform duration-200 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 pb-4">
                  <p className="text-text-secondary">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection; 