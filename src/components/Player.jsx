import { useState } from "react";

export default function Player({ initialName, symbol, isActive, onChangeName }) {
    const [playerName, setPlayerName] = useState(initialName);
    const [isEditing, setIsEditing] = useState(false);

    function handleEditClick() {
        setIsEditing(editing => !editing);
        if (isEditing) {
            onChangeName(symbol, playerName);
        }
    }

    function handleChange(event) {
        // console.log(event);
        setPlayerName(event.target.value);

    }

    return (
        <li className={isActive ? 'active' : undefined} >
            <span className="player">
                {/* {isEditing ? <span className="player-name">{playerName}</span> : <input type="text" required value={playerName} onChange={handleChange} />} */}
                {isEditing
                    ? <input type="text" required value={playerName} onChange={handleChange} />
                    : <span className="player-name">{playerName}</span>}

                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
        </li>

    )
}