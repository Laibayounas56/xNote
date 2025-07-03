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
  return (
    <NoteContext.Provider value={{ notes,setNotes}}>
        {props.children}
    </NoteContext.Provider>
)
}
export default NoteState