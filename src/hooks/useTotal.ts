import { useState, useEffect, useMemo } from "react"
import useCalculatorController from "./useCalculatorController"
import CalculatorController from "controllers/CalculatorController"

const useTotal = () => {
  const calcController: CalculatorController = useCalculatorController()
  const [total, setTotal] = useState<number>(calcController.getTotal())

  const subscription = useMemo(() => {
    return calcController.onTotalChange((newTotal) => {
      setTotal(newTotal)
    })
  }, [calcController])

  useEffect(() => {
    return () => subscription.unsubscribe()
  }, [subscription])

  return total
}

export default useTotal
