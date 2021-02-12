import React, {useEffect} from "react";
import './Show.css';
import  {useSelector}  from "react-redux"

const Show = () => {

  const allShows = useSelector(state => state.show.allShows)
  useEffect(() => {
    console.log(allShows);
  }, [allShows])

  return (
    <div className="Show">

     {allShows.length !== 0 && <h1>{allShows[0].fields.target}</h1>}
    </div>
  );
}

export default Show;