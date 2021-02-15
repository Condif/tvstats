import React, { useEffect } from "react";
import "./ShowTable.css";
import { useSelector } from "react-redux";
import ListItemAnalytics from "../smallcomponent/listitem/ListItemAnalytics";
import {renderH4, renderP} from "../helpers/RenderFunction"
import {headerTextList} from "../../language/SvText"
const ShowTable = () => {
  const allShows = useSelector((state) => state.show.allShows);
  return (
    <ul className="ShowTable">
      <ListItemAnalytics renderText1={renderH4} wordList={headerTextList}/>
      {allShows.length !== 0 &&
        allShows.map((shows, index) => {
          return (
              <ListItemAnalytics key={index} renderText1={renderP} wordList={shows} />
          );
        })}
    </ul>
  );
};

export default ShowTable;
