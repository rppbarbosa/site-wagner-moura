import React from "react";

const EQUIPE = [
  {
    nome: "Dr. Wagner de Souza Moura",
    oab: "OAB/PR 62.873",
    foto: "https://i.imgur.com/DzIM1yK.png",
    bio: "Advogado fundador, especialista em Direito Trabalhista, Previdenciário e Público. 12 anos de experiência na defesa dos direitos dos servidores públicos.",
  },
  {
    nome: "Rony Peterson Pedroso Barbosa",
    oab: "OAB/PR 123.123",
    foto: "https://i.imgur.com/WBstbQg.png",
    bio: "Advogado e Consultor Financeiro. MBA em Finanças, pós-graduação em Gestão Financeira, Direito Empresarial, Contabilidade e Planejamento Tributário.",
  },
];

export default function Equipe() {
  return (
    <section id="equipe" className="w-full pt-16 pb-0 bg-gradient-to-b from-brown/5 to-gold/5">
      <div className="container mx-auto px-4 pb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-brown tracking-tight mb-16 text-center drop-shadow-sm">Nossa Equipe</h2>
        <div className="grid gap-10 md:grid-cols-2">
          {EQUIPE.map((m, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-lg shadow-gold/10 p-10 flex flex-col items-center border border-gold/70 hover:scale-105 hover:shadow-2xl hover:shadow-gold/20 transition-all duration-300">
              <img src={m.foto} alt={m.nome} className="w-40 h-40 rounded-full object-cover border-4 border-gold mb-6 shadow" />
              <h3 className="text-xl font-bold text-gold mb-1 text-center tracking-tight">{m.nome}</h3>
              <span className="text-brown mb-2 font-semibold">{m.oab}</span>
              <p className="text-brown/80 text-center text-base leading-relaxed">{m.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 