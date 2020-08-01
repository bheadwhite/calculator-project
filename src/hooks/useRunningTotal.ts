import { useState, useEffect, useMemo } from "react"
import useCalculatorController from "./useCalculatorController"

const useRunningTotal = () => {
  const calcController = useCalculatorController()
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

export default useRunningTotal
