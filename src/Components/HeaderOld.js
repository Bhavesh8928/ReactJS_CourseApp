// CODE = header.js

import React from "react";
function Header({card, title}) {  // This is called Object destructing
    return (
        <div style={{background : "red", padding : "35px", width:"300px"}}>
            <h1>{card}</h1>
            <h2>{title}</h2>
            <p>Here we have created header</p>
        </div>
    )
}
export default Header;