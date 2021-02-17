import React, { useState, useEffect, useRef, useCallback } from "react";
import "./Show.css";
import ShowTable from "../../../components/showtable/ShowTable";
import DivComponent from "../../smallcomponent/listitem/DivComponent";
import InputField from "../../../components/smallcomponent/listitem/inputfield/Inputfield";
import Button from "../../../components/smallcomponent/button/Button";
import Modal from "../../../components/modal/Modal";

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
    "Select Category"
  );
  const categoryDropdownRef = useRef("");

  const pageClickEvent = useCallback(
    (e) => {
      console.log(
        categoryDropdownRef.current,
        e.target,
        e.currentTarget,
        "current"
      );
      if (
        categoryDropdownRef.current !== null &&
        !categoryDropdownRef.current.contains(e.target)
      ) {
        setOpenShowDropdown(!openShowDropdown);
      }
    },
    [openShowDropdown]
  );

  useEffect(() => {
    // If the item is active (ie open) then listen for clicks
    if (openShowDropdown) {
      window.addEventListener("click", pageClickEvent);
    }
    return () => {
      window.removeEventListener("click", pageClickEvent);
    };
  }, [openShowDropdown]);
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

  useEffect(() => {
    console.log(openShowDropdown);
    console.log(categoryDropdownRef);
  }, [openShowDropdown]);

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
          //----------------- 1
          component1={InputField}
          text1={text.label[0]}
          text1_1={text.helperText[0]}
          //----------------- 2
          component2={InputField}
          text2={text.label[1]}
          text2_2={text.helperText[0]}
          //----------------- 3
          component3={InputField}
          text3={text.label[2]}
          text3_3={text.helperText[0]}
          //----------------- 4
          component4={Button}
          text4={text.label[3]}
          text4_4={text.label[3]}
          method1={setOpenHandler}
          //----------------- 5
          categoryList={categoryList}
          setCategoryList={setCategoryList}
          categoryDropdownHeader={categoryDropdownHeader}
          categoryDropdownRef={categoryDropdownRef}
          setCategoryDropdownHeader={setCategoryDropdownHeader}
          setOpenShowDropdown={setOpenShowDropdown}
          openShowDropdown={openShowDropdown}
          //----------------- 6
          component6={Button}
          text6={text.label[5]}
          text6_6={text.label[5]}
          method1={setOpenHandler}
          noMargin={"noMargin"}
        ></DivComponent>
      )}
      <ShowTable />
    </div>
  );
};

export default Show;
