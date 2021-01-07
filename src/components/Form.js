import React from "react";
import TextField from "./TextField";
import { TextFieldNames } from "../config";

const Form = () => {
  return (
    <form>
      {textFieldNames.map((textFieldName) => {
        return <TextField key="{textFieldName}" fieldName={textFieldName} />;
      })}
    </form>
  );
};

export default Form;
