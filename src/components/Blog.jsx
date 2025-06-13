import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import artigos from "../posts/artigos.json";

const THUMB_PLACEHOLDER = "https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=400&q=80";

// Artigos com componentes separados
const ARTIGOS_ESPECIAIS = ['insalubridade', 'dano-moral'];

export default function Blog() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Ordenar artigos por data (mais recente primeiro)
    const artigosOrdenados = [...artigos].sort((a, b) => 
      new Date(b.data) - new Date(a.data)
    );
    
    // Mostrar apenas os 3 artigos mais recentes
    setPosts(artigosOrdenados.slice(0, 3));
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
    <section id="blog" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Cabeçalho da seção */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brown mb-4">Blog Jurídico</h2>
          <p className="text-lg text-brown/70">Artigos e insights sobre temas jurídicos relevantes</p>
        </div>
        
        {loading ? (
          <div className="flex justify-center items-center h-60">
            <span className="animate-spin rounded-full h-8 w-8 border-b-2 border-gold mr-3"></span>
            <span className="text-brown text-lg">Carregando artigos...</span>
          </div>
        ) : posts.length === 0 ? (
          <div className="text-center py-10">
            <p className="text-brown/70 text-lg">Nenhum artigo encontrado.</p>
          </div>
        ) : (
          <div className="grid gap-8 md:gap-10 md:grid-cols-3">
            {posts.map((post) => (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                className="flex flex-col group h-full"
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
                    {/* Data */}
                    <div className="flex items-center mb-3">
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
        
        {/* Botão "Ver todos os artigos" */}
        <div className="flex justify-center mt-12">
          <Link 
            to="/blog" 
            className="bg-gold text-white px-8 py-3 rounded-lg shadow hover:bg-brown transition duration-300 font-medium flex items-center gap-2"
          >
            Ver todos os artigos
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
} 