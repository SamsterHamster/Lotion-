import React, { useState } from 'react';
import NavBar from './Components/NavBar';
import NoteList from './Components/NoteList';
import Note from './Components/Note';
import "./App.css";
import uuid from "react-uuid";
import { useActionData } from 'react-router-dom';

function App() {

  const[notes, setNotes] = useState([]);

  const addnote = () => {
    const newNote = {
      id: uuid(),
      title: "Untitled Note",
      body: "",
      lastmodified: Date.now(),
    };

    setNotes([newNote, ...notes]);
  };

  return (
    <div className='notionClone'>
    <div className='Nav'>
      <NavBar />
    </div>

    <div class = "bottom">
      
      <NoteList notes ={notes} addnote ={addnote}/>
      <Note />

    </div>
    </div>
  );
}


export default App;
