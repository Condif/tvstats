import React from "react";
import "./Dropdown.css";
import {
  setGenreDropdownHeader,
  setCategoryDropdownHeader,
} from "../../../actions/DropdownAction";

const Dropdown = (props) => {
  const {
    list,
    headerTitle,
    dropdownRef,
    setOpenDropdown,
    setHeader,
    setList,
    openDropdown
  } = props;

  const selectItem = (item) => {
    console.log(list);
    const { title, id, key } = item;
    resetThenSet(id, key, title);
    setOpenDropdown(false);
  };

  const resetThenSet = (id, key, title) => {
    const temp = [...list];
    temp.forEach((item) => (item.selected = false));
    temp[id].selected = true;
    console.log(temp  + "key temp");
    setList(temp);
    setHeader(title);
  };

  const toggleOpenDropdown = () => {
    console.log(setOpenDropdown + openDropdown);
    setOpenDropdown(!openDropdown)
  }

  return (
    <div className="Dropdown">
      <button
        type="button"
        className="ddHeader"
        onClick={() =>
          toggleOpenDropdown()
        }
      >
        <div className="ddHeaderTitle">{headerTitle}</div>
        {openDropdown ? (
          <i className="fas fa-arrow-up"></i>
        ) : (
          <i className="fas fa-arrow-down"></i>
        )}
      </button>
      {(list && openDropdown) &&(
        <div ref={dropdownRef} className="ddList" role="list">
          {list.map((item) => {
            return (
              <button
                type="button"
                className="ddListItem"
                key={item.id}
                onClick={() => selectItem(item)}
              >
                {item.title} {item.selected && <i className="fas fa-check"></i>}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
