import NotesList from "./Components/NotesList";
import { useEffect, useState } from "react";
import { nanoid } from 'nanoid';
import Header from "./Components/Header";



const App = ()=>{

  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "This is my first note",
      date: "13/04/2022",
      group: "1"
    },
    {
      id: nanoid(),
      text: "This is my second note",
      date: "13/04/2022",
      group: "2"
    },
    {
      id: nanoid(),
      text: "This is my third note",
      date: "13/04/2022",
      group: "3"
    }
  ]);

  const [searchText, setSearchText] = useState('');

  useEffect(()=>{
    const savedNotes = JSON.parse(localStorage.getItem('react-notes-app-data'));
    
    if(savedNotes){
      setNotes(savedNotes);
    }
    
  }, []);

  useEffect(()=>{
      localStorage.setItem('react-notes-app-data', JSON.stringify(notes)) 
  }, [notes]);

  const addNote = (text, group)=> {
      const date = new Date();
      const newNote ={
        id: nanoid(),
        text: text,
        date: date.toLocaleDateString(),
        group: group
      };

      const newNotes = [...notes, newNote];
      setNotes(newNotes);
  }

  const deleteNode = (id)=>{
    const newNotes = notes.filter((note)=>note.id!==id);
    setNotes(newNotes);
  }


  return(
    <div className="container">
      <Header handleSearchNote={setSearchText} className="container"/>
      <NotesList notes={notes.filter((note)=>note.text.toLowerCase().includes(searchText))} 
                handleAddNote={addNote} 
                handleDeleteNode={deleteNode}
      />
    </div>
  )
}

export default App;