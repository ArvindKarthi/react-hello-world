import React from "react";
import TextField from "./TextField";

const Form = () => {
  const textFieldNames = [
    "Username",
    "Interest",
    "Email",
    "Phone",
    "College",
    "Department",
  ];
  return (
    <form>
      {textFieldNames.map((textFieldName) => {
        return <TextField key="{textFieldName}" fieldName={textFieldName} />;
      })}
    </form>
  );
};

export default Form;
