import React from "react";
import NoteContext from "./noteContext";
import { useState } from "react";
const host = "https://x-note-seven.vercel.app";

const NoteState = (props) => {
  const notesInitial = []
  const [notes, setNotes] = useState(notesInitial)

  //Get all Notes

  const getNotes = async () => {
    //API Call
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'authorize-token':localStorage.getItem('token')

      }
    });
    const json = await response.json()
    console.log(json)
    setNotes(json)

  }


  //Add a Note
  const addNote = async (title, description, tag) => {
    //API Call
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'authorize-token':localStorage.getItem('token')
      

      },
      body: JSON.stringify({ title, description, tag })
    });

    console.log("Adding a note")
    const note = await response.json()
    setNotes(notes.concat(note));
  }

  //Delete a note
  const deleteNote = async (id) => {
    //API Call
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'authorize-token':localStorage.getItem('token')
        

      },

    });
    const json = await response.json()
    console.log(json)
    console.log("Deleting the note witrh id" + id)
    const newNotes = notes.filter((note) => note._id !== id);
    setNotes(newNotes);
  };


  //Edit note
  const editNote = async (id, title, description, tag) => {

    //API Call
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'authorize-token':localStorage.getItem('token')
       

      },
      body: JSON.stringify({ title, description, tag })
    });
    const json = await response.json()
    console.log(json)
    //Logic
    let newNotes=JSON.parse(JSON.stringify(notes))
    for (let i = 0; i < newNotes.length; i++) {
      const element = newNotes[i]
      if (element._id === id) {
        newNotes[i].title = title;
        newNotes[i].description = description;
        newNotes[i].tag = tag
    break;
      }
    }
    setNotes(newNotes)
  }



  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes }}>
      {props.children}
    </NoteContext.Provider>
  );
};
export default NoteState






