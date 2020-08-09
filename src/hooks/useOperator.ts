import { useState, useEffect, useMemo } from "react"
import useCalculatorController from "./useCalculatorController"
import CalculatorController from "controllers/CalculatorController"
import { Operators } from "controllers/CalculatorController"

//this hook willl always return the active operator
const useOperator = () => {
  const calcController: CalculatorController = useCalculatorController()
  const [operator, setOperator] = useState<Operators>(
    calcController.getOperator()
  )

  const subscription = useMemo(() => {
    return calcController.onOperatorChange((changedOperator) => {
      setOperator(changedOperator)
    })
  }, [calcController])

  useEffect(() => {
    return () => subscription.unsubscribe()
  }, [subscription])

  return operator
}

export default useOperator
