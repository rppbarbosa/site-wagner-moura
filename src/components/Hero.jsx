import React from "react";

export default function Hero() {
  const handleWhatsAppClick = (e) => {
    e.preventDefault();
    const message = encodeURIComponent("Olá! Gostaria de um atendimento.");
    window.open(`https://wa.me/5544999603808?text=${message}`, '_blank');
  };

  return (
    <section id="home" className="relative pt-32 pb-24 min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-black/80 to-gold/80">
      <img src="https://i.imgur.com/AfiWJbL.jpeg" alt="Escritório de advocacia" className="absolute inset-0 w-full h-full object-cover opacity-50 scale-90" />
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" aria-hidden="true"></div>
      <div className="relative z-10 container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-20 items-start animate-fade-in">
        {/* Bloco Esquerdo */}
        <div className="flex flex-col items-start max-w-xl">
          <h1 className="text-5xl md:text-7xl font-bold font-sans text-gold mb-2 tracking-tight text-left">Wagner Moura</h1>
          <h2 className="text-3xl md:text-4xl font-bold font-sans text-white mb-8 text-left">Advogados Associados</h2>
          <p className="text-lg md:text-xl text-white max-w-md text-left leading-snug font-sans">
            Soluções jurídicas personalizadas para servidores públicos, empresas e profissionais liberais.
          </p>
        </div>
        {/* Bloco Direito */}
        <div className="flex flex-col items-end max-w-xl w-full">
          <h2 className="text-4xl md:text-6xl font-bold font-sans text-white mb-2 tracking-tight text-right">Atendimento virtual</h2>
          <h3 className="text-2xl md:text-3xl font-bold font-sans text-white mb-8 text-right">Qualidade presencial</h3>
          <button 
            onClick={handleWhatsAppClick}
            className="inline-block bg-gold text-brown px-10 py-3 rounded-lg shadow hover:bg-white hover:text-brown border border-gold transition font-semibold font-sans text-lg mt-2"
          >
            Fale com um especialista
          </button>
        </div>
      </div>
    </section>
  );
} 