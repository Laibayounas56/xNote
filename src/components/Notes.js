
import NoteItem from './NoteItem';
import AddNote from './AddNote';
import NoteContext from '../context/notes/noteContext'
import { useContext } from 'react'


const Notes = () => {
  const { notes } = useContext(NoteContext) 
  return (
    <>
 {/* <AddNote/> */}
      <div className="row my-3">
        <h2>Your Notes</h2>
        {notes.map((note) => {
          return <NoteItem key={note._id} note={note}/>
        })}
      </div>
</>
  )
}

export default Notes
