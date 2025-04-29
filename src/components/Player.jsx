import {useState} from "react";
export default function Player({ name, symbol }) {
    const [isEditing, setIsEditing] = useState(false);
    // const [buttonText, setbuttonText] = useState("Save");
    function handleClick(){
        setIsEditing(!isEditing);
        
    }

    return (
        <li>
            <span className="player-info">
                {isEditing ? <span className="player-name">{name}</span> : <input type="text" placeholder="Enter Name" />}                
                <span className="player-symbol">{symbol}</span>
            </span>
            {isEditing ?  <button onClick={handleClick}>Edit</button> :  <button onClick={handleClick}>Save</button>}
           
        </li>

    )
}