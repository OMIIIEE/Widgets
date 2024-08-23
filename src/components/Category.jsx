import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeWidget } from '../store/actions';
import WidgetCard from './WidgetCard';
import AddWidgetModal from './AddWidgetModal';

const Category = ({ category }) => {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const categories = useSelector((state) => state.categories);

  const handleRemoveWidget = (widgetId) => {
    dispatch(removeWidget(category.id, widgetId));
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="bg-[#A7E6FF] shadow-lg rounded-lg p-6 mb-6">
      <h3 className="text-2xl font-semibold mb-4 text-blue-700">{category.name}</h3>
      <div className="space-y-4 flex flex-wrap gap-4 items-center flex-wrap">
        {category.widgets.map((widget) => (
          <WidgetCard
            key={widget.id}
            widgetName={widget.name}
            widgetText={widget.text}
            onRemove={() => handleRemoveWidget(widget.id)}
          />
        ))}
        <button
          onClick={openModal}
          className="px-4 py-2 bg-[#7B66FF] text-white rounded hover:bg-violet-700 transition"
        >
          Add Widget
        </button>
      </div>
      {isModalOpen && (
        <AddWidgetModal
          category={category}
          onClose={closeModal}
        />
      )}
    </div>
  );
};

export default Category;
