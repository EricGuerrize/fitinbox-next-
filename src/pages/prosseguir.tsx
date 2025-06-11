import React, { useState } from 'react';
import Header from '../components/Header';

const ProsseguirPage = () => {
  const [selectedOption, setSelectedOption] = useState('fazerPedido');

  const handleContinue = () => {
    if (selectedOption === 'fazerPedido') {
      window.location.href = '/pedido_produtos';
    } else {
      window.location.href = '/consultar_pedido';
    }
  };

  return (
    <div className="m-0 font-sans bg-gray-100">
      {/* Header */}
      <Header>
        <a
          href="/"
          className="px-5 py-2.5 rounded bg-primary text-white font-bold no-underline"
        >
          PEDIDOS
        </a>
        <span className="font-bold text-primary">
          H Azevedo de Abreu refeições saudáveis - CNPJ: 05.336.475/0001-77
        </span>
      </Header>

      {/* Main Content */}
      <div className="flex justify-center items-center min-h-[calc(100vh-80px)] p-5">
        <div className="bg-white p-10 rounded-lg shadow-lg w-full max-w-xl text-center">
          <h2 className="text-[#757248] text-xl mb-5">PROSSEGUIR</h2>
          <p className="text-gray-600 mb-8">
            Você Está para Entrar em uma Área Restrita exclusiva para seu CNPJ. O que Gostaria de Fazer?
          </p>
          
          {/* Options */}
          <div className="my-5 text-left">
            <div className="flex items-start mb-4">
              <input
                type="radio"
                id="fazerPedido"
                name="opcao"
                checked={selectedOption === 'fazerPedido'}
                onChange={() => setSelectedOption('fazerPedido')}
                className="mr-2 mt-1"
              />
              <div className="flex flex-col">
                <label htmlFor="fazerPedido" className="font-bold text-gray-800">
                  Quero realizar um pedido
                </label>
                <span className="text-gray-600 text-sm">
                  Visualizar o que há de disponível para compras
                </span>
              </div>
            </div>

            <div className="flex items-start mb-4">
              <input
                type="radio"
                id="consultarPedidos"
                name="opcao"
                checked={selectedOption === 'consultarPedidos'}
                onChange={() => setSelectedOption('consultarPedidos')}
                className="mr-2 mt-1"
              />
              <div className="flex flex-col">
                <label htmlFor="consultarPedidos" className="font-bold text-gray-800">
                  Consultar Pedidos Realizados
                </label>
                <span className="text-gray-600 text-sm">
                  Visualize seu Histórico Completo de Pedidos
                </span>
              </div>
            </div>
          </div>

          <button
            onClick={handleContinue}
            className="bg-red-700 text-white p-4 w-full rounded font-bold mt-5"
          >
            Continuar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProsseguirPage;
