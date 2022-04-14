import NotesList from "./Components/NotesList";
import { useEffect, useState } from "react";
import Header from "./Components/Header";
import { useContext } from 'react';
import AllnotesContext from "./store/main-context";

const App = () => {
  const notesContext = useContext(AllnotesContext);
  const notes = notesContext.notes;
  // const [notes, setNotes] = useState([
  //   {
  //     id: nanoid(),
  //     text: "This is my first note",
  //     date: "13/04/2022",
  //     group: "1"
  //   },
  //   {
  //     id: nanoid(),
  //     text: "This is my second note",
  //     date: "13/04/2022",
  //     group: "2"
  //   },
  //   {
  //     id: nanoid(),
  //     text: "This is my third note",
  //     date: "13/04/2022",
  //     group: "3"
  //   }
  // ]);

  // const [searchText, setSearchText] = useState('');

  // useEffect(() => {
  //   const savedNotes = JSON.parse(localStorage.getItem('react-notes-app-data'));

  //   if (savedNotes) {
  //     setNotes(savedNotes);
  //   }

  // }, []);

  // useEffect(() => {
  //   localStorage.setItem('react-notes-app-data', JSON.stringify(notes))
  // }, [notes]);

  // const addNote = (text, group) => {
  //   const date = new Date();
  //   const newNote = {
  //     id: nanoid(),
  //     text: text,
  //     date: date.toLocaleDateString(),
  //     group: group
  //   };

  //   const newNotes = [...notes, newNote];
  //   setNotes(newNotes);
  // }

  // const deleteNode = (id) => {
  //   const newNotes = notes.filter((note) => note.id !== id);
  //   setNotes(newNotes);
  // }

  const [searchText, setSearchText] = useState('');

  return (
    <div className="bg-container">
      <div className="container">
        <Header handleSearchNote={setSearchText} className="container" />
        <NotesList notes={notes.filter((note) => note.text.toLowerCase().includes(searchText))}
          handleAddNote={notesContext.addNote}
          handleDeleteNode={notesContext.deleteNode}
          editNote={notesContext.saveNote}
        />
      </div>
    </div>

  )
}

export default App;