import React from "react"
import { useDispatch, useSelector } from "react-redux";

const ResetThenSet = (id, key) => {
  const genreList = useSelector((state) => state.dropdown.genreList);
  const dispatch = useDispatch();
  const temp = [...genreList[key]];

  temp.forEach((item) => (item.selected = false));
  temp[id].selected = true;

  dispatch({
    type: "SET_GENRE_LIST",
    genreList: { [key]: temp },
  });
};

export default ResetThenSet;
