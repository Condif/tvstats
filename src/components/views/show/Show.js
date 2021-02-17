import React, { useState, useEffect, useRef, useCallback } from "react";
import {useSelector, useDispatch} from "react-redux"
import "./Show.css";
import ShowTable from "../../../components/showtable/ShowTable";
import DivComponent from "../../smallcomponent/listitem/DivComponent";
import InputField from "../../../components/smallcomponent/listitem/inputfield/Inputfield";
import Button from "../../../components/smallcomponent/button/Button";
import Modal from "../../../components/modal/Modal";
import Dropdown from "../../../components/smallcomponent/dropdown/Dropdown"
import {setProgramQuery} from "../../../actions/ProgramQueryAction"
const Show = () => {
  // Import language textfiles
  const [text, setText] = useState({});
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

  // react-redux
  const columnList = useSelector(state => state.programQuery.programQuery.columns)
  const programQuery = useSelector(state => state.programQuery.programQuery)
  const dispatch = useDispatch()
  
  // Dropdown states
  const [openShowDropdown, setOpenShowDropdown] = useState(false);
  

  // Modal opener
  const [open, setOpen] = useState("");
  const setOpenHandler = (anchor) => {
    setOpen(anchor);
  };
  
  // Input states
  const [pubFromDateInput, setPubFromDateInput] = useState("")
  const [pubTooDateInput, setPubTooDateInput] = useState("")
  const [titelInput, setTitelInput] = useState("")
  const setColumnListHandler = (columnList) => {
    let tempProgramQuery = {...programQuery}
    let tempColumns = [...tempProgramQuery.columns]
    tempColumns = columnList
    tempProgramQuery.columns = columnList
    dispatch(setProgramQuery(tempProgramQuery))
  }
  const [columnDropdownHeader, setColumnDropdownHeader] = useState(
    "Välj Kategori"
  );

  // Logic
  const textHasValues =
    text !== undefined &&
    text.helperText !== undefined &&
    text.label !== undefined;

  useEffect(() => {
    console.log(columnList);
  }, [columnList])
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
          container={"FlexStart Absolute"}
          componentAmount={6}
          component1={<InputField setInput={setPubFromDateInput} text1={text.label[0]} text2={text.helperText[0]}/>}
          component2={<InputField setInput={setPubTooDateInput}  text1={text.label[1]} text2={text.helperText[0]}/>}
          component3={<InputField setInput={setTitelInput}  text1={text.label[2]} text2={text.helperText[0]}/>}
          component4={<Button text1={text.label[3]} buttonText={text.label[3]} method1={setOpenHandler} containerStyles={"Button"} buttonStyles={"blue"} anchor="Channels"/>}
          text4={text.label[3]}
          text4_4={text.label[3]}
          method1={setOpenHandler}
          component5={
            <Dropdown
              list={columnList}
              setList={setColumnListHandler}
              headerTitle={columnDropdownHeader}
              setHeader={setColumnDropdownHeader}
              setOpenDropdown={setOpenShowDropdown}
              openDropdown={openShowDropdown}
              text1={text.label[4]}
            />
          }
          component6={<Button text1={text.label[5]} buttonText={text.label[5]} method1={setOpenHandler} containerStyles={"Button noMargin"} buttonStyles={"blue"} anchor="TargetGroup"/>}
        ></DivComponent>
      )}
      <ShowTable />
    </div>
  );
};

export default Show;
