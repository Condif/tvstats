import "./InputField.css"

const InputField = (props) => {
  console.log(props);
  return (
    <div className={props.marginNone ? "" : "InputField"}>
      <label>{props.text1}</label>
      <input placeholder={props.text2}></input>
    </div>
  );
};

export default InputField
