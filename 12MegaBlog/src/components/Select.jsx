import React, { useId } from "react";

function Select(
  { options = [], label, className = "", ...props },
  ref
) {
  const id = useId();
  return (
    <div className="w-full">
      {label && (
        <label
          htmlFor={id}
          className="block mb-2 text-gray-700 font-medium select-none"
        >
          {label}
        </label>
      )}
      <select
        id={id}
        ref={ref}
        className={`
          w-full px-4 py-2 rounded-md border border-gray-300
          bg-white text-gray-900
          focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
          transition duration-200
          ${className}
        `}
        {...props}
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option.charAt(0).toUpperCase() + option.slice(1)}
          </option>
        ))}
      </select>
    </div>
  );
}

export default React.forwardRef(Select);
