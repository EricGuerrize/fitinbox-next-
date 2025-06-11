import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Header from '../components/Header';
import InfoSection from '../components/InfoSection';

const FitInBoxSupplierArea = () => {
  const router = useRouter();
  const [cnpj, setCnpj] = useState('');

  // Função para aplicar máscara de CNPJ
  const applyCnpjMask = (value: string) => {
    // Remove tudo que não é dígito
    const onlyNumbers = value.replace(/\D/g, '');
    
    // Aplica a máscara
    return onlyNumbers
      .replace(/^(\d{2})(\d)/, '$1.$2')
      .replace(/^(\d{2})\.(\d{3})(\d)/, '$1.$2.$3')
      .replace(/\.(\d{3})(\d)/, '.$1/$2')
      .replace(/(\d{4})(\d)/, '$1-$2')
      .slice(0, 18); // Limita o tamanho
  };

  const handleCnpjChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const maskedValue = applyCnpjMask(e.target.value);
    setCnpj(maskedValue);
  };

  const validarCnpj = () => {
    // Lista de CNPJs válidos para simulação
    const cnpjsValidos = ["05.336.475/0001-77", "11.111.111/0001-11", "22.222.222/0001-22"];
    
    if (!cnpj.trim()) {
      alert('Por favor, informe o CNPJ');
      return;
    }
    
    // Verifica se o CNPJ está na lista de válidos
    if (cnpjsValidos.includes(cnpj)) {
      // CNPJ válido, redireciona para a tela de prosseguir
      console.log('CNPJ válido, redirecionando para /prosseguir');
      router.push('/prosseguir');
    } else {
      // CNPJ não cadastrado, redireciona para a página de erro
      console.log('CNPJ não cadastrado, redirecionando para /cnpj-nao-cadastrado');
      router.push('/cnpj-nao-cadastrado');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      validarCnpj();
    }
  };

  const handleMeusPedidos = () => {
    validarCnpj();
  };

  return (
    <div className="font-sans bg-primary text-white min-h-screen">
      <Header>
        <button
          onClick={handleMeusPedidos}
          className="bg-secondary text-white font-bold px-5 py-2.5 rounded"
        >
          MEUS PEDIDOS
        </button>
      </Header>

      {/* Hero Section */}
      <section className="text-center py-10 px-5">
        <h1 className="text-4xl font-normal m-0">
          Sua <strong>Alimentação</strong> <br />
          <strong>Nosso</strong> Compromisso
        </h1>
        <p className="mt-5 text-xl">ÁREA DO FORNECEDOR</p>
        <p className="text-xl">Informe seu CNPJ para ter acesso à sua área exclusiva</p>

        <div className="mt-8 mx-auto flex w-4/5 max-w-xl bg-white rounded-lg overflow-hidden">
          <input
            type="text"
            value={cnpj}
            onChange={handleCnpjChange}
            onKeyPress={handleKeyPress}
            placeholder="INFORME O CNPJ"
            maxLength={18}
            className="flex-1 p-4 text-black outline-none"
          />
          <button
            onClick={validarCnpj}
            className="bg-secondary px-6 text-white font-bold"
          >
            ACESSAR
          </button>
        </div>
      </section>

      {/* Info Section */}
      <InfoSection />
    </div>
  );
};

export default FitInBoxSupplierArea;
