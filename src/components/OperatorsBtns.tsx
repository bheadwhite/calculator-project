import React from "react"
import useCalc from "hooks/useCalculatorController"

const OperatorsBtns = () => {
  const calc = useCalc()

  return (
    <div>
      <div onClick={() => calc.setActiveOperator("/")}>/</div>
      <div onClick={() => calc.setActiveOperator("*")}>*</div>
      <div onClick={() => calc.setActiveOperator("-")}>-</div>
      <div onClick={() => calc.setActiveOperator("+")}>+</div>
      <div onClick={() => calc.setActiveOperator("=")}>=</div>
    </div>
  )
}

export default OperatorsBtns
