import React from "react";

const TextField = ({ fieldName }) => {
  return (
    <div>
      <label htmlFor={fieldName} className="label">
        {fieldName}
      </label>
      <input type="text" name={fieldName} required />
    </div>
  );
};

export default TextField;
