import { useState } from "react";

const AddNote=(props)=>{

    const [noteText, setNoteText] = useState('');
    const[group, setGroup] = useState('');

    const handleChange =(event)=>{
            setNoteText(event.target.value);
    }
    
    const handleGroupChange=(event)=>{
            setGroup(event.target.value);
    }

    const handleSaveClick = ()=>{
        if(noteText.trim().length>0){
            props.handleAddNote(noteText, group);
            setNoteText('');
            setGroup('');
        }   
    }

    return(
        <div className="note new">
            <textarea rows="2" cols="10" placeholder="Type group name" value={group} onChange={handleGroupChange} ></textarea>
            <textarea 
                rows="4" 
                cols="10" 
                placeholder="Type to add a note"
                value={noteText}
                onChange={handleChange}
                ></textarea>
            <div className="note-footer">
                
                <button className="save" onClick={handleSaveClick}>Save</button>
            </div>
        </div>
    );
}

export default AddNote;