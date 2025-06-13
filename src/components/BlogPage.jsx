import React, { useState, useEffect } from "react";
import BlogHero from "./BlogHero";
import { Link } from "react-router-dom";
import artigos from "../posts/artigos.json";

const THUMB_PLACEHOLDER = "https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=400&q=80";

export default function BlogPage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Ordenar artigos por data (mais recente primeiro)
    const artigosOrdenados = [...artigos].sort((a, b) => 
      new Date(b.data) - new Date(a.data)
    );
    
    setPosts(artigosOrdenados);
    setLoading(false);
  }, []);

  // Formatar data para exibição
  const formatarData = (dataStr) => {
    try {
      const [ano, mes, dia] = dataStr.split('-');
      return `${dia}-${mes}-${ano}`;
    } catch (e) {
      return dataStr;
    }
  };

  return (
    <>
      <BlogHero />
      <section className="py-16 bg-white min-h-screen">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-brown mb-4">Artigos Jurídicos</h2>
            <p className="text-brown/70 text-lg">Conheça nossos conteúdos sobre direito e assuntos relevantes</p>
          </div>
          
          {loading ? (
            <div className="flex justify-center items-center min-h-[200px]">
              <span className="animate-spin rounded-full h-8 w-8 border-b-2 border-gold mr-3"></span>
              <span className="text-brown text-lg">Carregando artigos...</span>
            </div>
          ) : posts.length === 0 ? (
            <div className="flex flex-col items-center min-h-[200px] p-8 bg-gray-50 rounded-xl">
              <span className="text-brown/80 text-lg font-semibold mb-2">Nenhum artigo encontrado.</span>
              <p className="text-brown/60 mb-6">Estamos preparando novos conteúdos. Em breve teremos artigos aqui.</p>
              <Link to="/" className="mt-2 px-5 py-2.5 bg-gold text-white rounded-lg hover:bg-brown transition flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                Voltar para Home
              </Link>
            </div>
          ) : (
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  to={`/blog/${post.slug}`}
                  className="flex flex-col group h-full"
                  aria-label={`Leia mais sobre: ${post.titulo}`}
                >
                  <div className="bg-white rounded-xl shadow-md hover:shadow-xl border border-gold/10 overflow-hidden transition-all duration-300 flex flex-col h-full">
                    {/* Imagem com overlay no hover */}
                    <div className="relative h-52 overflow-hidden">
                      <img
                        src={post.imagem || THUMB_PLACEHOLDER}
                        alt={post.titulo || "Imagem do artigo"}
                        className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-50 group-hover:opacity-80 transition-opacity"></div>
                    </div>
                    
                    {/* Conteúdo do card */}
                    <div className="p-6 flex flex-col flex-grow">
                      {/* Data e categoria */}
                      <div className="flex justify-between items-center mb-3">
                        <span className="text-gold text-sm font-medium">{formatarData(post.data)}</span>
                      </div>
                      
                      {/* Título */}
                      <h3 className="text-xl font-bold text-brown mb-3 group-hover:text-gold transition-colors line-clamp-2">
                        {post.titulo}
                      </h3>
                      
                      {/* Resumo */}
                      <p className="text-brown/80 text-sm mb-5 line-clamp-3 flex-grow">
                        {post.resumo}
                      </p>
                      
                      {/* Botão "Leia mais" */}
                      <div className="mt-auto pt-3 border-t border-gray-100">
                        <span className="text-gold text-sm font-semibold flex items-center group-hover:translate-x-1 transition-transform">
                          Leia mais
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
} 