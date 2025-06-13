import React from "react";
import { FaInfoCircle } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

function scrollToSection(e, sectionId) {
  e.preventDefault();
  if (window.location.pathname !== "/") {
    window.location.href = `/#${sectionId}`;
  } else {
    const el = document.getElementById(sectionId);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }
}

export default function Footer() {
  return (
    <footer className="bg-gold text-white pt-12 pb-6 mt-12 relative">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8 mb-6">
        {/* Coluna 1: Logo e Missão */}
        <div>
          <h3 className="font-bold text-lg md:text-xl underline mb-2"><span className="font-bold">Wagner Moura</span> <span className="font-normal">Advogados Associados</span></h3>
          <p className="mb-2">Advocacia de excelência e proximidade.</p>
          <p className="mb-2">Soluções jurídicas personalizadas para seus desafios legais.</p>
        </div>
        {/* Coluna 2: Links Rápidos */}
        <div>
          <h3 className="font-bold underline mb-2">Links Rápidos</h3>
          <ul className="space-y-1">
            <li><Link to="/" onClick={e => scrollToSection(e, 'home')} className="hover:underline">Início</Link></li>
            <li><Link to="/" onClick={e => scrollToSection(e, 'sobre')} className="hover:underline">Sobre</Link></li>
            <li><Link to="/" onClick={e => scrollToSection(e, 'areas')} className="hover:underline">Áreas de Atuação</Link></li>
            <li><Link to="/" onClick={e => scrollToSection(e, 'blog')} className="hover:underline">Blog Jurídico</Link></li>
            <li><Link to="/" onClick={e => scrollToSection(e, 'contato')} className="hover:underline">Contato</Link></li>
          </ul>
        </div>
        {/* Coluna 3: Áreas de Atuação */}
        <div>
          <h3 className="font-bold underline mb-2">Áreas de Atuação</h3>
          <ul className="space-y-1">
            <li>Direito Tributário</li>
            <li>Direito Administrativo</li>
            <li>Direito Trabalhista</li>
            <li>Direito Civil</li>
          </ul>
        </div>
        {/* Coluna 4: Contato */}
        <div>
          <h3 className="font-bold underline mb-2">Contato</h3>
          <p>Av. Getúlio Vargas, 266, Sala 802.<br/>Edifício Três Marias.<br/>Centro, Maringá - PR.</p>
          <p className="mt-2">(44) 99960-3808</p>
          <p>contato@wagnermouraadv.com.br</p>
        </div>
      </div>
      {/* Rodapé */}
      <div className="container mx-auto px-4 text-sm text-white/90 border-t border-white/20 pt-4">
        <p className="text-center">© {new Date().getFullYear()} <span className="font-bold">Wagner Moura</span> Advogados Associados | OAB/PR 62.873 | Todos os direitos reservados</p>
      </div>
    </footer>
  );
} 