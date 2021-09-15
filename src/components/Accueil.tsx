import React from "react";
import Chat from "./Chat";
import Drawer from "./Drawer";
import '../Style/Accueil.css';
export default function Accueil(){
    return(
        <div className="gpage">
            <Drawer/>
            <Chat/>
            
        </div>
    )
}