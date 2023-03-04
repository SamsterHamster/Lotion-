import React from 'react';
import NavBar from './Components/NavBar';
import NoteList from './Components/NoteList';
import Note from './Components/Note';
import "./App.css";

function App() {
  return (
    <div className='notionClone'>
    <div className='Nav'>
      <NavBar />
    </div>

    <div className = "bottom">
      
      <NoteList />
      <Note />

    </div>
    </div>
  );
}

export default App;
