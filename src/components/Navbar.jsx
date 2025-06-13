import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

const AREAS = [
  "Direito Administrativo",
  "Direito Trabalhista",
  "Direito Tributário",
  "Direito Civil",
  "Direito Empresarial",
  "Gestão Patrimonial",
];

export default function Navbar() {
  const [open, setOpen] = React.useState(false);
  const [dropdown, setDropdown] = React.useState(false);

  const handleWhatsAppClick = (e) => {
    e.preventDefault();
    const message = encodeURIComponent("Olá! Gostaria de um atendimento.");
    window.open(`https://wa.me/5544999603808?text=${message}`, '_blank');
  };

  return (
    <nav className="bg-brown text-white w-full fixed top-0 left-0 z-30 shadow-lg border-b border-gold/60 transition-all duration-300">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <span className="font-bold text-2xl tracking-tight flex items-center gap-2">
          {/* Logo fictício */}
          <span className="text-gold">Wagner Moura</span> <span className="hidden sm:inline">Advogados Associados</span>
        </span>
        <ul className="hidden md:flex space-x-8 font-medium">
          <li><Link to="/" className="hover:text-gold transition">Home</Link></li>
          <li><a href="#contato" className="hover:text-gold transition">Contato</a></li>
          <li className="relative group" onMouseEnter={() => setDropdown(true)} onMouseLeave={() => setDropdown(false)}>
            <button className="hover:text-gold transition focus:outline-none">Áreas de Atuação</button>
            {dropdown && (
              <div className="absolute left-0 mt-2 w-56 bg-white text-brown shadow-lg rounded-lg z-30 animate-fade-in">
                <ul className="py-2">
                  {AREAS.map((area, idx) => (
                    <li key={idx}>
                      <a href={`#area-${idx}`} className="block px-4 py-2 hover:bg-gold/10 hover:text-gold transition">{area}</a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </li>
          <li><Link to="/blog" className="hover:text-gold transition">Blog Jurídico</Link></li>
        </ul>
        <button 
          onClick={handleWhatsAppClick}
          className="hidden md:inline-flex items-center gap-2 bg-gold text-brown px-5 py-2 rounded-lg shadow hover:bg-white hover:text-brown border border-gold transition font-semibold"
        >
          <FaWhatsapp /> Fale com um especialista
        </button>
        <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Abrir menu">
          <svg className="w-7 h-7 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
        </button>
      </div>
      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-brown border-t border-gold/40 px-4 py-2 animate-fade-in-down">
          <ul className="flex flex-col gap-2 text-white">
            <li><Link to="/" className="hover:text-gold transition">Home</Link></li>
            <li><a href="#contato" className="hover:text-gold transition">Contato</a></li>
            <li><a href="#areas" className="hover:text-gold transition">Áreas de Atuação</a></li>
            <li><Link to="/blog" className="hover:text-gold transition">Blog Jurídico</Link></li>
            <li>
              <button 
                onClick={handleWhatsAppClick}
                className="flex items-center gap-2 text-gold hover:text-white transition w-full text-left"
              >
                <FaWhatsapp /> Fale com um especialista
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
} 