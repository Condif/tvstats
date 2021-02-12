import React from "react";
import "./ListItem.css";
const ListItem = (props) => {
  const { shows, anchor } = props;
  return (
    <>
      {anchor === "header" ? (
        <li className="ListItem">
          <div>
            <h4>Index</h4>
          </div>
          <div>
            <h4>Target</h4>
          </div>
          <div>
            <h4>Channel</h4>
          </div>
          <div>
            <h4>Type</h4>
          </div>
          <div>
            <h4>Thous Avg</h4>
          </div>
          <div>
            <h4>Thous Max</h4>
          </div>
        </li>
      ) : anchor === "item" ? (
        shows && (
          <li className="ListItem">
            <div>
              <h4>{shows.id}</h4>
            </div>
            <div>
              <h4>{shows.fields.target}</h4>
            </div>
            <div>
              <h4>{shows.fields.channel}</h4>
            </div>
            <div>
              <h4>{shows.fields.type}</h4>
            </div>
            <div>
              <h4>{shows.fields.thous_avg}</h4>
            </div>
            <div>
              <h4>{shows.fields.thous_max}</h4>
            </div>
          </li>
        )
      ) : null}
    </>
  );
};

export default ListItem;
