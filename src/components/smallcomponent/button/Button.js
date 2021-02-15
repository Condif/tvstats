import "./Button.css";

const Button = (text1, text2, method1, noMargin, modalAnchor) => {
  return (
    <div className={noMargin ? "Button noMargin" : "Button"}>
      <label>{text1}</label>
      <button onClick={() => method1(modalAnchor)}>{text2}</button>
    </div>
  );
};

export default Button;
