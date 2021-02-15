import React, { useState } from "react";
import ChannelContent from "./ChannelContent";
import ChannelHouseContent from "./ChannelHouseContent";
import "./ChooseChannel.css";

const ChooseChannel = () => {
  const [show, setShow] = useState("Channel");

  const showContentHandler = (anchor) => {
    setShow(anchor);
  };
  return (
    <div className="ChooseChannel">
      <div className="buttonDiv">
        <button onClick={() => showContentHandler("Channel")}>Kanaler</button>
        <button onClick={() => showContentHandler("HouseChannel")}>Kanalhus</button>
      </div>
      {show === "Channel" ? <ChannelContent /> : <ChannelHouseContent />}
    </div>
  );
};

export default ChooseChannel;
