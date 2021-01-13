import React from "react";

const TextField = ({ attributes }) => {
  const { type, name, size, placeholder } = attributes;
  return (
    <input
      type={type}
      name={name}
      className={`form-control form-control-${size} `}
      id={name}
      placeholder={placeholder}
      required
    />
  );
};

export default TextField;
