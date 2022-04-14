import Note from "./Note.js";
import AddNote from "./AddNote";

const NotesList = ({notes, handleAddNote, handleDeleteNode}) => {
    return(
        <div className="notes-list"> 
            {notes.map((notes)=>
            <Note id={notes.id} text={notes.text} date={notes.date} handleDeleteNode={handleDeleteNode} group={notes.group} />
            )}
            <AddNote handleAddNote={handleAddNote} />
        </div>
    )
}

export default NotesList;