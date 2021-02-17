import React from "react";
import "./Dropdown.css";

const Dropdown = (props) => {
  const {
    list,
    headerTitle,
    setOpenDropdown,
    setHeader,
    setList,
    openDropdown,
    text1
  } = props;

  const selectItem = (item) => {
    const { title, id, key } = item;
    resetThenSet(id, key, title);
    setOpenDropdown(false);
  };

  const resetThenSet = (id, key, title) => {
    const temp = [...list];
    temp.forEach((item) => (item.selected = false));
    temp[id].selected = true;
    setList(temp);
    setHeader(title);
  };

  const toggleOpenDropdown = () => {
    setOpenDropdown(!openDropdown)
  }

  return (
    <div className="Dropdown">
      <label>{text1}</label>
      <div className="dropDownContainer">
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
          <div className="ddList" role="list">
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
      {openDropdown &&
      <div className="backdrop" onClick={() => toggleOpenDropdown()}></div>}
    </div>
  );
};

export default Dropdown;
