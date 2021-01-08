import React from "react";
import TextField from "../elements/TextField";
import config from "../../../config/index";

const StudentForm = () => {
  const { textFieldNames } = config;
  return (
    <form>
      {textFieldNames.map((textFieldName, index) => {
        return <TextField key={index} fieldName={textFieldName} />;
      })}
    </form>
  );
};

export default StudentForm;
