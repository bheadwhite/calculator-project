import { useContext } from "react"
import { CalcContext } from "context/CalculatorProvider"

const useCalculatorController = () => {
  return useContext(CalcContext)
}

export default useCalculatorController
