import { useState, useEffect, useMemo } from "react"
import useCalculatorController from "./useCalculatorController"
import CalculatorController from "controllers/CalculatorController"

const useDisplay = () => {
  const calcController: CalculatorController = useCalculatorController()
  const [total, setTotal] = useState<string>("")

  const subscription = useMemo(() => {
    return calcController.onDisplayChange((newTotal) => {
      setTotal(newTotal)
    })
  }, [calcController])

  useEffect(() => {
    return () => subscription.unsubscribe()
  }, [subscription])

  return total
}

export default useDisplay
