import React from "react";
import { useState } from "react";

function BtnForColors(){
    const [forColor, setForColor] = useState(false);

    const red = {backgroundColor: "red"} 
    const blue = {backgroundColor: "blue"}

    function redColor(){
        setForColor(true);
    }

    function blueColor(){
        setForColor(false);
    }

    return(
        <div className="background-color" style={forColor? red : blue}>
            <button onClick={redColor}>🔴 Red</button>
            <button onClick={blueColor}>🔵 Blue</button>
        </div>
    )
}

export default BtnForColors;