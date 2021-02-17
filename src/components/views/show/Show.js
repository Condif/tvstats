import React, { useState, useEffect, useRef, useCallback } from "react";
import "./Show.css";
import ShowTable from "../../../components/showtable/ShowTable";
import DivComponent from "../../smallcomponent/listitem/DivComponent";
import InputField from "../../../components/smallcomponent/listitem/inputfield/Inputfield";
import Button from "../../../components/smallcomponent/button/Button";
import Modal from "../../../components/modal/Modal";
import Dropdown from "../../../components/smallcomponent/dropdown/Dropdown"

const Show = () => {
  const [text, setText] = useState({});
  const [open, setOpen] = useState("");
  const [openShowDropdown, setOpenShowDropdown] = useState(false);
  const [categoryList, setCategoryList] = useState([
    {
      id: 0,
      title: "Film",
      selected: false,
      key: "category",
    },
    {
      id: 1,
      title: "Serie",
      selected: false,
      key: "category",
    },
    {
      id: 2,
      title: "Dokumentär",
      selected: false,
      key: "category",
    },
  ]);
  const [categoryDropdownHeader, setCategoryDropdownHeader] = useState(
    "Välj Kategori"
  );
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
    setOpen(anchor);
  };

  // Logic
  const textHasValues =
    text !== undefined &&
    text.helperText !== undefined &&
    text.label !== undefined;

  return (
    <div className="Show">
      {open === "Channels" && (
        <Modal
          setOpen={setOpenHandler}
          text1={text.label[3]}
          modalAnchor="ChooseChannel"
        />
      )}
      {open === "TargetGroup" && (
        <Modal
          setOpen={setOpenHandler}
          text1={text.label[5]}
          modalAnchor="TargetGroup"
        />
      )}
      {textHasValues && (
        <DivComponent
          container={"FlexStart"}
          componentAmount={6}
          component1={<InputField text1={text.label[0]} text2={text.helperText[0]}/>}
          component2={<InputField text1={text.label[1]} text2={text.helperText[0]}/>}
          component3={<InputField text1={text.label[2]} text2={text.helperText[0]}/>}
          component4={<Button text1={text.label[3]} text2={text.label[3]} method1={setOpenHandler} noMargin={false} modalAnchor="Channels"/>}
          text4={text.label[3]}
          text4_4={text.label[3]}
          method1={setOpenHandler}
          component5={
            <Dropdown
              list={categoryList}
              setList={setCategoryList}
              headerTitle={categoryDropdownHeader}
              setHeader={setCategoryDropdownHeader}
              setOpenDropdown={setOpenShowDropdown}
              openDropdown={openShowDropdown}
              text1={text.label[4]}
            />
          }
          component6={<Button text1={text.label[5]} text2={text.label[5]} method1={setOpenHandler} noMargin={true} modalAnchor="TargetGroup"/>}
        ></DivComponent>
      )}
      <ShowTable />
    </div>
  );
};

export default Show;
