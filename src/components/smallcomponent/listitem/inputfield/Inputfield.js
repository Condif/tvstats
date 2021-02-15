import "./InputField.css"

const InputField = (label, helperText, marginNone) => {
  return (
    <div className={marginNone ? "" : "InputField"}>
      <label>{label}</label>
      <input placeholder={helperText}></input>
    </div>
  );
};

export default InputField
