import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Dropdown.css";
import { setIsListOpen, setHeaderTitle } from "../../../actions/DropdownAction";

const Dropdown = (props) => {
  const { fromComponentString } = props;
  const dropdownState = useSelector((state) => state.dropdown);
  const dispatch = useDispatch();
  const {
    genreList,
    currentOpenList,
    headerTitle,
    dropdownRef,
    categoryList,
  } = dropdownState;

  const selectItem = (item) => {
    const { title, id, key } = item;
    resetThenSet(id, key);
    dispatch(setIsListOpen(""));
    dispatch(setHeaderTitle(title));
  };

  const resetThenSet = (id, key) => {
    if (fromComponentString === "Show") {
      const temp = [...categoryList[key]];

      temp.forEach((item) => (item.selected = false));
      temp[id].selected = true;
      dispatch({
        type: "SET_CATEGORY_LIST",
        categoryList: { [key]: temp },
      });
    } else {
      const temp = [...genreList[key]];

      temp.forEach((item) => (item.selected = false));
      temp[id].selected = true;

      dispatch({
        type: "SET_GENRE_LIST",
        genreList: { [key]: temp },
      });
    }
  };

  return (
    <div className="Dropdown">
      <button
        type="button"
        className="ddHeader"
        onClick={() =>
          dispatch(
            setIsListOpen(currentOpenList === "" ? fromComponentString : "")
          )
        }
      >
        <div className="ddHeaderTitle">{headerTitle}</div>
        {currentOpenList === "Show" ? (
          <i className="fas fa-arrow-up"></i>
        ) : currentOpenList === "GenreContent" ? (
          <i className="fas fa-arrow-up"></i>
        ) : (
          <i className="fas fa-arrow-down"></i>
        )}
      </button>
      {genreList && currentOpenList === "GenreContent" ? (
        <div ref={dropdownRef} className="ddList" role="list">
          {genreList.genre.map((item) => {
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
      ) : genreList && currentOpenList === "Show" ? (
        <div ref={dropdownRef} className="ddList" role="list">
          {categoryList.category.map((item) => {
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
      ) : null}
    </div>
  );
};

export default Dropdown;
