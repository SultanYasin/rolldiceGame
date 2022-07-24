import React from 'react'
import Die from './Components/Die'
import './App.css'

export default function App() {
  const [dice , setDice] = React.useState(allDice())

  //what this fuction do is generate random values and put it inside the die everytime the page is loaded
  function allDice(){
    //making a new array that contaisns the values of the die
    let newDice = []
     // to generate a number between 1 & 6 to push it to the newDice Array
    for (let i = 0; i < 10; i++) newDice.push(Math.ceil(Math.random() *  6))
    return newDice
  }

  // this function is to re-render the dice (similar to refresh the page) by using the setDice which its work is to reset the dice 
  function rollDice(){setDice(allDice())} 
    
  

const diceElement = dice.map(die => <Die value = {die}/>)


  return (
  <main className="App">
    <div className='dice-container'> {diceElement} </div>
    <button className='roll-dice' onClick={rollDice}>Roll</button>
  </main>
  )
}







/*
import React from 'react';
import './App.css';
import Die from './Components/Die';


export default function App() {
  const [dice , setDice] = React.useState(allNewDice())

// this function is used to generate a  random number 1>6
function allNewDice(){
  const newDice=[]
  for(let i = 0 ; i<10 ; i++)  newDice.push(Math.ceil(Math.random() * 6)) 
  return newDice
}

const diceElement = dice.map(die => <Die value={die}/>)


  return (
    <main className="App">

      <div className="dice-container">
        {diceElement}
      
      </div>

    </main>
  );
}


*/