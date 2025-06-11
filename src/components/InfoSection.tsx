import React from 'react';
import InfoCard from './InfoCard';

const cards = [
  {
    imageSrc: 'https://cdn-icons-png.freepik.com/256/7891/7891770.png?semt=ais_hybrid',
    title: 'Cadastre-se',
    description: 'para realizar pedidos'
  },
  {
    imageSrc: 'https://png.pngtree.com/png-vector/20200417/ourmid/pngtree-shopping-on-mobile-png-image_2189444.jpg',
    title: 'Consulte seu CNPJ',
    description: 'Visualize Produtos Disponíveis para sua Empresa'
  },
  {
    imageSrc: 'https://img.lovepik.com/png/20231112/cheap-clipart-man-with-glasses-is-holding-a-grocery-shopping_566111_wh1200.png',
    title: 'Faça seu Pedido',
    description: 'É Prático e Seguro'
  },
];

const InfoSection: React.FC = () => (
  <section className="py-10 text-center">
    <h2 className="text-2xl mb-8">Informações</h2>
    <div className="flex justify-center flex-wrap gap-5">
      {cards.map((card) => (
        <InfoCard key={card.title} {...card} />
      ))}
    </div>
  </section>
);

export default InfoSection;
