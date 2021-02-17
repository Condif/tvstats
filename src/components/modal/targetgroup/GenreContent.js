import React, { useState, useEffect, useRef } from "react";
import Dropdown from "../../smallcomponent/dropdown/Dropdown";
import DivComponent from "../../smallcomponent/listitem/DivComponent";

const GenreContent = () => {
  const [openGenreDropdown, setOpenGenreDropdown] = useState(false);
  const [genreDropdownHeader, setGenreDropdownHeader] = useState("Välj Genre");
  const [genreList, setGenreList] = useState([
    {
      id: 0,
      title: "Komedi",
      selected: false,
      key: "genre",
    },
    {
      id: 1,
      title: "Drama",
      selected: false,
      key: "genre",
    },
    {
      id: 2,
      title: "Skräck",
      selected: false,
      key: "genre",
    },
  ]);
  const [openTestDropdown, setOpenTestDropdown] = useState(false);
  const [testDropdownHeader, setTestDropdownHeader] = useState("Välj Test");
  const [testList, setTestList] = useState([
    {
      id: 0,
      title: "Test",
      selected: false,
      key: "test",
    },
    {
      id: 1,
      title: "Test2",
      selected: false,
      key: "test",
    },
    {
      id: 2,
      title: "Test3",
      selected: false,
      key: "test",
    },
  ]);

  return (
    <div className="GenreContent">
      <div className="row">
        <DivComponent
          container={"FlexStart MarginLeft"}
          componentAmount={2}
          component1={
            <Dropdown
              openDropdown={openGenreDropdown}
              list={genreList}
              setList={setGenreList}
              setOpenDropdown={setOpenGenreDropdown}
              setHeader={setGenreDropdownHeader}
              headerTitle={genreDropdownHeader}
            />
          }
          component2={
            <Dropdown
              openDropdown={openTestDropdown}
              list={testList}
              setList={setTestList}
              setOpenDropdown={setOpenTestDropdown}
              setHeader={setTestDropdownHeader}
              headerTitle={testDropdownHeader}
            />
          }
        />
      </div>
      <div className="row"></div>
    </div>
  );
};

export default GenreContent;
