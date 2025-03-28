"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sun, GaugeCircle, Ruler, Zap } from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import SolarSimulator from "./SolarSImulator";

interface ResultData {
  necessaryPower: number;
  systemPower: number;
  annualEnergyProduction: number;
  panelQuantity: number;
  minimumArea: number;
}

const SolarSimulatorSection: React.FC = () => {
  const [result, setResult] = React.useState<ResultData | null>(null);

  return (
    <section className="bg-gradient-to-br from-blue-50 to-white py-16 px-4">
      <motion.div
        className="max-w-5xl mx-auto text-center"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
          Simule seu Sistema Solar
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
          Descubra de forma simples e visual como a energia solar pode
          transformar seu consumo de energia.
        </p>
      </motion.div>

      <SolarSimulator onSimulate={setResult} />

      {result && (
        <motion.div
          className="mt-16 max-w-4xl mx-auto bg-white rounded-2xl p-6 shadow-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
            Visualização da Produção
          </h2>

          <ResponsiveContainer width="100%" height={250}>
            <BarChart
              data={[
                {
                  name: "Consumo Mensal",
                  valor: (result.necessaryPower * 30 * 5) / 1.2,
                },
                {
                  name: "Produção Anual",
                  valor: result.annualEnergyProduction / 12,
                },
              ]}
              margin={{ top: 20, right: 30, left: 0, bottom: 5 }}
            >
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="valor" fill="#22c55e" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10 text-gray-700 text-center">
            <div>
              <Zap className="mx-auto text-green-600" size={32} />
              <p className="font-semibold mt-2">Potência</p>
              <p>{result.systemPower} kW</p>
            </div>
            <div>
              <GaugeCircle className="mx-auto text-blue-600" size={32} />
              <p className="font-semibold mt-2">Produção/ano</p>
              <p>{result.annualEnergyProduction} kWh</p>
            </div>
            <div>
              <Sun className="mx-auto text-yellow-500" size={32} />
              <p className="font-semibold mt-2">Placas</p>
              <p>{result.panelQuantity}</p>
            </div>
            <div>
              <Ruler className="mx-auto text-purple-600" size={32} />
              <p className="font-semibold mt-2">Área</p>
              <p>{result.minimumArea} m²</p>
            </div>
          </div>
        </motion.div>
      )}
    </section>
  );
};

export default SolarSimulatorSection;
