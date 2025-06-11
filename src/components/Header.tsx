import React from 'react';

interface HeaderProps {
  children?: React.ReactNode;
}

const Header: React.FC<HeaderProps> = ({ children }) => (
  <header className="bg-white flex justify-between items-center px-5 py-2.5 border-b border-gray-300">
    <img
      className="h-16"
      src="/assets/logo.jpg"
      alt="Logo Fit In Box"
      onError={(e) => {
        (e.currentTarget as HTMLImageElement).style.display = 'none';
      }}
    />
    <div className="flex items-center gap-5">
      {children}
    </div>
  </header>
);

export default Header;
