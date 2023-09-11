import React, { useState,useEffect } from 'react'
import Context from '../myContext';
import Popup from '../Components/Popup' 
import Groups from '../Components/Groups' 
import DIsplaynotes from './DIsplaynotes';


function DesktopComp() {
    let [popUp, setPopUp] = useState(false);
    let [groups, setGroups] = useState([])
    let [activeGroupName, setActiveGroupName] = useState('')
    let [purple, setPurple] = useState(false)
    let [pink, setPink] = useState(false)
    let [skyblue, setSkyBlue] = useState(false)
    let [orange, setOrange] = useState(false)
    let [blue, setBlue] = useState(false)
    let [cyan, setCyan] = useState(false)
    const [selectedGroupName, setSelectedGroupName] = useState("");

    let popUpHandler = () => {
        setPopUp(false);
      };
     let array = [{className:'purple',colors:purple },{className:'pink',colors:pink},{className:'skyblue',colors:skyblue},{className:'orange',colors:orange},{className:'blue',colors:blue}, {className:'cyan',colors:cyan }]
     
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
      }
      useEffect(() => {

      },[groups])
      
    
  return (
      <Context.Provider value={state}>
      <div className={popUp ? "App" : "nothing"} onClick={popUpHandler}>
        <div className="container">
          <Groups/>
          <DIsplaynotes />
        </div>
        {popUp ? <Popup /> : null}
      </div>
    </Context.Provider>
  )
}

export default DesktopComp
