import React from "react";

const CustomButton = ({ text, onClick, className = "", type = "button" }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`bg-primary text-white px-6 py-3 rounded-full hover:bg-blue-800 transition duration-300 shadow-md ${className}`}
    >
      {text}
    </button>
  );
};

export default CustomButton;
