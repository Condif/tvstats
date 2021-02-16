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
    text1,
    text1_1,
    text2,
    text2_2,
    text3,
    text3_3,
    text4,
    text4_4,
    text5,
    text5_5,
    text6,
    text6_6,
    method1,
    noMargin,
  } = props;

  return (
    <div className={container}>
      {componentAmount >= 1 && component1(text1, text1_1)}
      {componentAmount >= 2 && component2(text2, text2_2)}
      {componentAmount >= 3 && component3(text3, text3_3)}
      {componentAmount >= 4 && component4(text4, text4_4, method1, null, "Channels")}
      {componentAmount >= 5 && component5}
      {componentAmount === 6 && component6(text6, text6_6, method1, noMargin, "TargetGroup")}
    </div>
  );
};

export default DivComponent;
