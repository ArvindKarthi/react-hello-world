import React from "react";

const Label = ({ attributes }) => {
  const { name, size } = attributes;
  return (
    <label htmlFor={name} className={`d-block fn-${size} form-label`}>
      {name}
    </label>
  );
};

export default Label;
