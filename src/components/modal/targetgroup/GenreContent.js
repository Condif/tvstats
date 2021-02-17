import React, { useState, useEffect, useRef } from "react";
import Dropdown from "../../smallcomponent/dropdown/Dropdown";

const GenreContent = () => {
  const [openGenreDropdown, setOpenGenreDropdown] = useState(false);
  const [genreDropdownHeader, setGenreDropdownHeader] = useState(
    "Select Genre"
  );
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
  const genreDropdownRef = useRef("");

  useEffect(() => {
    
    const pageClickEvent = (e) => {
      console.log(genreDropdownRef.current, e.target, e.currentTarget+ "in useeffect genre");
      if (
        genreDropdownRef.current !== null &&
        !genreDropdownRef.current.contains(e.target)
      ) {
        setOpenGenreDropdown(!openGenreDropdown);
      }
    };
    // If the item is active (ie open) then listen for clicks
    if (openGenreDropdown) {
      window.addEventListener("click", pageClickEvent);
    }

    return () => {
      window.removeEventListener("click", pageClickEvent);
    };
  }, [openGenreDropdown]);

  useEffect(() => {
    console.log(openGenreDropdown);
    console.log(genreDropdownRef);
  },[openGenreDropdown])

  return (
    <div className="GenreContent">
      <div className="row">
        <Dropdown
          openDropdown={openGenreDropdown}
          list={genreList}
          setList={setGenreList}
          setOpenDropdown={setOpenGenreDropdown}
          setHeader={setGenreDropdownHeader}
          headerTitle={genreDropdownHeader}
          dropdownRef={genreDropdownRef}
        />
      </div>
      <div className="row"></div>
    </div>
  );
};

export default GenreContent;
