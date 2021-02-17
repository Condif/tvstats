import React, { useState, useEffect, useRef } from "react";
import Dropdown from "../../smallcomponent/dropdown/Dropdown";

const GenreContent = () => {
  const [openGenreDropdown, setOpenGenreDropdown] = useState(false);
  const [genreDropdownHeader, setGenreDropdownHeader] = useState(
    "Välj Genre"
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
        />
      </div>
      <div className="row"></div>
    </div>
  );
};

export default GenreContent;
