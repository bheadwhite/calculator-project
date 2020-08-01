import React from "react"
import useCalc from "hooks/useCalculatorController"

const CircleBtns = () => {
  const calc = useCalc()

  return (
    <div>
      <div onClick={() => calc.appendDisplay(".")}>.</div>
      <div onClick={() => calc.appendDisplay(1)}>1</div>
      <div onClick={() => calc.appendDisplay(2)}>2</div>
      <div onClick={() => calc.appendDisplay(3)}>3</div>
      <div onClick={() => calc.appendDisplay(4)}>4</div>
      <div onClick={() => calc.appendDisplay(5)}>5</div>
      <div onClick={() => calc.appendDisplay(6)}>6</div>
      <div onClick={() => calc.appendDisplay(7)}>7</div>
      <div onClick={() => calc.appendDisplay(8)}>8</div>
      <div onClick={() => calc.appendDisplay(9)}>9</div>
    </div>
  )
}

export default CircleBtns
