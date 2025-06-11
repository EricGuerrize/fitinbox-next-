import React from 'react';

interface InfoCardProps {
  imageSrc: string;
  title: string;
  description: string;
}

const InfoCard: React.FC<InfoCardProps> = ({ imageSrc, title, description }) => (
  <div className="w-60 bg-secondary-dark rounded-xl p-4 text-left text-white">
    <img className="w-full rounded-lg" src={imageSrc} alt={title} />
    <h3 className="mt-2 text-lg font-semibold">{title}</h3>
    <p className="text-sm">{description}</p>
  </div>
);

export default InfoCard;
