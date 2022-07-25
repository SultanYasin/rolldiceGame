import React from "react";
import "./App.css";
import Die from "./Components/Die";
import { nanoid } from "nanoid";

export default function App() {
  const [dice, setDice] = React.useState(allNewDice());

  function allNewDice() {
    // everytime I'm calling this function, it creating an array of objects
    const newDice = [];
    // pushing an object that have random value and uniqe key to the array
    for (let i = 0; i < 10; i++) {
      newDice.push({
        value: Math.ceil(Math.random() * 6),
        isHeld: false,
        id: nanoid(),
      });
    }
    return newDice;
  }

  //used to re-render the dice when the user clicks the roll button
  function rollDice() {
    setDice(allNewDice());
  }

    //inside of the map I'll look to each die object that if it is the same die 
    //with property(id) that was passed into the function then I'll update that object
  function holdDice(id) {
    setDice(prevDice => prevDice.map(die => {return die.id === id ? {...die , isHeld : !die.isHeld} : die}))
  }

  const diceElements = dice.map((die) => (
    <Die key={die.id} value={die.value} isHeld={die.isHeld} holdDice={()=>holdDice(die.id)} />
  ));

  return (
    <main>
      <div className="dice-container">{diceElements}</div>
      <button className="roll-dice" onClick={rollDice}>
        Roll
      </button>
    </main>
  );
}
