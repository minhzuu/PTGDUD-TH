import React, { useState } from 'react';
import { Search, User, ShoppingCart } from 'lucide-react';

const ChefifyHeader = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <header className="bg-white shadow-sm py-4">
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img 
            src="/api/placeholder/40/40?text=C" 
            alt="Chefify Logo" 
            className="w-10 h-10"
          />
          <span className="text-pink-500 font-bold text-xl">Chefify</span>
        </div>

        {/* Search Bar */}
        <div className="flex-grow mx-8 max-w-xl relative">
          <input 
            type="text" 
            placeholder="What would you like to cook?"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
          <Search 
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" 
            size={20} 
          />
        </div>

        {/* Navigation */}
        <nav className="flex items-center space-x-6">
          <div className="flex space-x-6 text-gray-700">
            <a href="#" className="hover:text-pink-500">What to cook</a>
            <a href="#" className="hover:text-pink-500">Recipes</a>
            <a href="#" className="hover:text-pink-500">Ingredients</a>
            <a href="#" className="hover:text-pink-500">Occasions</a>
            <a href="#" className="hover:text-pink-500">About Us</a>
          </div>

          {/* User Actions */}
          <div className="flex items-center space-x-4">
            <button className="text-gray-700 hover:text-pink-500">
              <ShoppingCart size={24} />
            </button>
            <button className="bg-pink-500 text-white px-4 py-2 rounded-full hover:bg-pink-600 flex items-center space-x-2">
              <User size={20} />
              <span>Your Recipe Box</span>
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default ChefifyHeader;