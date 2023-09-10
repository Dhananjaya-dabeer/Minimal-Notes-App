import React, { useContext } from "react";
import Context from "../myContext";
import { useState } from "react";
import './Popup.css'
function Popup() {
 

  let [newgroupName, setNewGroupName] = useState('')
  
 
  

  let dataFromContext = useContext(Context);

  let popUpHandler = (event) => {
    event.stopPropagation()
    
  }
  
  let createGroup = () => {
      let reqColors = (dataFromContext.purple || dataFromContext.pink || dataFromContext.skyblue || dataFromContext.orange || dataFromContext.blue || dataFromContext.cyan)
        let storedGroups = JSON.parse(localStorage.getItem('groups')) || []
        let groupUnicNameCheck = storedGroups.find((name) => name === newgroupName)
        
    if(newgroupName.trim() !== '' && reqColors && groupUnicNameCheck !== newgroupName){
      const existingGroups = JSON.parse(localStorage.getItem('groups')) || [];

      const updatedGroups = [...existingGroups, newgroupName];

        dataFromContext.setGroups(updatedGroups)
        localStorage.setItem('groups',JSON.stringify(updatedGroups))
        

        dataFromContext.setActiveGroupName(newgroupName)
       let assignedColor =  dataFromContext.array.filter((item) => {return item.colors === true })
       let finalColor = assignedColor.map((item) => {
        return item.className;
       })
       console.log(finalColor)
      let existingColors =  JSON.parse(localStorage.getItem('colors')) || [] 

       let updatedColors = [...existingColors,finalColor[0]]
       localStorage.setItem('colors',JSON.stringify(updatedColors))
        setNewGroupName('')
        dataFromContext.setPopUp(false)
        
    }
  }

  let handlePurple = () => {
      dataFromContext.setPurple(!dataFromContext.purple)
      dataFromContext.setPink(false)
      dataFromContext.setSkyBlue(false)
      dataFromContext.setOrange(false)
      dataFromContext.setBlue(false)
      dataFromContext.setCyan(false)
    }

    let handlePink = () => {
      dataFromContext.setPink(!dataFromContext.pink)
      dataFromContext.setPurple(false)
      dataFromContext.setSkyBlue(false)
      dataFromContext.setOrange(false)
      dataFromContext.setBlue(false)
      dataFromContext.setCyan(false)

    }
    let handleSkyBlue = () => {
      dataFromContext.setSkyBlue(!dataFromContext.skyblue)
      dataFromContext.setPink(false)
      dataFromContext.setPurple(false)
      dataFromContext.setOrange(false)
      dataFromContext.setBlue(false)
      dataFromContext.setCyan(false)

    }
    let handleOrange = () => {
      dataFromContext.setOrange(!dataFromContext.orange)
      dataFromContext.setPink(false)
      dataFromContext.setPurple(false)
      dataFromContext.setSkyBlue(false)
      dataFromContext.setBlue(false)
      dataFromContext.setCyan(false)

    }
    let handleBlue = () => {
      dataFromContext.setBlue(!dataFromContext.blue)
      dataFromContext.setPink(false)
      dataFromContext.setPurple(false)
      dataFromContext.setSkyBlue(false)
      dataFromContext.setOrange(false)
      dataFromContext.setCyan(false)

    }
    let handleCyan = () => {
      dataFromContext.setCyan(!dataFromContext.cyan)
      dataFromContext.setPink(false)
      dataFromContext.setPurple(false)
      dataFromContext.setSkyBlue(false)
      dataFromContext.setOrange(false)
      dataFromContext.setBlue(false)

    }

  return (
    <div className="pop-up" onClick={popUpHandler}>
      <div className="header">
        <h2 className="header">Create New Notes Group</h2>
      </div>
      <div className="groupname">
        <h3 id="groupname">Group Name</h3>
        <input
          id="nameholder"
          type="text"
          name="group-name"
          placeholder="Enter your group name....."
          onChange={(event) => setNewGroupName(event.target.value)}
        />
      </div>
      <div className="choose-colour">
        <h3 id="choosecolour">Choose colour</h3>
        <div className="colors">
          <div className= "purple" id={dataFromContext.purple ? 'purple' : ''} onClick={handlePurple}></div>
          <div className="pink" id={dataFromContext.pink ? 'pink' : ''} onClick={handlePink}></div>
          <div className="skyblue" id={dataFromContext.skyblue ? 'skyblue' : ''} onClick={handleSkyBlue}></div>
          <div className="orange" id={dataFromContext.orange ? 'orange' : ''} onClick={handleOrange}></div>
          <div className="blue" id={dataFromContext.blue ? 'blue' : ''} onClick={handleBlue}></div>
          <div className="cyan" id={dataFromContext.cyan ? 'cyan' : ''} onClick={handleCyan}></div>
        </div>
      </div>

      <div className="butn">
        <button id="butn" onClick={createGroup}>Create</button>
      </div>
    </div>
  );
}

export default Popup;
