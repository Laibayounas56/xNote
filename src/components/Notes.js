
import NoteItem from './NoteItem';
import AddNote from './AddNote';
import NoteContext from '../context/notes/noteContext'
import { useContext, useEffect,useRef } from 'react'

const Notes = () => {
  const { notes,getNotes} = useContext(NoteContext) 
useEffect(()=>{
  getNotes()
},[])
const ref=useRef(null)
const updateNote=(note)=>{
ref.current.click()
}

  return (
    <>
 <AddNote/>

<button ref={ref} type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
  Launch demo modal
</button>

<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document"> 
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel" >Edit Note</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>

      <div className="row my-3">
        <h2>Your Notes</h2>
        {notes.map((note) => {
          return <NoteItem key={note._id}  updateNote={updateNote} note={note}/>
        })}
      </div>
</>
  )
}

export default Notes
