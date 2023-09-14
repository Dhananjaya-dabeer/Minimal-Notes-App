import React, { useContext, useState, useEffect } from "react";
// import Initial from "../images/initial.png";
import "../MobileComponents/Displaynotes1.css";
import SendButton from "../images/sendbutton.svg";
import Context from "../../myContext";
import { Link } from "react-router-dom";

function Displaynotes1() {
  const [newNote, setNewNote] = useState("");
  const [notes, setNotes] = useState([]);
  let dataFromContext = useContext(Context);
  // let storedGroups = JSON.parse(localStorage.getItem("groups")) || [];
  // let receivedColor = JSON.parse(localStorage.getItem("colors")) || [];
  let firstTwoLetters = dataFromContext.selectedGroupName.slice(0, 2) || [];
  let selectedGroupName = dataFromContext.selectedGroupName || "";

  useEffect(() => {
    if (selectedGroupName) {
      const existingNotes = JSON.parse(localStorage.getItem("notes")) || {};
      const selectedGroupNotes = existingNotes[selectedGroupName] || [];
      setNotes(selectedGroupNotes);
    } else {
      setNotes([]);
    }
  }, [selectedGroupName]);

  // useEffect(() => {
  //   if (dataFromContext.selectedGroupName) {
  //     const savedNotes = JSON.parse(localStorage.getItem(activeGroup)) || [];
  //     setNotes(savedNotes);
  //   }
  // }, [dataFromContext.selectedGroupName]);

  const handleNotes = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      if (newNote.trim() !== "") {
        // e.preventDefault();

        const newNoteObj = {
          text: newNote,
          group: selectedGroupName,
          created: new Date().toISOString(),
        };

        // Load existing notes for the selected group
        const existingNotes = JSON.parse(localStorage.getItem("notes")) || {};

        // Update the notes for the selected group
        existingNotes[selectedGroupName] =
          existingNotes[selectedGroupName] || [];
        existingNotes[selectedGroupName].push(newNoteObj);

        // Save the updated data back to localStorage
        localStorage.setItem("notes", JSON.stringify(existingNotes));

        setNotes(existingNotes[selectedGroupName]);
        setNewNote("");
      }
    }
  };
  const handleSendClick = () => {
    if (newNote.trim() !== "") {
      const newNoteObj = {
        text: newNote,
        group: selectedGroupName,
        created: new Date().toISOString(),
      };

      // Load existing notes for the selected group
      const existingNotes = JSON.parse(localStorage.getItem("notes")) || {};

      // Update the notes for the selected group
      existingNotes[selectedGroupName] = existingNotes[selectedGroupName] || [];
      existingNotes[selectedGroupName].push(newNoteObj);

      // Save the updated data back to localStorage
      localStorage.setItem("notes", JSON.stringify(existingNotes));

      setNotes(existingNotes[selectedGroupName]);
      setNewNote("");
    }
  };

  return (
    <div
      className="Right-comp1"
      id={dataFromContext.selectedGroupName ? "right-comp" : ""}
    >
      <div className="notes-header-container1">
        {dataFromContext.selectedGroupName && (<div className="backword"><Link to={'/'}>&#8592;</Link></div>)}
        {dataFromContext.selectedGroupName && (
          <div className="color">
            <span className="skyblue">
              <span id="two-letters">{firstTwoLetters}</span>
            </span>
          </div>
        )}
        {dataFromContext.selectedGroupName && (
          <div className="selected-group">
            <h1>{dataFromContext.selectedGroupName}</h1>
          </div>
        )}
      </div>
      {dataFromContext.selectedGroupName ? (
        ""
      ) : (
        <div>
          {/* <div className="image">
          <img src={Initial} alt="" />
      </div> */}
          {/* <div className="pocketnotes">
          <h1>Pocket Notes</h1>
        </div>
        <div className="description">
          <p>
            Send and receive messages without keeping your phone online.
            <br />
            Use Pocket Notes on up to 4 linked devices and 1 mobile phone
          </p>
        </div> */}
        </div>
      )}
      {dataFromContext.selectedGroupName && (
        <div className="chat-box1">
          {notes.map((note, index) => (
            <div className="chat-message">
              <div className="time-stamp">
                {" "}
                {Date.parse(note.created)
                  ? new Date(note.created).toLocaleString()
                  : "Invalid Date"}
              </div>
              <div className="message">{note.text}</div>
            </div>
          ))}
        </div>
      )}
      {dataFromContext.selectedGroupName && (
        <div className="notesinput1">
          <div>
            <textarea
              name="notes"
              id="notesinput"
              cols="30"
              rows="10"
              placeholder="Enter your text here..........."
              value={newNote}
              onChange={(event) => setNewNote(event.target.value)}
              onKeyDown={handleNotes}
            ></textarea>

            <img src={SendButton} alt="" onClick={handleSendClick} />
          </div>
        </div>
      )}
    </div>
  );
}

export default Displaynotes1;
