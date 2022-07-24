import React from 'react'

export default function Die(props) { // props to transfer data from the parent compnent to te child component
  return (
    <div className="die-face">
        <h3>{props.value}</h3>
    </div>
  )
}
