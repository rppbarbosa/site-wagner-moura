import React, { useState } from 'react';
import { FaWhatsapp, FaMapMarkerAlt } from 'react-icons/fa';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Formata a mensagem para o WhatsApp
    const whatsappMessage = encodeURIComponent(
      `Olá, me chamo ${formData.name}.\n\n${formData.message}`
    );
    
    // Formata o número do WhatsApp (remove caracteres especiais e adiciona código do país)
    const phoneNumber = '5544999603808'.replace(/\D/g, '');
    
    // Cria o link do WhatsApp e redireciona
    window.open(`https://wa.me/${phoneNumber}?text=${whatsappMessage}`, '_blank');
  };

  return (
    <section className="w-full pt-16 pb-0 bg-gradient-to-b from-brown/5 to-gold/5" id="contato">
      <div className="max-w-4xl mx-auto px-4 pb-16">
        <h2 className="text-4xl font-bold text-center text-brown mb-12">Fale Conosco</h2>
        
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12 border border-gold/20">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Seu nome"
                className="w-full px-4 py-3 rounded-lg border border-gold/30 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition"
                required
              />
            </div>

            <div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Sua mensagem"
                rows="4"
                className="w-full px-4 py-3 rounded-lg border border-gold/30 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition resize-none"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-gold hover:bg-gold/90 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-[1.02]"
            >
              <FaWhatsapp className="text-xl" />
              Enviar Mensagem via WhatsApp
            </button>
          </form>

          <div className="mt-8 text-center text-gray-600">
            <p>Ou entre em contato diretamente:</p>
            <a 
              href="https://wa.me/5544999603808"
              className="text-gold hover:text-gold/80 font-semibold block mt-2"
            >
              (44) 99960-3808
            </a>
            <a 
              href="mailto:contato@wagnermouraadv.com.br"
              className="text-gold hover:text-gold/80 font-semibold block mt-1"
            >
              contato@wagnermouraadv.com.br
            </a>
          </div>
        </div>

        {/* Endereço e Mapa */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gold/20">
          <div className="p-8 bg-gradient-to-r from-brown to-gold text-white text-center">
            <h3 className="text-2xl font-semibold flex items-center justify-center gap-2">
              <FaMapMarkerAlt />
              Nosso Escritório
            </h3>
          </div>
          <div className="h-[400px] w-full">
            <iframe 
              title="Localização do Escritório"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3661.2867857216745!2d-51.93894792376478!3d-23.421022577476786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ecd0df3f65f0ff%3A0x2b8f7a6d0dad16c!2sAv.%20Get%C3%BAlio%20Vargas%2C%20266%20-%20Zona%2001%2C%20Maring%C3%A1%20-%20PR%2C%2087013-230!5e0!3m2!1spt-BR!2sbr!4v1709150547044!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
} 