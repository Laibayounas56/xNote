import React from "react";
import NoteContext from "./noteContext";
import { useState } from "react";
const NoteState=(props)=>{
const notesInitial=
    [
  {
    "_id": "6863e70254d7571e6d75722c4",
    "user": "686137afed7d415697cc15fc",
    "title": "mynote2",
    "description": "imabarbiegurl",
    "tag": "personal",
    "date": "2025-07-01T13:47:46.606Z",
    "__v": 0
  },{
    "_id": "6863e70254d5716e6d75722c4",
    "user": "686137afed7d415697cc15fc",
    "title": "mynote2",
    "description": "imabarbiegurl",
    "tag": "personal",
    "date": "2025-07-01T13:47:46.606Z",
    "__v": 0
  },
  {
    "_id": "6863e70254d8571e6d75722c4",
    "user": "686137afed7d415697cc15fc",
    "title": "mynote2",
    "description": "imabarbiegurl",
    "tag": "personal",
    "date": "2025-07-01T13:47:46.606Z",
    "__v": 0
  },
  {
    "_id": "6863e70254d571e6d8975722c4",
    "user": "686137afed7d415697cc15fc",
    "title": "mynote2",
    "description": "imabarbiegurl",
    "tag": "personal",
    "date": "2025-07-01T13:47:46.606Z",
    "__v": 0
  }
]
const[notes,setNotes]=useState(notesInitial)
//Add a Note
console.log("Adding a note")

const addNote=(title,description,tag)=>{
  const note={"_id": "6863e70254d571e6d8975722c4",
    "user": "686137afed7d415697cc15fc",
    "title": title,
    "description": description,
    "tag": tag,
    "date": "2025-07-01T13:47:46.606Z",
    "__v": 0}

setNotes(notes.concat(note)); 

}

//Delete a note
const deleteNote=(id)=>{
console.log("Deleting the note witrh id"+id)
  const newNotes = notes.filter((note) => note._id !== id);
  setNotes(newNotes);
};



//Edit a Note
const editNote=()=>{

}

  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote }}>
      {props.children}
    </NoteContext.Provider>
  );
};
export default NoteState