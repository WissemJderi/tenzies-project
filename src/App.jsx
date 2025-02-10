import { useState } from "react";
import Die from "./components/Die";
import { nanoid } from "nanoid";
function App() {
  const [allNewDice, setAllNewDice] = useState(generateAllNewDice());

  // Function to generate an array of 10 random dice values between 1 and 6
  function generateAllNewDice() {
    const allNewDiceArr = [];
    for (let index = 0; index < 10; index++) {
      allNewDiceArr.push({
        value: Math.ceil(Math.random() * 6),
        isHeld: true,
        id: nanoid(),
      });
    }
    return allNewDiceArr;
  }

  function rollDice() {
    setAllNewDice(generateAllNewDice());
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
      <div className="container">{diceElements}</div>
      <button className="roll-dice-button" onClick={rollDice}>
        Roll Dice
      </button>
    </main>
  );
}

export default App;
