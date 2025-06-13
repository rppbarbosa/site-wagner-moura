import React from "react";

export default function Sobre() {
  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
        <img src="https://i.imgur.com/DzIM1yK.png" alt="Dr. Wagner Moura" className="w-72 h-72 rounded-full object-cover border-4 border-gold shadow-lg" />
        <div className="flex-1">
          <h2 className="text-3xl md:text-4xl font-bold text-gold mb-6 underline tracking-tight">Wagner Moura Advogados Associados</h2>
          <div className="space-y-6 text-lg text-brown leading-relaxed text-justify">
            <p>Com mais de 12 anos de experiência, o Dr. Wagner de Souza Moura lidera o escritório que carrega seu nome com firmeza, ética e excelência. Especialista em Direito Trabalhista, Previdenciário e com ampla atuação no Direito Público, dedica-se à defesa dos direitos dos servidores com compromisso técnico e sensibilidade humana.</p>
            <p>Sob sua direção, o escritório consolidou-se como referência em soluções jurídicas voltadas à proteção do funcionalismo público e à consultoria estratégica. A atuação também se estende a áreas como Direito Tributário, Empresarial, Financeiro e Gestão Patrimonial, resultado da formação multidisciplinar da equipe, que agrega conhecimento sólido em finanças, contabilidade e mercado de capitais.</p>
            <p>Mais do que resolver problemas jurídicos, Wagner Moura Advogados Associados tem como missão oferecer clareza, segurança e resultados aos seus clientes — com foco humano e visão estratégica.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

<section className="relative py-16 bg-gray-100">
  <div className="absolute inset-0 bg-black opacity-50"></div>
  <div className="container mx-auto px-4 relative z-10">
    <div className="flex flex-col md:flex-row items-center gap-8">
      <div className="md:w-1/2">
        <img 
          src="https://i.imgur.com/9tmA8uK.jpeg" 
          alt="Maringá, Paraná" 
          className="w-full h-64 object-cover rounded-lg shadow-lg"
        />
      </div>
      <div className="md:w-1/2 text-white">
        <h3 className="text-2xl md:text-3xl font-bold mb-4">Alcance Nacional, Atendimento Personalizado</h3>
        <p className="text-lg leading-relaxed mb-4">
          Com sede em Maringá, no Paraná, nosso escritório transcende fronteiras geográficas para atender 
          clientes em todo o Brasil. A tecnologia nos permite oferecer um serviço jurídico de excelência 
          de forma virtual, mantendo a qualidade e o compromisso que nos caracterizam.
        </p>
        <p className="text-lg leading-relaxed">
          Nossa experiência em advocacia pública e nossa capacidade de adaptação às necessidades de cada 
          cliente nos permitem garantir uma representação legal eficiente, independentemente da localização. 
          Estamos prontos para defender seus direitos, onde quer que você esteja.
        </p>
      </div>
    </div>
  </div>
</section> 