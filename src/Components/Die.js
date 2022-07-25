import React from 'react'

// props to transfer data from the parent compnent to te child component
export default function Die(props) { 
    const styles = {backgroundColor: props.isHeld ? "#59E391" : "white" }
  return (
    <div className="die-face" style={styles} onClick={props.holdDice} >
        <h3>{props.value}</h3>
    </div>
  )
}
