import React from "react";
import TextField from "../elements/TextField";
import { textFieldNames } from "../../../config";

const StudentForm = () => {
  return (
    <form>
      {textFieldNames.map((textFieldName, index) => {
        return <TextField key={index} fieldName={textFieldName} />;
      })}
    </form>
  );
};

export default StudentForm;
