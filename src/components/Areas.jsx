import React from "react";
import { FaBalanceScale, FaGavel, FaBriefcase, FaBuilding, FaUserShield, FaRegGem } from "react-icons/fa";

const AREAS = [
  { nome: "Direito Administrativo", desc: "Defesa dos interesses de servidores públicos.", icon: <FaUserShield /> },
  { nome: "Direito Trabalhista", desc: "Atuação em causas trabalhistas e previdenciárias.", icon: <FaGavel /> },
  { nome: "Direito Tributário", desc: "Consultoria e contencioso tributário.", icon: <FaBalanceScale /> },
  { nome: "Direito Civil", desc: "Contratos, família, sucessões e responsabilidade civil.", icon: <FaBuilding /> },
  { nome: "Direito Empresarial", desc: "Soluções jurídicas para empresas.", icon: <FaBriefcase /> },
  { nome: "Gestão Patrimonial", desc: "Planejamento e proteção de bens.", icon: <FaRegGem /> },
];

export default function Areas() {
  return (
    <section id="areas" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-black mb-12 text-center">Áreas de Atuação</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {AREAS.map((area, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center border border-gold hover:bg-gold hover:text-black hover:scale-105 hover:shadow-2xl transition-all duration-300 group">
              <div className="text-4xl mb-4 text-gold bg-gold/10 w-16 h-16 flex items-center justify-center rounded-full shadow-inner group-hover:bg-white group-hover:text-black transition-all duration-300">{area.icon}</div>
              <h3 className="text-xl font-semibold text-black mb-2 group-hover:underline text-center">{area.nome}</h3>
              <p className="text-brown text-center">{area.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 