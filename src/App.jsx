import { useState, useRef, useEffect } from "react";
import Die from "./components/Die";
import { nanoid } from "nanoid";
import Confetti from "react-confetti";
function App() {
  const [allNewDice, setAllNewDice] = useState(() => generateAllNewDice());
  const [counter, setCounter] = useState(0);
  const [mostAttempts, setMostAttempts] = useState(0);
  const buttonRef = useRef(null);

  let gameWon =
    allNewDice.every((die) => die.isHeld) &&
    allNewDice.every((die) => die.value === allNewDice[0].value);

  useEffect(() => {
    if (gameWon) {
      buttonRef.current.focus();
    }
  }, [gameWon]);
  // Function to generate an array of 10 random dice values between 1 and 6
  function generateAllNewDice() {
    const allNewDiceArr = [];
    for (let index = 0; index < 10; index++) {
      allNewDiceArr.push({
        // Math.ceil(Math.random() * 6)
        value: 5,
        isHeld: false,
        id: nanoid(),
      });
    }
    return allNewDiceArr;
  }

  function checkHighestScore() {
    if (counter > mostAttempts) {
      setMostAttempts(counter);
    } else {
      return mostAttempts;
    }
  }

  function rollDice() {
    if (!gameWon) {
      setAllNewDice((oldDiceArr) =>
        oldDiceArr.map((die) => {
          return die.isHeld
            ? die
            : { ...die, value: Math.ceil(Math.random() * 6) };
        })
      );
      setCounter(counter + 1);
    } else {
      setAllNewDice(generateAllNewDice());
      setCounter(0);
      checkHighestScore();
    }
  }
  // Function to hold or unhold a die based on its id
  function hold(id) {
    setAllNewDice((prevArr) => {
      return prevArr.map((die) => {
        if (die.id === id) {
          return { ...die, isHeld: !die.isHeld };
        } else {
          return die;
        }
      });
    });
  }
  const diceElements = allNewDice.map((die) => {
    return (
      <Die
        value={die.value}
        key={die.id}
        isHeld={die.isHeld}
        hold={hold}
        id={die.id}
      />
    );
  });

  return (
    <main>
      {gameWon && <Confetti numberOfPieces={100} />}
      <div aria-live="polite" className="sr-only">
        {gameWon && (
          <p>
            Congratulation! You won! Press &quot;New Game&quot; to start again.
          </p>
        )}
      </div>
      <h1 className="title">Tenzies</h1>
      <h2>Most Attempts: {mostAttempts}</h2>
      <p className="instructions">
        Roll until all dice are the same. Click each die to freeze it at its
        current value between rolls
      </p>
      <h3>
        Rolls:
        {counter}
      </h3>
      <div className="container">{diceElements}</div>
      <button ref={buttonRef} className="roll-dice-button" onClick={rollDice}>
        {gameWon ? "New Game" : "Roll"}
      </button>
    </main>
  );
}

export default App;
