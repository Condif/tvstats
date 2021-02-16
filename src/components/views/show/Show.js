import React, { useState, useEffect, useRef } from "react";
import "./Show.css";
import ShowTable from "../../../components/showtable/ShowTable";
import DivComponent from "../../smallcomponent/listitem/DivComponent";
import InputField from "../../../components/smallcomponent/listitem/inputfield/Inputfield";
import Button from "../../../components/smallcomponent/button/Button";
import Modal from "../../../components/modal/Modal";
import Dropdown from "../../../components/smallcomponent/dropdown/Dropdown";
// import resetThenSet from "../../../components/helpers/ResetThenSet";
const Show = () => {
  const [text, setText] = useState({});
  const [open, setOpen] = useState("");
  // const [genreList, setGenreList] = useState({
  //   genre: [
  //     {
  //       id: 0,
  //       title: "Komedi",
  //       selected: false,
  //       key: "genre",
  //     },
  //     {
  //       id: 1,
  //       title: "Drama",
  //       selected: false,
  //       key: "genre",
  //     },
  //     {
  //       id: 2,
  //       title: "Skräck",
  //       selected: false,
  //       key: "genre",
  //     },
  //   ],
  // });
  // const [isListOpen, setIsListOpen] = useState(false);
  // const dropdownRef = useRef(null);
  // const [headerTitle, setHeaderTitle] = useState("Välj Genre");
  // const toggleList = () => {
  //   setIsListOpen(!isListOpen);
  // };

  // const selectItem = (item) => {
  //   const { title, id, key } = item;
  //   resetThenSet(id, key, genreList, setGenreList);
  //   setIsListOpen(false);
  //   setHeaderTitle(title);
  // };

  // useEffect(() => {
  //   const pageClickEvent = (e) => {
  //     console.log(e.target);
  //     if (
  //       dropdownRef.current !== null &&
  //       !dropdownRef.current.contains(e.target)
  //     ) {
  //       setIsListOpen(!isListOpen);
  //     }
  //   };
  //   // If the item is active (ie open) then listen for clicks
  //   if (isListOpen) {
  //     window.addEventListener("click", pageClickEvent);
  //   }

  //   return () => {
  //     window.removeEventListener("click", pageClickEvent);
  //   };
  // }, [isListOpen]);
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
          component5={
            <Dropdown fromComponentString="Show"/>
          }
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
