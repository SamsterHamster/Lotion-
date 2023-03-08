import React, { useState, useEffect } from 'react';

import NoteList from './Components/NoteList';
import Note from './Components/Note';
import "./App.css";
import uuid from "react-uuid";
import { useActionData } from 'react-router-dom';

/* Tried to implement routing in app, yet was not working as intended. I tried :(
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import View from "./View";
import Edit from "./Edit";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />}></Route>
          <Route path="/:id" element={<View />}></Route>
          <Route path="/:id/edit" element={<Edit />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
*/


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
      body: " ",
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

  const [disp,setdisp] = useState(false);

    const Hidenotes = () => {
        (disp?setdisp(false):setdisp(true))


      
    };
  return (
    <div className='notionClone'>
    <section>
        <section id='tophalfnav'>
            <span id = "topbarleft">
            <button id = "NavBarButton" onClick={Hidenotes}> &#9776;</button>
            </span>

        <span id = "title"> Lotion </span>

        <span id = "topbarright">
            <button> &#9776;</button>
        </span>

        </section>
      
      <p id = "subheader"> Like Notion, But Worse!</p>

      </section>

    <div className = "bottom">
      
      <NoteList 
      notes ={notes} 
      addnote ={addnote} 
      activenote={activenote} 
      setactivenote={setactivenote}
      toggle={disp}
      
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
/* 

LAYOUT.js 

import React, { useState, useEffect } from 'react';
import "./App.css";
import uuid from "react-uuid";
import { useActionData } from 'react-router-dom';

function Layout() {

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
      body: " ",
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

  const [disp,setdisp] = useState(false);

    const Hidenotes = () => {
        (disp?setdisp(false):setdisp(true))


      
    };



    const editfield = (key,value) => {
        updatenote({
            ...activenote,
            [key]: value,
            lastmodified: Date.now(),
        })

    };

    if(!activenote){
        return <div id = "nonoteselected"> 
        <p>No Note Selected.</p>
        <p>Please select an existing note or create a new note using the &#43; button.         </p>
        </div>
    };
    
    const handledelete = () =>{
        if(window.confirm("Are you sure you want to delete?")){
            deletenote(activenote.id);
        }

    }; 


  return (
    <div className='notionClone'>
    <section>
        <section id='tophalfnav'>
            <span id = "topbarleft">
            <button id = "NavBarButton" onClick={Hidenotes}> &#9776;</button>
            </span>

        <span id = "title"> Lotion </span>

        <span id = "topbarright">
            <button> &#9776;</button>
        </span>

        </section>
      
      <p id = "subheader"> Like Notion, But Worse!</p>

      </section>

    <div class = "bottom">
      
    <span className={`notelist ${toggle ? "hidden" : ""}`}>
            <span class = "listheader">   
                <span id = "lefttitle"> Notes </span>
                <button id = "NoteListButton" onClick={addnote}>&#43;</button>
            </span>

            <div class = "notebody">
                
                {sortednotes?.map(({id,title,body,lastmodified}, i) => (
                <div className={`card ${id === activenote && "active"}`}
                    onClick={() => setactivenote(id)}>
                    <div id = "cardtitle">
                        {title}

                    </div>
                    <div id = "lastedit">
                        Last modified {""}
                        {new Date(lastmodified).toLocaleDateString("en-CA", {

                            hour: "2-digit",
                            minute:"2-digit"
                        })};

                    </div>
                    <div id = "description">
                        <p>{body && body.substr(0,100) + "..."}</p>

                    </div>
                </div>

                ))};

            </div>

        </span>
        <span className='note'>
            <div class = "aboveeditorheader">

                <input type = "text" id = "notetitle" value={activenote.title} onChange={(e) => editfield("title",e.target.value)} autoFocus />
                <span id ="editorbuttons">
                    <button id = "savebutton" onClick="savenote()">Save</button>
                    <button id = "deletebutton" onClick={handledelete}>&#128465;</button>
                    </span>
        
            </div>

            <div class = "aboveeditorsubheader">

                    <span id = "notedate">
                        {new Date(activenote.lastmodified).toLocaleDateString("en-CA", {

                            hour: "2-digit",
                            minute:"2-digit"
                        })};

                    </span>
                    <span id = "timeicon"> &#128197;
                    

                    </span>

            </div>

            <div id = "editor">
                <ReactQuill theme="snow" value={activenote.body} onChange={(e) => editfield("body",e.target.value)}/>
            </div>

        </span>

    </div>
    </div>
  );
}


export default App;
*/


export default App;
