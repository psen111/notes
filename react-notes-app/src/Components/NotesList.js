import Note from "./Note.js";
import AddNote from "./AddNote";

const NotesList = ({ notes, handleAddNote, handleDeleteNode, editNote }) => {



    return (
        <div className="notes-list">
            {notes.map((note) =>
                <Note editNoteHandler={editNote} id={note.id} text={note.text} date={note.date} handleDeleteNode={handleDeleteNode} group={note.group} author={note.author} coloridx={note.colorIdx} />
            )}
            <AddNote handleAddNote={handleAddNote} />
        </div>
    )
}

export default NotesList;