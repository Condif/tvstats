import React, {useEffect} from "react";
import './Navbar.css';
import  {useSelector}  from "react-redux"

const Navbar = () => {

  return (
    <div className="Navbar">
        <h3 className="programTitle">PROGRAM</h3>
        <h3>GENRER</h3>
    </div>
  );
}

export default Navbar;