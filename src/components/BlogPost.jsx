import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import artigos from "../posts/artigos.json";

const THUMB_PLACEHOLDER = "https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=400&q=80";

export default function BlogPost() {
  const { slug } = useParams();
  const [artigo, setArtigo] = useState(null);
  const [artigoAnterior, setArtigoAnterior] = useState(null);
  const [proximoArtigo, setProximoArtigo] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // Formatar data para exibição
  const formatarData = (dataStr) => {
    try {
      const [ano, mes, dia] = dataStr.split('-');
      return `${dia}-${mes}-${ano}`;
    } catch (e) {
      return dataStr;
    }
  };

  useEffect(() => {
    // Buscar artigo pelo slug
    const artigoIndex = artigos.findIndex(a => a.slug === slug);
    
    if (artigoIndex !== -1) {
      setArtigo(artigos[artigoIndex]);
      
      // Buscar artigo anterior (se existir)
      if (artigoIndex > 0) {
        setArtigoAnterior(artigos[artigoIndex - 1]);
      } else {
        setArtigoAnterior(null);
      }
      
      // Buscar próximo artigo (se existir)
      if (artigoIndex < artigos.length - 1) {
        setProximoArtigo(artigos[artigoIndex + 1]);
      } else {
        setProximoArtigo(null);
      }
    } else {
      console.warn(`Artigo não encontrado: ${slug}`);
    }
    
    setLoading(false);
  }, [slug]);

  // URL da imagem de destaque
  const thumbUrl = artigo?.imagem || THUMB_PLACEHOLDER;

  // Estilizar o HTML do conteúdo
  const formatarConteudo = (conteudo) => {
    if (!conteudo) return '';
    
    // Adicionar estilos aos elementos HTML
    return conteudo
      .replace(/<h2>/g, '<h2 class="text-2xl md:text-3xl font-bold text-brown mt-8 mb-4">')
      .replace(/<h3>/g, '<h3 class="text-xl md:text-2xl font-bold text-brown mt-6 mb-3">')
      .replace(/<p>/g, '<p class="mb-5 leading-relaxed text-brown/90 text-justify text-base md:text-lg">')
      .replace(/<ul>/g, '<ul class="ml-5 mb-5 list-disc space-y-2">')
      .replace(/<li>/g, '<li class="ml-2">')
      .replace(/<blockquote>/g, '<blockquote class="border-l-4 border-gold pl-4 py-2 my-6 text-brown/80 italic font-medium">');
  };

  return (
    <section className="py-16 bg-white min-h-screen">
      <div className="container mx-auto px-4 max-w-5xl">
        {loading ? (
          <div className="flex justify-center items-center min-h-[200px]">
            <span className="animate-spin rounded-full h-8 w-8 border-b-2 border-gold mr-3"></span>
            <span className="text-brown text-lg">Carregando artigo...</span>
          </div>
        ) : !artigo ? (
          <div className="flex flex-col items-center min-h-[200px]">
            <span className="text-brown/80 text-lg font-semibold mb-2">Artigo não encontrado.</span>
            <Link to="/blog" className="mt-2 px-4 py-2 bg-gold text-white rounded hover:bg-brown transition">Voltar para o Blog</Link>
          </div>
        ) : (
          <article className="bg-white rounded-xl shadow-lg border border-gold/10 overflow-hidden">
            {/* Banner do artigo */}
            <div className="w-full h-64 sm:h-80 md:h-96 bg-gray-100 overflow-hidden">
              <img
                src={thumbUrl}
                alt={artigo.titulo || "Imagem do artigo"}
                className="w-full h-full object-cover object-center"
                loading="lazy"
              />
            </div>
            
            {/* Conteúdo do artigo */}
            <div className="p-6 md:p-10">
              <div className="max-w-3xl mx-auto">
                {/* Meta informações */}
                <div className="flex flex-wrap items-center gap-3 text-sm text-brown/60 mb-4">
                  <span className="bg-gold/10 text-gold px-3 py-1 rounded-full font-medium">{formatarData(artigo.data)}</span>
                  {artigo.autor && <span className="flex items-center gap-1">Por <span className="font-semibold text-brown/80">{artigo.autor}</span></span>}
                </div>
                
                {/* Título e resumo */}
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-brown mb-6 leading-tight">{artigo.titulo}</h1>
                <p className="text-xl text-brown/80 mb-10 font-medium leading-relaxed border-l-4 border-gold pl-4 py-2 italic">{artigo.resumo}</p>
                
                {/* Linha separadora */}
                <div className="border-b border-gray-200 mb-8"></div>
                
                {/* Conteúdo do artigo */}
                <div 
                  className="prose prose-lg max-w-none text-brown prose-headings:text-brown prose-strong:text-brown prose-strong:font-bold prose-p:text-brown/90 prose-p:text-lg prose-a:text-gold prose-blockquote:border-l-4 prose-blockquote:border-gold prose-blockquote:pl-4 prose-blockquote:py-1 prose-blockquote:font-normal text-justify" 
                  dangerouslySetInnerHTML={{ __html: formatarConteudo(artigo.conteudo) }} 
                />
                
                {/* Navegação entre artigos */}
                <div className="mt-12 pt-8 border-t border-gray-200">
                  <div className="flex flex-col gap-8">
                    {/* Cards de navegação */}
                    {(proximoArtigo || artigoAnterior) && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* Próximo Artigo - Lado Esquerdo */}
                        <div className="md:col-start-1">
                          {proximoArtigo && (
                            <Link 
                              to={`/blog/${proximoArtigo.slug}`}
                              className="group flex flex-col px-6 py-4 border-2 border-gold/30 rounded-lg hover:border-gold hover:bg-gold/5 transition-all duration-300 h-full"
                            >
                              <span className="text-sm text-brown/60">Próximo Artigo</span>
                              <span className="text-brown font-medium group-hover:text-gold transition-colors duration-300 mt-1">
                                {proximoArtigo.titulo}
                              </span>
                            </Link>
                          )}
                        </div>
                        
                        {/* Artigo Anterior - Lado Direito */}
                        <div className="md:col-start-2">
                          {artigoAnterior && (
                            <Link 
                              to={`/blog/${artigoAnterior.slug}`}
                              className="group flex flex-col px-6 py-4 border-2 border-gold/30 rounded-lg hover:border-gold hover:bg-gold/5 transition-all duration-300 h-full text-right"
                            >
                              <span className="text-sm text-brown/60">Artigo Anterior</span>
                              <span className="text-brown font-medium group-hover:text-gold transition-colors duration-300 mt-1">
                                {artigoAnterior.titulo}
                              </span>
                            </Link>
                          )}
                        </div>
                      </div>
                    )}

                    {/* Botão voltar para o blog */}
                    <div className="flex justify-center mt-8">
                      <Link 
                        to="/blog" 
                        className="bg-gold hover:bg-brown text-white px-8 py-3 rounded-lg shadow transition duration-300 font-medium flex items-center gap-2"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        Voltar para o Blog
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>
        )}
      </div>
    </section>
  );
} 