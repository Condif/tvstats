import React, { useEffect } from "react";
import "./ShowTable.css";
import { useSelector } from "react-redux";
import ListItem from "../listitem/ListItem";
const ShowTable = () => {
  const allShows = useSelector((state) => state.show.allShows);
  return (
    <ul className="ShowTable">
      <ListItem anchor={"header"}/>
      {allShows.length !== 0 &&
        allShows.map((shows, index) => {
          return (
              <ListItem key={index} shows={shows} anchor={"item"} />
          );
        })}
    </ul>
  );
};

export default ShowTable;
