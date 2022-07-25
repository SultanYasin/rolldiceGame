import React from "react";
import { nanoid } from "nanoid";
import "./App.css";
import Die from "./Components/Die";
import Confetti from "react-confetti";

export default function App() {
  const [dice, setDice] = React.useState(allNewDice());


  function generateNewDice(){
    return{
    value: Math.ceil(Math.random() * 6),
    isHeld: false,
    id: nanoid(),
  }
}

// everytime I'm calling this function, it creating an array of objects
  function allNewDice() {
    const newDice = [];  
    for (let i = 0; i < 10; i++) newDice.push(generateNewDice());// pushing an object that have random value and uniqe key by using generateNewDice()  to the array
    return newDice;
  }

  function rollDice() {
    if(!Tenzies){ //
       setDice(oldDice => oldDice.map(die => { 
        return die.isHeld ? die : generateNewDice()})); 
     }else{
    setTenzis(false);
    setDice(allNewDice());
  }
}
    //check the isHeld property in the old array (map makes a new array)if it's true I'll keep the same die. Otherwise I'll generate a new die
    //inside the map I'll look to each die object that if it is the same die 
    //with property(id) that was passed into the function then I'll update that object
  function holdDice(id) {
    setDice(prevDice => prevDice.map(die => {return die.id === id ? {...die , isHeld : !die.isHeld} : die}))
  }

  const diceElements = dice.map((die) => (
    <Die key={die.id} value={die.value} isHeld={die.isHeld} holdDice={()=>holdDice(die.id)} />
  ));


//_________________________________________Wining Check Department_______________________________________________

  const[Tenzies , setTenzis] = React.useState(false);  

  React.useEffect(() => {
    const allDiceHelder = dice.every(die => die.isHeld) ; // will check every die in the array and if all of them are held then it will return true
    const firstDiceValue = dice[0].value;
    const allDiceSameValue = dice.every(die => die.value === firstDiceValue); // must have callback function because it's a function that will be called every time the array changes

    if(allDiceHelder && allDiceSameValue){
        setTenzis(true)
        console.log("You win!");
        }
    
  } , [dice]);



  
 //{Tenzies && <Confetti />}
  return (
    <main>
      <h1 className="title">Tenzies</h1>
      <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
      <div className="dice-container">{diceElements}</div>
      <button className="roll-dice" onClick={rollDice}>
        {Tenzies ? "New Game" :  "Roll"}
      </button>
    </main>
  );
}


//