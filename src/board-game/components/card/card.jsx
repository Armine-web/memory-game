import { useState } from "react";
import { Button } from "../../../components/button/button"

export const Card = ({ card, show, onClick }) => {
    const [value, setValue] = useState("");
    const { id, revealed, word} = card;

    const handleCardChecked = () => {
        const guessed = word.toLowerCase() === value.toLowerCase()
        onClick(id, guessed);
    }

    const handleInputChange = (e) => {
        setValue(e.target.value);
    }
    return (
        <div className= {`col text-center card p-3 shadow
        ${
            revealed || show ? "card-revealed" : "card-hidden"
        }`}>
            <div className="text-muted input-group">
                {revealed || show ? word : (
                    <>
                        <input 
                        onChange={handleInputChange} 
                        className="form-control" 
                        placeholder="Guess the word"
                        />
                        <Button 
                        className = "btn-primary btn-sm" 
                        onClick = {handleCardChecked}>
                            Check
                        </Button>
                    </>
                )}
            
            </div>
        </div>
    )
}