import React from "react";

const Input = React.forwardRef(
  (
    {
      type = "text",
      value,
      onChange,
      placeholder,
      disabled = false,
      className = "",
      error = false,
      ...props
    },
    ref
  ) => {
    return (
      <input
        type={type}
        value={value}
        onChange={onChange}
        disabled={disabled}
        placeholder={placeholder}
        ref={ref}
        className={`
        flex h-10 w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm
        placeholder:text-gray-500 
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950
        disabled:cursor-not-allowed disabled:opacity-50
        ${error ? "border-red-500 focus-visible:ring-red-500" : ""}
        ${className}
      `}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";

export default Input;
