import React from "react"
import "./App.css"
import useCalc from "hooks/useCalculatorController"

function App() {
  const calc = useCalc()

  return <div className='calculator-app'>{calc.getTotal()}</div>
}

export default App
