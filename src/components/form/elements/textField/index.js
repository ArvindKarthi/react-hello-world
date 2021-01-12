import React from "react";

const TextField = ({ attributes }) => {
  const { label, size, placeholder } = attributes;
  return (
    <div className="form-group">
      <label htmlFor={label} className={`d-block fn-${size} form-label`}>
        {label}
      </label>
      <input
        type="text"
        name={label}
        className={`form-control form-control-${size} `}
        id={label}
        placeholder={placeholder}
        required
      />
    </div>
  );
};

export default TextField;
