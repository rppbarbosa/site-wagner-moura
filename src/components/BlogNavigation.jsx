import React from 'react';
import { Link } from 'react-router-dom';

export default function BlogNavigation({ proximoArtigo, artigoAnterior }) {
  return (
    <div className="flex flex-col-reverse md:flex-row gap-4 justify-between mt-8">
      {/* Próximo Artigo - Lado Esquerdo */}
      <Link
        to={`/blog/${proximoArtigo.slug}`}
        className="flex-1 bg-white hover:bg-gold/5 p-4 rounded-lg border-2 border-gold/20 hover:border-gold transition-all group"
      >
        <div className="flex flex-col">
          <span className="text-brown/60 text-sm mb-2">Próximo Artigo</span>
          <span className="text-brown font-semibold group-hover:text-gold transition-colors">
            {proximoArtigo.titulo}
          </span>
        </div>
      </Link>

      {/* Artigo Anterior - Lado Direito */}
      <Link
        to={`/blog/${artigoAnterior.slug}`}
        className="flex-1 bg-white hover:bg-gold/5 p-4 rounded-lg border-2 border-gold/20 hover:border-gold transition-all text-right group"
      >
        <div className="flex flex-col">
          <span className="text-brown/60 text-sm mb-2">Artigo Anterior</span>
          <span className="text-brown font-semibold group-hover:text-gold transition-colors">
            {artigoAnterior.titulo}
          </span>
        </div>
      </Link>
    </div>
  );
} 