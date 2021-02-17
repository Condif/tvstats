import "./Button.css";

const Button = (props) => {
  const {text1, buttonText, method1, anchor, containerStyles, buttonStyles} = props
  return (
    <div className={containerStyles}>
      <label>{text1}</label>
      {method1 ? <button className={buttonStyles} onClick={() => method1(anchor)}>{buttonText}</button>: <button className={buttonStyles}>{buttonText}</button> }
    </div>
  );
};

export default Button;
