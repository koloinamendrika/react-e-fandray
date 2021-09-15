import React from "react";
import '../Style/Drawer.css'
function Drawer(){
    return(
        <div className="gdrawer" >
            <h1>Message</h1>
            <form id="checkbox" method="get" action="/search" autoComplete="off">
                <input name="q" type="text" placeholder="search..." />
                <input id="bouton" type="submit" value="" />
            </form>
            <br />
            <div className="">Me</div>
            <div className="pdputil"></div>
            <h1>Amis</h1>
            <div>
                User1
            </div><div className="pdputil1"></div>
            <div>
                User2
            </div><div className="pdputil2"></div>
            <div>
                User3
            </div><div className="pdputil3"></div>
        </div>
    )
}
export default Drawer;