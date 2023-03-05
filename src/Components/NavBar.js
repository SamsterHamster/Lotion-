import React from 'react';
import "./NavBar.css";

const NavBar = () => {
    return(
    <section>
        <section id='tophalfnav'>
            <span id = "topbarleft">
            <button id = "NavBarButton" onclick="hidenotes()"> &#9776;</button>
            </span>

        <span id = "title"> Lotion </span>

        <span id = "topbarright">
            <button onclick="hidenotes()" > &#9776;</button>
        </span>

        </section>
      
      <p id = "subheader"> Like Notion, But Worse!</p>

      </section>
    )
}

export default NavBar;