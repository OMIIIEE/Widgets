import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

const Navbar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    const term = event.target.value;
    setSearchTerm(term);
    onSearch(term);
  };

  return (
    <nav className="bg-[#C5FFF8] p-4 flex justify-between items-center shadow-lg">
      <h1 className="text-[#7B66FF] text-2xl font-bold">Dashboard</h1>
      <div className="relative w-1/3">
        <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#7B66FF]" />
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearch}
          placeholder="Search widgets..."
          className="p-2 pl-10 rounded-lg bg-white text-[#7B66FF] text-xl w-full focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-[#7B66FF]"
        />
      </div>
    </nav>
  );
};

export default Navbar;
