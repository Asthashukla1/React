import React from "react";

export default function Button({
  children,
  type = "button",
  bgColor = "bg-blue-600",
  textColor = "text-white",
  className = "",
  ...props
}) {
  return (
    <button
      type={type}
      className={`
        px-5 py-2 rounded-lg font-semibold
        ${bgColor} ${textColor}
        hover:brightness-110
        focus:outline-none focus:ring-4 focus:ring-blue-300
        transition duration-300
        shadow-md
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
}
