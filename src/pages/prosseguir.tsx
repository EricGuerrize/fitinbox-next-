import React, { useState } from 'react';

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
    <div style={{ margin: 0, fontFamily: 'Arial, sans-serif', backgroundColor: '#f5f5f5' }}>
      {/* Header */}
      <div style={{
        background: 'white',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px 40px',
        borderBottom: '1px solid #ccc'
      }}>
        <img 
          style={{ height: '60px' }} 
          src="/assets/logo.jpg" 
          alt="Logo Fit In Box" 
          onError={(e) => {
            e.target.style.display = 'none';
          }}
        />
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <a 
            href="/" 
            style={{
              padding: '10px 20px',
              borderRadius: '5px',
              color: 'white',
              fontWeight: 'bold',
              cursor: 'pointer',
              border: 'none',
              textDecoration: 'none',
              backgroundColor: '#009245'
            }}
          >
            PEDIDOS
          </a>
          <span style={{ fontWeight: 'bold', color: '#009245' }}>
            H Azevedo de Abreu refeições saudáveis - CNPJ: 05.336.475/0001-77
          </span>
        </div>
      </div>

      {/* Main Content */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: 'calc(100vh - 80px)',
        padding: '20px'
      }}>
        <div style={{
          backgroundColor: 'white',
          padding: '40px',
          borderRadius: '10px',
          boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
          width: '100%',
          maxWidth: '600px',
          textAlign: 'center'
        }}>
          <h2 style={{ color: '#757248', fontSize: '24px', marginBottom: '20px' }}>PROSSEGUIR</h2>
          <p style={{ color: '#666', marginBottom: '30px' }}>
            Você Está para Entrar em uma Área Restrita exclusiva para seu CNPJ. O que Gostaria de Fazer?
          </p>
          
          {/* Options */}
          <div style={{ margin: '20px 0', textAlign: 'left' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '15px' }}>
              <input
                type="radio"
                id="fazerPedido"
                name="opcao"
                checked={selectedOption === 'fazerPedido'}
                onChange={() => setSelectedOption('fazerPedido')}
                style={{ marginRight: '10px', marginTop: '3px' }}
              />
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <label htmlFor="fazerPedido" style={{ fontWeight: 'bold', color: '#333' }}>
                  Quero realizar um pedido
                </label>
                <span style={{ color: '#666', fontSize: '14px' }}>
                  Visualizar o que há de disponível para compras
                </span>
              </div>
            </div>
            
            <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '15px' }}>
              <input
                type="radio"
                id="consultarPedidos"
                name="opcao"
                checked={selectedOption === 'consultarPedidos'}
                onChange={() => setSelectedOption('consultarPedidos')}
                style={{ marginRight: '10px', marginTop: '3px' }}
              />
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <label htmlFor="consultarPedidos" style={{ fontWeight: 'bold', color: '#333' }}>
                  Consultar Pedidos Realizados
                </label>
                <span style={{ color: '#666', fontSize: '14px' }}>
                  Visualize seu Histórico Completo de Pedidos
                </span>
              </div>
            </div>
          </div>
          
          <button
            onClick={handleContinue}
            style={{
              backgroundColor: '#d80909',
              color: 'white',
              padding: '15px',
              width: '100%',
              border: 'none',
              borderRadius: '5px',
              fontSize: '16px',
              fontWeight: 'bold',
              cursor: 'pointer',
              marginTop: '20px'
            }}
          >
            Continuar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProsseguirPage;