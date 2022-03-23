import React from "react";

const Button = ({ onClick, className, children }) => {
  return (
    <button
      onClick={onClick}
      className={`py-3 px-6 bg-primary capitalize rounded-lg text-center w-full mt-auto ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
