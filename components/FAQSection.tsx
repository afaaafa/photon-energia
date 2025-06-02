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
    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">
          Dúvidas frequentes
        </h2>
        <div className="w-16 h-1 bg-[#5ab7de] mx-auto mb-12"></div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden"
              onClick={() => toggleFAQ(index)}
            >
              <button
                className="w-full px-6 py-4 text-left flex items-center justify-between focus:outline-none group"
              >
                <span className="font-medium text-gray-900">{faq.question}</span>
                <svg
                  className={`w-6 h-6 text-[#5ab7de] transform transition-transform duration-200 ${
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
                  <p className="text-gray-600">{faq.answer}</p>
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