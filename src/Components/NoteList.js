import React from 'react';
import "./NoteList.css";

function NoteList({notes, addnote}){
    return(
        <span class = "notelist">
            <span class = "listheader">   
                <span id = "lefttitle"> Notes </span>
                <button id = "NoteListButton" onClick={addnote}>&#43;</button>
            </span>

            <div class = "notebody">
                
                {notes?.map((note) => (
                <div class = "card">
                    <div id = "cardtitle">
                        {note.title}

                    </div>
                    <div id = "lastedit">
                        Last modified: {new Date(note.lastmodified).toLocaleDateString("en-CA", {

                            hour: "2-digit",
                            minute:"2-digit"
                        })}

                    </div>
                    <div id = "description">
                        {note.body && note.body.substr(0,100) + "..."}

                    </div>
                </div>

                ))}

            
            </div>

        </span>
        
    )
}

export default NoteList; 