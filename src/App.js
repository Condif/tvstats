import React, { useEffect } from "react";
import "./App.css";
// import Genre from "./components/views/genre/Genre";
import Show from "./components/views/show/Show";
import Navbar from "./components/navbar/Navbar";
import { useDispatch, useSelector } from "react-redux";
import {getAllShows} from './actions/ShowAction'

const App = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.show.loading);

  const renderApp = () => {
    if (loading) {
      return <h1>Loading</h1>;
    }
    return (
      <div className="App">
        <Navbar />
        {/* <Genre /> */}
        <Show />
      </div>
    );
  };
  useEffect(() => {
    if (!localStorage.getItem("state")) {
      dispatch(getAllShows());
    }
  }, [dispatch]);

  return <div>{renderApp()}</div>;
};

export default App;
