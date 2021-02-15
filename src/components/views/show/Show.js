import React, { useState } from "react";
import "./Show.css";
import ShowTable from "../../../components/showtable/ShowTable";
import DivComponent from "../../smallcomponent/listitem/DivComponent";
import InputField from "../../../components/smallcomponent/listitem/inputfield/Inputfield";
import Button from "../../../components/smallcomponent/button/Button";
import Modal from "../../../components/modal/Modal"
const Show = () => {
  const [text, setText] = useState({});
  const [open, setOpen] = useState("");
  const lang = "sv";

  if (lang === "sv") {
    import("../../../language/SvText").then((text) => {
      setText(text);
    });
  } else {
    import("../../../language/EnText").then((text) => {
      setText(text);
    });
  }

  const setOpenHandler = (anchor) => {
    setOpen(anchor)
  }

  return (
    <div className="Show">
      {open === "Channels" && <Modal setOpen={setOpenHandler}  text1={text.label[3]} modalAnchor="ChooseChannel"/>}
      {open === "TargetGroup" && <Modal setOpen={setOpenHandler}  text1={text.label[5]} modalAnchor="TargetGroup" />}
      {text !== undefined ? ( 
        (text.helperText !== undefined && text.label !== undefined) &&
        <DivComponent
          container={"FlexStart"}
          componentAmount={6}
          component1={InputField}
          text1={text.label[0]}
          text1_1={text.helperText[0]}
          component2={InputField}
          text2={text.label[1]}
          text2_2={text.helperText[0]}
          component3={InputField}
          text3={text.label[2]}
          text3_3={text.helperText[0]}

          component4={Button}
          text4={text.label[3]}
          text4_4={text.label[3]}
          method1={setOpenHandler}
          
          component5={InputField}
          text5={text.label[4]}
          text5_5={text.helperText[0]}
          
          component6={Button}
          text6={text.label[5]}
          text6_6={text.label[5]}
          method1={setOpenHandler}
          noMargin={"noMargin"}
        ></DivComponent>
      ) : null}
      <ShowTable />
    </div>
  );
};

export default Show;
