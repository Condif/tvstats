import React, {useEffect} from "react";
import './Show.css';
import  {useSelector}  from "react-redux"
import ShowTable from "../../../components/showtable/ShowTable"
const Show = () => {
  return (
    <div className="Show">
      <ShowTable />
    </div>
  );
}

export default Show;