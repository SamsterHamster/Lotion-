


import React from 'react';
import ReactQuill from 'react-quill';
import "./Note.css";

function Note (){
    return (
        <span className='note'>
            <div class = "aboveeditorheader">

                <input type = "text" id = "notetitle" autoFocus />
                <span id ="editorbuttons">
                    <button id = "savebutton" onclick="savenote()">Save</button>
                    <button id = "deletebutton" onclick="deletenote()">&#128465;</button>
                    </span>
        
            </div>

            <div class = "aboveeditorsubheader">

                    <span id = "notedate">
                        69 feb

                    </span>
                    <span id = "notetime">
                        420 o-clock

                    </span>

            </div>

            <div id = "editor">
                <ReactQuill theme="snow"/>
            </div>

        </span>
    )
}

export default Note;