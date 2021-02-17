import "./InputField.css"

const InputField = (props) => {
  const {text1, text2, setInput, marginNone} = props

  const saveInput = (e) => {
    setInput(e.target.value)
  }
  
  return (
    <div className={marginNone ? "" : "InputField"}>
      <label>{text1}</label>
      <input onChange={(e) => saveInput(e)} placeholder={text2}></input>
    </div>
  );
};

export default InputField
