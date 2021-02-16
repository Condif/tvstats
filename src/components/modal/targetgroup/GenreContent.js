import React, { useState, useEffect, useRef } from "react";

import resetThenSet from "../../helpers/ResetThenSet";
import Dropdown from "../../smallcomponent/dropdown/Dropdown";

const GenreContent = () => {
  
  return (
    <div className="GenreContent">
      <div className="row">
        <Dropdown fromComponentString="GenreContent"/>
        {/* <DropDown
          title={"Select Genre"}
          genreList={genreList.genre}
          isListOpen={isListOpen}
          toggleList={toggleList}
          selectItem={selectItem}
          resetThenSet={resetThenSet}
          headerTitle={headerTitle}
          dropdownRef={dropdownRef}
        />
        <DropDown
          title={"Select Genre"}
          genreList={genreList.genre}
          isListOpen={isListOpen}
          toggleList={toggleList}
          selectItem={selectItem}
          resetThenSet={resetThenSet}
          headerTitle={headerTitle}
          dropdownRef={dropdownRef}
        />
        <DropDown
          title={"Select Genre"}
          genreList={genreList.genre}
          isListOpen={isListOpen}
          toggleList={toggleList}
          selectItem={selectItem}
          resetThenSet={resetThenSet}
          headerTitle={headerTitle}
          dropdownRef={dropdownRef}
        /> */}
      </div>
      <div className="row"></div>
    </div>
  );
};

export default GenreContent;
