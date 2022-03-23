import React from "react";

const Button = ({
  onClick,
  className,
  type = "type",
  bgColor = "primary",
  children,
}) => {
  let bgClassName = "bg-primary";
  switch (bgColor) {
    case "primary":
      bgClassName = "bg-primary";
      break;
    case "secondary":
      bgClassName = "bg-secondary";
      break;
    default:
      break;
  }
  return (
    <button
      type={type}
      onClick={onClick}
      className={`py-3 px-6  capitalize rounded-lg text-center w-full mt-auto ${bgClassName} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
