import React from "react";
import D6 from "../../../components/dice_d6.jsx";


export default function DiceTray() {
    return (
        <div style={{ marginLeft: "100px", display: "flex", justifyContent: "space-around", width: "90vw" }}>
            <div className="d6_container">
            <D6 /><D6 /><D6 />
        </div> 
        </div >
    );
}