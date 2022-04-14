import {AiFillDelete} from "react-icons/ai";

const Note = ({id, text, date, handleDeleteNode, group}) => {
    return(
        <div className="note">
            <div>
                <h3>{group}</h3>
                <p>{text}</p>
            </div>
            
            <div className="note-footer">
                <small>{date}</small>
                <AiFillDelete 
                    className="delete-icon"
                    size='1.3em' 
                    onClick={()=>handleDeleteNode(id)}
                />
            </div>
        </div>
    );
}

export default Note;