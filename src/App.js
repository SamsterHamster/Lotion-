import React, { useState, useEffect } from 'react';
import NavBar from './Components/NavBar';
import NoteList from './Components/NoteList';
import Note from './Components/Note';
import "./App.css";
import uuid from "react-uuid";
import { useActionData } from 'react-router-dom';

function App() {

  const [notes, setNotes] = useState(
    localStorage.notes ? JSON.parse(localStorage.notes) : []
  );

  const [activenote, setactivenote] = useState(false);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);


  const addnote = () => {
    const newNote = {
      id: uuid(),
      title: "Untitled Note",
      body: "",
      lastmodified: Date.now(),
    };

    setNotes([newNote, ...notes]);
    setactivenote(newNote.id);
  };

  const deletenote = (idtoremove) =>{
    setNotes(notes.filter(({id}) => id !== idtoremove));
  };

  const getactivenote = () => {
    return notes.find(({id}) => id === activenote);
  }

  const updatenote = (updatednote) =>{
    const updatednotearray = notes.map((note) =>{
      if(note.id === activenote){
        return updatednote;
      }
      return note;
    });

    setNotes(updatednotearray);
  }

  return (
    <div className='notionClone'>
    <div className='Nav'>
      <NavBar />
    </div>

    <div class = "bottom">
      
      <NoteList 
      notes ={notes} 
      addnote ={addnote} 
      activenote={activenote} 
      setactivenote={setactivenote}
      
      />
      <Note 
      deletenote ={deletenote} 
      activenote={getactivenote()}
      updatenote={updatenote}
      />

    </div>
    </div>
  );
}


export default App;
