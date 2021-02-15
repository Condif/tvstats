import CheckBox from "../../smallcomponent/CheckBox";
import "./TargetGroup.css";

const TargetGroupContent = () => {
  return (
    <div className="TargetGroupContent">
      <div className="row">
        <h3>Produktionsland:</h3>
        <div className="checkBoxContainer">
          <CheckBox text1={"Sverige"} />
          <CheckBox text1={"Utlänsk"} />
        </div>
      </div>
      <div className="row">
        <h3>Huvudmålgrupp:</h3>
        <div className="checkBoxContainer">
          <CheckBox text1={"Barn"} />
          <CheckBox text1={"Vuxen"} />
        </div>
      </div>
    </div>
  );
};

export default TargetGroupContent;
