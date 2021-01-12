import React from "react";
import TextField from "../elements/textField";
import Label from "../elements/label";
import Config from "../../../config";

const StudentForm = () => {
  const { textFieldAttributes } = Config;
  return (
    <form className="form form-theme-pink">
      <h1 className="form-name">Student Form</h1>
      {textFieldAttributes.map((attributes, index) => {
        const { isLabel } = attributes;

        return (
          <div className="form-group" key={index}>
            {isLabel && <Label attributes={attributes} />}
            <TextField attributes={attributes} />
          </div>
        );
      })}
    </form>
  );
};

export default StudentForm;
