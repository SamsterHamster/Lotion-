import React from 'react';
import "./NoteList.css";

const NoteList = () => {
    return(
        <div class = "notelist">
            <span class = "listheader">   
                <span id = "lefttitle"> Notes </span>
                <button id = "NoteListButton" onclick="addnote()">&#43;</button>
            </span>

            <div class = "notebody">

                <div class = "card">
                    <div id = "cardtitle">
                        my Note

                    </div>
                    <div id = "lastedit">
                        feb 29

                    </div>
                    <div id = "description">
                        askdkasd

                    </div>
                </div>


            </div>


        </div>
        
    )
}

export default NoteList; 