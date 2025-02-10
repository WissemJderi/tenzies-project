import { useState } from "react";
import Die from "./components/Die";

function App() {
  const [allNewDice, setAllNewDice] = useState(generateAllNewDice());

  // Function to generate an array of 10 random dice values between 1 and 6
  function generateAllNewDice() {
    const allNewDiceArr = [];
    for (let index = 0; index < 10; index++) {
      allNewDiceArr.push(Math.ceil(Math.random() * 6));
    }
    return allNewDiceArr;
  }
  function rollDice() {
    setAllNewDice(generateAllNewDice());
  }
  const diceElements = allNewDice.map((die) => {
    return <Die value={die} />;
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
