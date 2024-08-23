import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Category from './Category';
import Navbar from './Navbar';

const Dashboard = () => {
  const categories = useSelector((state) => state.categories);
  const [filteredCategories, setFilteredCategories] = useState(categories);

  const handleSearch = (searchTerm) => {
    if (!searchTerm) {
      setFilteredCategories(categories);
    } else {
      const filtered = categories.map(category => ({
        ...category,
        widgets: category.widgets.filter(widget =>
          widget.name.toLowerCase().includes(searchTerm.toLowerCase())
        ),
      })).filter(category => category.widgets.length > 0);

      setFilteredCategories(filtered);
    }
  };

  useEffect(() => {
    setFilteredCategories(categories);
  }, [categories]);

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar onSearch={handleSearch} />
      <div className="p-6">
        {filteredCategories.map((category) => (
          <div key={category.id}>
            <Category category={category} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
