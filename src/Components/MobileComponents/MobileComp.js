import React, { useState, useEffect } from "react";
import Context from "../../myContext";
import Groups1 from "./Groups1";
import Displaynotes1 from "./Displaynotes1";
import Popup1 from "./Popup1";
import { Route, Routes } from "react-router-dom";

function MobileComp() {
  let [popUp, setPopUp] = useState(false);
  let [groups, setGroups] = useState([]);
  let [activeGroupName, setActiveGroupName] = useState("");
  let [purple, setPurple] = useState(false);
  let [pink, setPink] = useState(false);
  let [skyblue, setSkyBlue] = useState(false);
  let [orange, setOrange] = useState(false);
  let [blue, setBlue] = useState(false);
  let [cyan, setCyan] = useState(false);
  const [selectedGroupName, setSelectedGroupName] = useState("");

  let popUpHandler = () => {
    setPopUp(false);
  };
  let array = [
    { className: "purple", colors: purple },
    { className: "pink", colors: pink },
    { className: "skyblue", colors: skyblue },
    { className: "orange", colors: orange },
    { className: "blue", colors: blue },
    { className: "cyan", colors: cyan },
  ];

  const state = {
    popUp,
    setPopUp,
    groups,
    setGroups,
    activeGroupName,
    setActiveGroupName,
    purple,
    setPurple,
    pink,
    setPink,
    skyblue,
    setSkyBlue,
    orange,
    setOrange,
    blue,
    setBlue,
    cyan,
    setCyan,
    array,
    selectedGroupName,
    setSelectedGroupName,
  };
  useEffect(() => {}, [groups]);
  return (
    <Context.Provider value={state}>
      
        <div className={popUp ? "App" : "nothing"} onClick={popUpHandler}>
          <div className="container">
          <Routes>
           <Route path="/" element = {<Groups1 />} />
            <Route path="display" element = { <Displaynotes1 /> } />
            </Routes>
          </div>
          {popUp ? <Popup1 /> : null}
        </div>
     
    </Context.Provider>
  );
}

export default MobileComp;
