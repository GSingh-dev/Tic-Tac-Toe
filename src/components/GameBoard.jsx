import { useState } from "react";

const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
];
// console.log(initialGameBoard[0][0])


export default function GameBoard({ onSelectSquare,activePlayerSymbol }) {

    const [gameBoard, setGameBoard] = useState(initialGameBoard);
    function handleClick(rowIndex, colIndex) {
        setGameBoard((prevGameBoard) => {
            const updatedGameBoard = [...prevGameBoard.map((innerArray) => [...innerArray])]
            updatedGameBoard[rowIndex][colIndex] = activePlayerSymbol;
            console.log(updatedGameBoard);
            return updatedGameBoard;
        })

    }
    onSelectSquare();

    return (
        <ol id="game-board">
            {gameBoard.map((row, rowIndex) => (
                <li key={rowIndex}>
                    <ol>
                        {row.map((playerSymbol, colIndex) => (
                            <li key={colIndex}>
                                <button onClick={() => handleClick(rowIndex, colIndex)}>{playerSymbol}</button>
                            </li>
                        ))}
                    </ol>
                </li>
            ))}

        </ol>


    )
}