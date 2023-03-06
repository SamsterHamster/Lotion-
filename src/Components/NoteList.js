import React from 'react';
import "./NoteList.css";

const NoteList = ({notes, addnote, activenote, setactivenote}) => {

    const sortednotes = notes.sort((a, b) => b.lastmodified - a.lastmodified);

    return(
        <span class = "notelist">
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
                        <p>{body && body.substr(0,50) + "..."}</p>

                    </div>
                </div>

                ))};

            </div>

        </span>
        
    )
}

export default NoteList; 