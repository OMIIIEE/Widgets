import React, { useState,useEffect } from "react";
import { useDispatch } from "react-redux";
import { addWidget } from "../store/actions";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaTimes } from "react-icons/fa";

const AddWidgetModal = ({ category, onClose }) => {
  const dispatch = useDispatch();
  const [widgetName, setWidgetName] = useState("");
  const [widgetText, setWidgetText] = useState("");

  useEffect(() => {
    AOS.init({
      duration: 4000, 
      once: true,
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (widgetName && widgetText) {
      const newWidget = { id: Date.now(), name: widgetName, text: widgetText };
      dispatch(addWidget(category.id, newWidget));
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-end items-start">
    <div
      data-aos="slide-left"
      className="bg-white h-full w-full max-w-md p-6 shadow-lg rounded-lg transform transition-transform duration-300 ease-in-out"
    >
      <button
        onClick={onClose}
        className="text-gray-500 hover:text-red-600 mb-4"
      >
        <FaTimes className="h-6 w-6"/>
      </button>
      <h4 className="text-lg font-bold mb-4">Add New Widget</h4>
      <h3 className="text-xl font-semibold mb-4 text-blue-700">{category.name}</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Widget Name</label>
          <input
            type="text"
            value={widgetName}
            onChange={(e) => setWidgetName(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Widget Text</label>
          <textarea
            value={widgetText}
            onChange={(e) => setWidgetText(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <button
          type="submit"
          className="w-full px-4 py-2 bg-[#7B66FF] text-white rounded hover:bg-violet-700 transition"
        >
          Add Widget
        </button>
      </form>
    </div>
  </div>
  );
};

export default AddWidgetModal;
