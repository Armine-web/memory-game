import { faker } from "@faker-js/faker";
import { useState} from "react"
import { Button } from "../../../components/button/button"
import { Modal } from "../../../components/modal/modal";
import { Card } from "../card/card"
import { Rating } from "../rating/rating";


export const GameBoard = ( {level, onResetGame})=> {

    const [cards, setCards] = useState(generateShufledCards(level));
    const [cardsRevealed, setCardsRevealed] = useState(true);
    
    console.log(cards );

    const handleCardClick = (id, guessed) => {
        console.log(id, guessed);



        setCards((prevState) => 
            prevState.map((card) => 
            card.id === id ? {...card, revealed: true, guessed} : card));
        }
        const handleHideCards =() => {
            setCardsRevealed(false);
        };

        const isAllCardsOpened = cards.every((card) => card.revealed);
        const guessedCorrect = cards.filter((card) => card.guessed);


        const handleResetGame = () => {
            onResetGame();
        };

        const rating = calculateRating (guessedCorrect.length, level);
        console.log(rating);
        
        
    
    return (
        <div className="mt-4">
            {cardsRevealed ? (
                <Button className = "btn-warning btn-lg mb-3" onClick = {handleHideCards} >Hide</Button>
            ) : (
                <div className="mb-3 text-muted">
                    Start guessing by clicking cards!
                </div>
            )}
            
            <div className="row row-cols-3 g-3">
                {cards.map(card => (
                    <Card show = {cardsRevealed} key = {card.id} card = {card} onClick = {handleCardClick} />
                    ))}
            </div>
            
            <Modal open = {isAllCardsOpened} title={`Game Over!`}>
                <div className="mt-4">
                    <Rating rating = {rating}> You guessed {guessedCorrect.length} correct

                    </Rating>
                    <Button className = "btn-primary btn-lg" onClick={handleResetGame}>Start Again</Button>
                </div>
            </Modal>
        </div>
    )
    
};


const generateShufledCards = (level) => {
    const words = Array.from({length: level}, () => faker.word.noun());

    return words.map((word, index) => ({
        id: index,
        word: word,
        revealed: false,
        guessed: false,
    }))
}


const calculateRating = (corectAnswers, totalQuestions) => {
    const percentage = (corectAnswers / totalQuestions) * 100;
    if (percentage >= 90) return 5;
    if (percentage >= 75) return 4;
    if (percentage >= 50) return 3;
    if (percentage >= 25) return 2;
    if (percentage >= 0) return 1;
    return 0;
}
