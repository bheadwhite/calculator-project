import React from "react"
import useCalc from "hooks/useCalculatorController"

const Button = () => {
  const calc = useCalc()

  return <div onClick={() => calc.add(2)}>click me</div>
}

export default Button
