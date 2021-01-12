// attributes for each text fields that would make each textField component different.
const textFieldAttributes = [
  {
    name: "Username",
    size: "sm",
    placeholder: "Full Name",
    type: "text",
    isLabel: true,
  },
  {
    name: "Password",
    size: "sm",
    placeholder: "Password",
    type: "password",
    isLabel: false,
  },
  {
    name: "College",
    size: "sm",
    placeholder: "College Name",
    type: "text",
    isLabel: true,
  },
  {
    name: "Department",
    size: "sm",
    placeholder: "Department Name",
    type: "text",
    isLabel: false,
  },
];

const Config = { textFieldAttributes };

export default Config;
