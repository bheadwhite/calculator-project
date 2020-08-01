import React, { useMemo, useEffect } from "react"
import CalculatorController from "controllers/CalculatorController"

const calcController = new CalculatorController()
export const CalcContext = React.createContext(calcController)

interface Props {
  children: React.ReactNode[] | React.ReactNode
}

const CalculatorProvider = ({ children }: Props) => {
  const calculatorController = useMemo(() => {
    return new CalculatorController()
  }, [])

  useEffect(() => {
    return () => calculatorController.dispose()
  }, [calculatorController])

  return (
    <CalcContext.Provider value={calculatorController}>
      {children}
    </CalcContext.Provider>
  )
}

export default CalculatorProvider
