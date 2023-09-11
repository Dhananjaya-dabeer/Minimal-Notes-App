import React, { useContext,useEffect } from "react";
import Context from '../../myContext';
import '../MobileComponents/Groups1.css'
import { Link } from "react-router-dom";

function Groups1() {
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
      <div className="Left-Component1">
        <h2 className="pocket-notes">Pocket Notes</h2>
        <div className="Butncontainer">
          <div className="create-notes-group" onClick={handleNotesGroup}>
            <p>
              <span>&#43;</span> &nbsp; <span>Create Notes group</span>
            </p>
          </div>
        </div>
        <div className="display-groupnames1">
          <ul className="group-names1">
            <div className="colorscontainer1">
              {receivedColor.map((color, index) => (
                <span className={color} key={index}><span>{storedGroups[index].slice(0,2) }</span></span>
              ))} 
            </div>
            <div className="groupname-container1">
              {storedGroups.map((group, index) => (
              <li className={group === dataFromContext.selectedGroupName ? 'active-group1' : ''} key={index} onClick={() => handleActiveGroup(group)}>
                 <Link to={'display'}> {group} </Link>  
                </li> 
              ))}
            </div>
          </ul>
        </div>
      </div>
    );
  
}

export default Groups1
