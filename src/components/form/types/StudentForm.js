import React from "react";
import TextField from "../elements/textField";
import Config from "../../../config";

const StudentForm = () => {
  const { textFieldAttributes } = Config;
  return (
    <form className="form form-theme-pink">
      <h1 className="form-name">Student Form</h1>
      {textFieldAttributes.map((attributes, index) => {
        return <TextField key={index} attributes={attributes} />;
      })}
    </form>
  );
};

export default StudentForm;
