import {useState} from "react";
export default function Player({ initialName, symbol, isActive }) {
    const [playerName, setPlayerName] = useState(initialName);
    const [isEditing, setIsEditing] = useState(false);
    function handleClick(){
        setIsEditing(editing => !editing);        
    }

    function handleChange(event){
        console.log(event);
        setPlayerName(event.target.value);

    }

    return (
        <li className={isActive ? 'active' : undefined} >
            <span className="player-info">
                {isEditing ? <span className="player-name">{playerName}</span> : <input type="text"  required value={initialName} onChange={handleChange} />}                
                <span className="player-symbol">{symbol}</span>
            </span>
            {isEditing ?  <button onClick={handleClick}>Edit</button> :  <button onClick={handleClick}>Save</button>}
           
        </li>

    )
}