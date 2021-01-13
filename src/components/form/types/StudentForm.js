import React from "react";
import TextField from "../elements/textField";
import Config from "../../../config";

const StudentForm = () => {
  const { textFieldNames } = Config;
  return (
    <form>
      {textFieldNames.map((textFieldName, index) => {
        return <TextField key={index} fieldName={textFieldName} />;
      })}
    </form>
  );
};

export default StudentForm;
