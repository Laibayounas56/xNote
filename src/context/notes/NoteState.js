import React from "react";
import NoteContext from "./noteContext";
import { useState } from "react";
const host="http://localhost:5000"
const NoteState=(props)=>{
const notesInitial=[]
const[notes,setNotes]=useState(notesInitial)

//Get all Notes

const getNotes=async ()=>{
  //API Call
const response=await fetch(`${host}/api/notes/fetchallnotes`,{
  method:'GET',
  headers:{
    'Content-Type':'application/json',
    'authorize-token': 
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjg2MTM3YWZlZDdkNDE1Njk3Y2MxNWZjIn0sImlhdCI6MTc1MTIwODQxN30.rIvftL3kW2mrkfKIcZk2XgB_2oDsNC50-JK3-c10bLA'

  }
});
 const json=await response.json()
console.log(json)
setNotes(json)

}


//Add a Note
const addNote=async (title,description,tag)=>{
  //API Call
const response=await fetch(`${host}/api/notes/addnote`,{
  method:'POST',
  headers:{
    'Content-Type':'application/json',
    'authorize-token': 
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjg2MTM3YWZlZDdkNDE1Njk3Y2MxNWZjIn0sImlhdCI6MTc1MTIwODQxN30.rIvftL3kW2mrkfKIcZk2XgB_2oDsNC50-JK3-c10bLA'

  },
  body:JSON.stringify({title,description,tag})
});

console.log("Adding a note")
 const json=await response.json()
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
const deleteNote=async(id)=>{
  //API Call
const response=await fetch(`${host}/api/notes/deletenote/${id}`,{
  method:'DELETE',
  headers:{
    'Content-Type':'application/json',
    'authorize-token': 
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjg2MTM3YWZlZDdkNDE1Njk3Y2MxNWZjIn0sImlhdCI6MTc1MTIwODQxN30.rIvftL3kW2mrkfKIcZk2XgB_2oDsNC50-JK3-c10bLA'

  },

});
 const json=await response.json()
console.log(json)
console.log("Deleting the note witrh id"+id)
  const newNotes = notes.filter((note) => note._id !== id);
  setNotes(newNotes);
};


//Edit note
const editNote=async (id,title,description,tag)=>{

//API Call
const response=await fetch(`${host}/api/notes/updatenote/${id}`,{
  method:'PUT',
  headers:{
    'Content-Type':'application/json',
    'authorize-token': 
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjg2MTM3YWZlZDdkNDE1Njk3Y2MxNWZjIn0sImlhdCI6MTc1MTIwODQxN30.rIvftL3kW2mrkfKIcZk2XgB_2oDsNC50-JK3-c10bLA'

  },
  body:JSON.stringify({title,description,tag})
});
 const json=await response.json()
//Logic
for(let i=0;i<notes.length;i++){
  const element=notes[i]
    if(element._id===id){
element.title=title;
element.description=description;
element.tag=tag
    }
  }
}


  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote,getNotes }}>
      {props.children}
    </NoteContext.Provider>
  );
};
export default NoteState






