import "../modal/choosechannel/ChooseChannel.css"


const CheckBox = (props) => {
  return (
    <div className="CheckBox">
        <div className="checkBox"></div>
        <h3>{props.text1}</h3>
    </div>
  );
};

export default CheckBox;


