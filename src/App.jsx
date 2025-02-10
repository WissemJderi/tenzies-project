import Die from "./components/Die";

function App() {
  // Function to generate an array of 10 random dice values between 1 and 6
  function generateAllNewDice() {
    const allNewDiceArr = [];
    for (let index = 0; index < 10; index++) {
      allNewDiceArr.push(Math.ceil(Math.random() * 6));
    }
    return allNewDiceArr;
  }
  console.log(generateAllNewDice());
  return (
    <main>
      <div className="container">
        <Die value={1} />
        <Die value={2} />
        <Die value={3} />
        <Die value={1} />
        <Die value={2} />
        <Die value={3} />
        <Die value={1} />
        <Die value={2} />
        <Die value={3} />
        <Die value={1} />
      </div>
    </main>
  );
}

export default App;
