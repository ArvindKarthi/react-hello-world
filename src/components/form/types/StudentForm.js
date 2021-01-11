import React from "react";
import TextField from "../elements/textField";
import Config from "../../../config";

const StudentForm = () => {
  const { textFieldAttributes } = Config;
  return (
    <form>
      {textFieldAttributes.map(({ labelName, size }, index) => {
        return <TextField key={index} labelName={labelName} size={size} />;
      })}
    </form>
  );
};

export default StudentForm;
