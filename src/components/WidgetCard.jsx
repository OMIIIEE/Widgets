import React from 'react';
  // Using Heroicons for the cross icon
  import { FaTimes } from 'react-icons/fa';

const WidgetCard = ({ widgetName, widgetText, onRemove }) => {
  return (
    <div className="bg-blue-100 shadow-md rounded-lg p-4 relative w-[20%] max-h-[60vh] h-[20vh] ">
      {/* Cross Icon for Remove */}
      <button
        onClick={onRemove}
        className="absolute top-2 right-2 text-gray-400 hover:text-red-600"
      >
         <FaTimes className="h-6 w-6" />
      </button>

      {/* Widget Content */}
      <h3 className="text-lg font-semibold text-blue-700">{widgetName}</h3>
      <p className="text-gray-700 text-wrap overflow-hidden text-ellipsis whitespace-normal">{widgetText}</p>
    </div>
  );
};

export default WidgetCard;


// import React from 'react';
// import { FaTimes } from 'react-icons/fa';

// const WidgetCard = ({ widgetName, widgetText, onRemove }) => {
//   return (
//     <div className="bg-white shadow-md rounded-lg p-4 w-64">
//        <button
//         onClick={onRemove}
//         className="absolute top-2 right-2 text-gray-400 hover:text-red-600"
//       >
//          <FaTimes className="h-6 w-6" />
//       </button>
//       <h4 className="text-lg font-semibold text-blue-700">{widgetName}</h4>
//       <p className="text-gray-700">{widgetText}</p>
     
//     </div>
//   );
// };

// export default WidgetCard;
