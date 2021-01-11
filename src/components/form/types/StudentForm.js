import React from "react";
import TextField from "../elements/textField";
import Config from "../../../config";

const StudentForm = () => {
  const { textFieldAttributes } = Config;
  return (
    <form>
      {textFieldAttributes.map((attributes, index) => {
        return <TextField key={index} attributes={attributes} />;
      })}
    </form>
  );
};

export default StudentForm;
