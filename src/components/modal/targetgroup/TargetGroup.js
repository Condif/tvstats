import React, { useState } from "react";
import GenreContent from "./GenreContent"
import TargetGroupContent from "./TargetGroupContent"

const TargetGroup = () => {
  const [show, setShow] = useState("Genre");

  const showContentHandler = (anchor) => {
    setShow(anchor);
  };
  return (
    <div className="ChooseGenre">
      <div className="buttonDiv">
        <button onClick={() => showContentHandler("Genre")}>Genre</button>
        <button onClick={() => showContentHandler("TargetGroup")}>Målgrupp och produktionsland</button>
      </div>
      {show === "Genre" ? <GenreContent /> : <TargetGroupContent />}
    </div>
  );
};

export default TargetGroup;