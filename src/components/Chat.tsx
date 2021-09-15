import React from "react";
import '../Style/Chat.css'
function Chat(){
    return(
        <div className="gchat">
            <div className="header">User1</div>
            <div className="pdpme"></div>
            <div className="main">
                <ul>
                    <div className="time1">12:00</div>
                    <li className="him">by other user</li>
                    <div className="time2">12:00</div>
                    <li className="me">by me</li>
                    <li className="me">by other user</li>
                    <li className="me">by other user</li>
                </ul>
            </div>
            <div className="footer">
                <div className="alefa">
                    <input type="text" value="" placeholder="ecrivez votre message"/>
                    <input type="button" value="Envoyer" className="buton"/>
                    <h3>ANDRIAMIALISOA Mendrika Koloina</h3>
                    <h3>IGGLIA3</h3>
                    <h3>N°56</h3>

                </div>
            </div>
        </div>
    )
}
export default Chat;