import React from 'react';

const Header = () => {
  return (
    <header className="bg-blue-600 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">MyApp</h1>
        <nav className="space-x-6">
          <a href="#home" className="hover:text-gray-200">Home</a>
          <a href="#about" className="hover:text-gray-200">About</a>
          <a href="#contact" className="hover:text-gray-200">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
