import React from "react";
import "./ListItem.css";
const ListItemAnalytics = (props) => {
  const { renderText1, wordList } = props;
  return (
    <li className="ListItem">
      <div>{renderText1(wordList.id)}</div>
      <div>{renderText1(wordList.fields.target)}</div>
      <div>{renderText1(wordList.fields.channel)}</div>
      <div>{renderText1(wordList.fields.type)}</div>
      <div>{renderText1(wordList.fields.thous_avg)}</div>
      <div>{renderText1(wordList.fields.thous_max)}</div>
    </li>
  );
};

export default ListItemAnalytics;
