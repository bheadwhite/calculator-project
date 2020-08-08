import React from "react"
import useCalc from "hooks/useCalculatorController"

const OperatorsBtns = () => {
  const calc = useCalc()

  return (
    <div>
      <div onClick={() => calc.setActiveOperator("divide")}>/</div>
      <div onClick={() => calc.setActiveOperator("multiply")}>*</div>
      <div onClick={() => calc.setActiveOperator("subtract")}>-</div>
      <div onClick={() => calc.setActiveOperator("add")}>+</div>
      {/* <div onClick={() => calc.setActiveOperator("=")}>=</div> */}
    </div>
  )
}

export default OperatorsBtns
