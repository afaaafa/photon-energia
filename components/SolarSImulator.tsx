"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

interface SimulationResult {
  necessaryPower: number;
  systemPower: number;
  annualEnergyProduction: number;
  panelQuantity: number;
  minimumArea: number;
}

interface SolarSimulatorProps {
  onSimulate?: (result: SimulationResult) => void;
}

const SolarSimulator: React.FC<SolarSimulatorProps> = ({ onSimulate }) => {
  const [type, setType] = useState<"residential" | "commercial">("residential");
  const [monthlyConsumption, setMonthlyConsumption] = useState("");
  const [simulationResult, setSimulationResult] =
    useState<SimulationResult | null>(null);

  const simulateSystem = () => {
    const consumption = parseFloat(monthlyConsumption);

    if (isNaN(consumption) || consumption <= 0) {
      alert("Por favor, insira um consumo válido.");
      return;
    }

    const irradiationFactor = type === "residential" ? 1.2 : 1.5;
    const necessaryPower = (consumption * irradiationFactor) / 30 / 5;
    const systemPower = Math.ceil(necessaryPower * 1.1);
    const panelPower = type === "residential" ? 550 : 670;
    const panelQuantity = Math.ceil((systemPower * 1000) / panelPower);
    const minimumArea = panelQuantity * 2;

    const result = {
      necessaryPower: parseFloat(necessaryPower.toFixed(2)),
      systemPower: parseFloat(systemPower.toFixed(2)),
      annualEnergyProduction: parseFloat((systemPower * 1460).toFixed(2)),
      panelQuantity,
      minimumArea,
    };

    setSimulationResult(result);
    onSimulate?.(result); // Notifica o componente pai
  };

  return (
    <motion.div
      className="bg-white shadow-2xl rounded-2xl p-8 max-w-3xl mx-auto mt-10"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="grid md:grid-cols-2 gap-6 m-10">
        <div>
          <label className="block mb-2 font-semibold text-gray-700">
            Tipo de Instalação
          </label>
          <div className="flex space-x-4">
            {["residential", "commercial"].map((option) => (
              <motion.button
                key={option}
                whileTap={{ scale: 0.95 }}
                onClick={() => setType(option as "residential" | "commercial")}
                className={`px-4 py-2 rounded-lg transition-all font-medium ${
                  type === option
                    ? "bg-blue-600 text-white shadow-md"
                    : "bg-gray-200 text-gray-700"
                }`}
              >
                {option === "residential" ? "Residencial" : "Empresarial"}
              </motion.button>
            ))}
          </div>
        </div>

        <div>
          <label className="block mb-2 font-semibold text-gray-700">
            Consumo Médio Mensal (kWh)
          </label>
          <input
            type="number"
            value={monthlyConsumption}
            onChange={(e) => setMonthlyConsumption(e.target.value)}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Ex: 450"
            min="0"
          />
        </div>
      </div>

      <div className="text-center mt-8">
        <motion.button
          onClick={simulateSystem}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          disabled={!monthlyConsumption}
          className="bg-green-500 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition disabled:opacity-50"
        >
          Simular Orçamento
        </motion.button>
      </div>

      {simulationResult && (
        <motion.div
          className="mt-10 bg-gray-50 p-6 rounded-xl border"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <h3 className="text-xl font-bold mb-6 text-center text-gray-800">
            Resultado da Simulação
          </h3>
          <div className="grid md:grid-cols-3 gap-4 text-center text-gray-700">
            <div>
              <p className="font-semibold">Potência Necessária</p>
              <p>{simulationResult.necessaryPower} kW</p>
            </div>
            <div>
              <p className="font-semibold">Potência do Sistema</p>
              <p>{simulationResult.systemPower} kW</p>
            </div>
            <div>
              <p className="font-semibold">Produção Anual</p>
              <p>{simulationResult.annualEnergyProduction} kWh</p>
            </div>
            <div>
              <p className="font-semibold">Placas Solares</p>
              <p>{simulationResult.panelQuantity} un</p>
            </div>
            <div>
              <p className="font-semibold">Área Necessária</p>
              <p>{simulationResult.minimumArea} m²</p>
            </div>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default SolarSimulator;
