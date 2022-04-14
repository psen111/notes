import { AiFillDelete } from "react-icons/ai";
import { useRef } from 'react';


const Note = ({ editNoteHandler, id, text, date, handleDeleteNode, group, author, coloridx }) => {
    const authorInputRef = useRef(null);
    const textInputRef = useRef(null);
    const groupInputRef = useRef(null);

    const colors = ["#ffadad", "#ffd6a5", "#fdffb6", "#caffbf", "#bf6fff", "#a0c4ff", "#bdb2ff", "#ffc6ff", "#fffffc"];
    const getRandomColor = () => {
        return colors[Math.floor(Math.random() * colors.length)];
    }

    if (text === "") {
        // make it content editable
        //  textInputRef.current.setAttribute("contenteditable", "true");
        if (textInputRef.current) textInputRef.current.focus();
    }
    else if (author === "") {
        // make it content editable
        //authorInputRef.current.setAttribute("contenteditable", "true");
        if (authorInputRef.current) authorInputRef.current.focus();
    }
    else if (group === "") {
        // make it content editable
        // groupInputRef.current.setAttribute("contenteditable", "true");
        if (groupInputRef.current) groupInputRef.current.focus();
    }
    const newNote = {
        id: id,
        text: text,
        date: date,
        group: group,
        colorIdx: coloridx,
    };

    function updateContent() {
        // console.log(i, data);
        newNote.date = new Date().toISOString().slice(0, 10);
        editNoteHandler({ ...newNote, author: authorInputRef.current.innerText, text: textInputRef.current.innerText, group: groupInputRef.current.innerText });



    }


    function ondb0(event) {

        event.target.contentEditable = "true";
        authorInputRef.current.focus();


    }
    function ondb1(event) {

        event.target.contentEditable = "true";
        textInputRef.current.focus();


    }
    function ondb2(event) {

        event.target.contentEditable = "true";
        groupInputRef.current.focus();


    }
    return (
        <div style={{
            backgroundColor: colors[coloridx],
        }} className="note" >
            <div>
                <h3 ref={groupInputRef} onDoubleClick={ondb2} contentEditable='false' onBlur={() => updateContent()}>{group}</h3>
                <p ref={textInputRef} onDoubleClick={ondb1} contentEditable='false' onBlur={() => updateContent()}>{text}</p>
            </div>

            <div className="note-footer">
                <div className="d-flex justify-content-between">
                    <small>{date}</small>
                    <small ref={authorInputRef} onDoubleClick={ondb0} contentEditable='false' onBlur={() => updateContent()}>{author}</small>
                </div>


                <AiFillDelete
                    className="delete-icon"
                    size='1.3em'
                    onClick={() => handleDeleteNode(id)}
                />
            </div>
        </div >
    );
}

export default Note;