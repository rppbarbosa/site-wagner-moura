import React from "react";

export default function BlogHero() {
  return (
    <section className="relative pt-32 pb-20 min-h-[40vh] flex items-center justify-center bg-gradient-to-br from-black/80 to-gold/80">
      <img src="https://i.imgur.com/AfiWJbL.jpeg" alt="Livros jurídicos" className="absolute inset-0 w-full h-full object-cover opacity-50 scale-100" />
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" aria-hidden="true"></div>
      <div className="relative z-10 container mx-auto px-4 flex flex-col items-center animate-fade-in">
        <h1 className="text-5xl md:text-6xl font-bold text-gold mb-4 tracking-tight text-center drop-shadow-lg">Blog Jurídico</h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-white mb-6 text-center drop-shadow">Fique por dentro das novidades e dicas jurídicas.</h2>
      </div>
    </section>
  );
} 