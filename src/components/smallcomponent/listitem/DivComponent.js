import React from "react";
import "../../../stylehelper/Container.css";

const DivComponent = (props) => {
  const {
    container,
    componentAmount,
    component1,
    component2,
    component3,
    component4,
    component5,
    component6,
  } = props;

  return (
    <div className={container}>
      {componentAmount >= 1 && component1}
      {componentAmount >= 2 && component2}
      {componentAmount >= 3 && component3}
      {componentAmount >= 4 && component4}
      {componentAmount >= 5 && component5}
      {componentAmount === 6 && component6}
    </div>
  );
};

export default DivComponent;
