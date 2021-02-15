import "./Modal.css";
import ChooseChannel from "./choosechannel/ChooseChannel"
import TargetGroup from "./targetgroup/TargetGroup"

const Modal = (props) => {
  const { setOpen, text1, modalAnchor} = props;

  return (
    <div className="Modal">
      <div className="Content">
        <div className="headerContainer">
          <h1>{text1}</h1>
          <button onClick={() => setOpen("")} className="closeButton">
            x
          </button>
        </div>
        
        {modalAnchor === "ChooseChannel" ? <ChooseChannel/> : <TargetGroup/>}
      </div>
    </div>
  );
};

export default Modal;
