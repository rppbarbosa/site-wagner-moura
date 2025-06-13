import React from "react";
import { FaMapMarkedAlt } from "react-icons/fa";

export default function RegionalHighlight() {
  return (
    <section
      className="relative w-full flex items-center justify-center py-0 md:py-0 bg-transparent animate-fade-in"
      aria-label="Alcance nacional do escritório"
      role="region"
      tabIndex={-1}
    >
      <div
        className="relative w-full flex flex-col items-center justify-center overflow-hidden shadow-lg"
        style={{ minHeight: '420px', background: 'rgba(0,0,0,0.7)' }}
      >
        {/* Imagem de fundo com blur e gradiente */}
        <img
          src="https://i.imgur.com/9tmA8uK.jpeg"
          alt="Mapa do Brasil"
          className="absolute inset-0 w-full h-full object-cover opacity-70 blur-sm"
          style={{ zIndex: 1 }}
        />
        <div
          className="absolute inset-0"
          style={{
            zIndex: 2,
            background:
              "linear-gradient(180deg, rgba(0,0,0,0.7) 60%, rgba(201,151,59,0.15) 100%)",
          }}
        ></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full w-full px-4 py-14 text-center">
          <span className="inline-flex items-center justify-center mb-4">
            <FaMapMarkedAlt className="text-gold text-4xl md:text-5xl drop-shadow-lg mr-2" aria-hidden="true" />
          </span>
          <h3
            className="text-3xl md:text-5xl font-bold mb-2 text-gold transition-all duration-300 hover:scale-105"
            style={{ textShadow: '0 2px 12px rgba(0,0,0,0.8)' }}
          >
            Alcance Nacional, <span className="font-extrabold">Atendimento Personalizado</span>
          </h3>
          <div className="w-24 h-1 bg-gold rounded-full mx-auto mb-6"></div>
          <p
            className="text-lg md:text-2xl text-white leading-relaxed font-medium text-justify"
            style={{
              textShadow: '0 2px 8px rgba(0,0,0,0.7)',
              maxWidth: '1100px',
              margin: '0 auto',
            }}
          >
            <span className="font-bold text-gold">Com sede em Maringá, no Paraná</span>, nosso escritório transcende fronteiras geográficas para atender clientes em <span className="font-bold text-gold">todo o Brasil</span>. A tecnologia nos permite oferecer um serviço jurídico de <span className="font-bold text-gold">excelência</span> de forma virtual, mantendo a qualidade e o compromisso que nos caracterizam. Nossa experiência em <span className="font-bold text-gold">advocacia pública</span> e nossa capacidade de adaptação às necessidades de cada cliente nos permitem garantir uma representação legal eficiente, independentemente da localização. <span className="font-bold text-gold">Estamos prontos para defender seus direitos, onde quer que você esteja.</span>
          </p>
        </div>
      </div>
    </section>
  );
}