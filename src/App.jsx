import { useState } from "react";
import Die from "./components/Die";
import { nanoid } from "nanoid";
function App() {
  const [allNewDice, setAllNewDice] = useState(generateAllNewDice());

  let gameWon =
    allNewDice.every((die) => die.isHeld) &&
    allNewDice.every((die) => die.value === allNewDice[0].value);

  // Function to generate an array of 10 random dice values between 1 and 6
  function generateAllNewDice() {
    const allNewDiceArr = [];
    for (let index = 0; index < 10; index++) {
      allNewDiceArr.push({
        value: Math.ceil(Math.random() * 6),
        isHeld: false,
        id: nanoid(),
      });
    }
    return allNewDiceArr;
  }

  function rollDice() {
    setAllNewDice((oldDiceArr) =>
      oldDiceArr.map((die) => {
        return die.isHeld
          ? die
          : { ...die, value: Math.ceil(Math.random() * 6) };
      })
    );
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
      <h1 className="title">Tenzies</h1>
      <p className="instructions">
        Roll until all dice are the same. Click each die to freeze it at its
        current value between rolls
      </p>
      <div className="container">{diceElements}</div>
      <button className="roll-dice-button" onClick={rollDice}>
        {gameWon ? "New Game" : "Roll"}
      </button>
    </main>
  );
}

export default App;
