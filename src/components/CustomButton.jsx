import React from 'react';

const CustomButton = ({ text, onClick,className, type = 'button', }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={className}
    >
      {text}
    </button>
  );
};

export default CustomButton;
