import React, { useContext,useEffect } from "react";
import "../Components/Groups.css";
import Context from "../myContext";

function Groups() {

  
  let dataFromContext = useContext(Context);

  useEffect(()=>{
    
  },[dataFromContext.selectedGroupName])

  let storedGroups = JSON.parse(localStorage.getItem("groups")) || [];
  let receivedColor = JSON.parse(localStorage.getItem("colors")) || [];

  const handleNotesGroup = (e) => {
    dataFromContext.setPopUp(!dataFromContext.popUp);
    e.stopPropagation();
  };

  // receivedColor.map((color, index) => {
  //   return color;
  // });

 
  // let firstTwoChars = storedGroups.map((group,index) => 
  // {return group.slice(0,1)
  // })

  let handleActiveGroup = (group) => {
      dataFromContext.setSelectedGroupName(group)
      
  }

  return (
    <div className="Left-Component">
      <h2 className="pocket-notes">Pocket Notes</h2>
      <div className="Butncontainer">
        <div className="create-notes-group" onClick={handleNotesGroup}>
          <p>
            <span>&#43;</span> &nbsp; <span>Create Notes group</span>
          </p>
        </div>
      </div>
      <div className="display-groupnames">
        <ul className="group-names">
          <div className="colorscontainer">
            {receivedColor.map((color, index) => (
              <span className={color} key={index}><span>{storedGroups[index].slice(0,2) }</span></span>
            ))} 
          </div>
          <div className="groupname-container">
            {storedGroups.map((group, index) => (
              <li className={group === dataFromContext.selectedGroupName ? 'active-group' : ''} key={index} onClick={() => handleActiveGroup(group)}>
                {group}
              </li>
            ))}
          </div>
        </ul>
      </div>
    </div>
  );
}

export default Groups;
