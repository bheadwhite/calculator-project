import React from "react"
import "./App.css"
import Display from "components/Display"
import CircleBtns from "components/CircleBtns"

//componets
//calculator
//buttons (numbers | operands, operators | evaluate or = | clear btn)

function App() {
  return (
    <div className='calculator-app'>
      <Display />
      <CircleBtns />
    </div>
  )
}

export default App
