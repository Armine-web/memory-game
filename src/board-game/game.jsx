import { useState } from "react"
import { Button } from "../components/button/button"
import { GameBoard } from "./components/game-board/game-board"
import "./../board-game/game.css"



export const Game = () => {
const [level, setLevel] =  useState(6);
const [gameStarted, setGameStarted] = useState(true);

const handleLevelChange = (e) => {
    setLevel(Number(e.target.value));
}

const handleStartGame = () => {
    setGameStarted(false);
}
const handleResetGame = () => {
    setGameStarted(true);
}
        
   
    return(
        <div className = "container text-center">
            <h1 className="mb-4"> Memory Game </h1>
            {gameStarted ? (<div className="card p-4 shadow-sm">
                <h4 className="mb-3 select-value" >Select Difficulty Level</h4>
                <div className = "mb-3">
                    <select
                    value={level}
                    className="form-select mb-4"
                    onChange={handleLevelChange}
                    >                      
                        <option value={6}> 6 cards</option>
                        <option value={9}> 9 cards</option>
                        <option value={12}> 12 cards</option>
                   </select>
                   <Button className="btn-primary btn-large" onClick = {handleStartGame}>Start Game</Button>

                </div>
            </div>) : (<GameBoard  level = {level} onResetGame = {handleResetGame} />)}
            
            
            
        </div>
    )
    
}