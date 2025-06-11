import React from 'react';

const CNPJNotFoundPage = () => {
  const handleContactClick = () => {
    // Aqui você pode implementar a lógica para redirecionar ou abrir WhatsApp
    // Por exemplo: window.open('https://wa.me/5511999999999', '_blank');
    console.log('Redirecionando para contato...');
  };

  const handleExitClick = () => {
    // Implementar lógica de saída/logout
    console.log('Saindo do sistema...');
  };

  return (
    <div className="min-h-screen bg-gray-200 font-sans">
      {/* Header */}
      <div className="bg-white flex justify-between items-center px-10 py-2.5 border-b border-gray-300">
        <img 
          className="w-36" 
          src="/assets/logo.jpg" 
          alt="Logo Fit In Box"
          onError={(e) => {
            e.target.style.display = 'none';
          }}
        />
        <div className="flex items-center gap-5">
          <span className="font-bold text-yellow-700">CNPJ NÃO CADASTRADO</span>
          <button 
            onClick={handleExitClick}
            className="px-5 py-2.5 rounded bg-orange-500 text-white font-bold cursor-pointer border-none hover:bg-orange-600 transition-colors"
          >
            SAIR
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex justify-center items-center h-[calc(100vh-80px)]">
        <div className="bg-white p-10 max-w-lg text-center shadow-lg rounded-lg">
          <h2 className="text-red-600 text-2xl font-bold mb-4">ATENÇÃO!</h2>
          <h3 className="text-black text-lg mb-8">
            Seu CNPJ Não Esta Cadastrado em Nossa Base de Dados. Para Mais Informações ou Cadastramento entre em contato conosco.
          </h3>
          
          <button
            onClick={handleContactClick}
            className="bg-red-600 text-white px-6 py-3 w-full border-none rounded font-bold cursor-pointer hover:bg-red-700 transition-colors flex items-center justify-center gap-2"
          >
            <i className="fab fa-whatsapp"></i>
            ENTRE EM CONTATO
          </button>
        </div>
      </div>
      
      {/* Font Awesome CDN */}
      <link 
        rel="stylesheet" 
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css" 
        integrity="sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg==" 
        crossOrigin="anonymous" 
        referrerPolicy="no-referrer"
      />
    </div>
  );
};

export default CNPJNotFoundPage;