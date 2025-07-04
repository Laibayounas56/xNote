import { useContext } from 'react'
import React, { useState } from 'react'
import noteContext from '../context/notes/noteContext'

const AddNote = () => {
  const { addNote } = useContext(noteContext);
  const [note,setNote]=useState({title:"",description:"",tag:"default"})
const handleClick=(e)=>{
    e.preventDefault()
    addNote(note.title,note.description)
}
const onchange=(e)=>{
setNote({...note,[e.target.name]:e.target.value})
}
  return (

         <div className="container my-3">
        <h2>Add a Note</h2>
        <form>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">Title</label>
            <input type="text" className="form-control" id="title" name="title" onChange={onchange}/>
          </div>
          <div className="mb-3">
            <label htmlFor="desc" className="form-label">Description</label>
            <input type="text" className="form-control" id="desc" name="description" onChange={onchange}/>
          </div>
           <div className="mb-3">
            <label htmlFor="tag" className="form-label">Tag</label>
            <input type="text" className="form-control" id="tag" name="tag" onChange={onchange}/>
          </div>
          <button type="submit" className="btn btn-primary" onClick={handleClick}>Add Note</button>
        </form>
      </div>


  )
}

export default AddNote
