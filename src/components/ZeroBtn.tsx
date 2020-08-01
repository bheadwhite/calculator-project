import React from "react"
import useCalc from "hooks/useCalculatorController"

const ZeroBtn = () => {
  const calc = useCalc()

  return (
    <div>
      <div onClick={() => calc.appendDisplay(0)}>0</div>
    </div>
  )
}

export default ZeroBtn
