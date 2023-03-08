


import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import "./Note.css";
import "react-quill/dist/quill.snow.css"

function Note ({deletenote, activenote, updatenote}){

    const[mode,setmode] = useState(true);


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
    

    const savemode = () =>{
        setmode(false);
    }
    const editmode = () =>{
        setmode(true);
    }

    const options = {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
    };
    
    const formatDate = (when) => {
        const formatted = new Date(when).toLocaleString("en-US", options);
        if (formatted === "Invalid Date") {
            return "";
        }
        return formatted;
    };

    const calendarupdate = (i) => {
        const updateddate = new Date(i.target.value);
        const theone = {
            ...activenote,
            lastmodified: updateddate.getTime(),
        };
        updatenote(theone);
    };

    return (
        <span className='note'>
            <div className = "aboveeditorheader">

                <input type = "text" id = "notetitle" value={activenote.title} onChange={(e) => editfield("title",e.target.value)} autoFocus />
                <span id ="editorbuttons" >
                    {mode? (
                        <button id = "savebutton" onClick={savemode}>Save</button>
                    ):(
                        <button id = "savebutton" onClick={editmode}>Edit</button>
                
                    )};

                    <button id = "deletebutton" onClick={handledelete}>&#128465;</button>
                </span>
                    
        
            </div>
            
            <div className = "aboveeditorsubheader">

                    <span id = "notedate">
                    <input type="datetime-local" value = {formatDate(activenote.lastmodified)} onChange={calendarupdate} disabled={!mode}/>
                    

                    </span>

            </div>

            {mode?(
                 <div id = "editor">
                 <ReactQuill theme="snow" value={activenote.body} onChange={(value) => editfield("body",value)}/>
             </div>
            
            ):(
                <div className='savedtext' dangerouslySetInnerHTML={{__html:activenote.body}}></div>

            )
        }
        </span>
    )
}

export default Note;