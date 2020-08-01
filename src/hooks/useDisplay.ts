import { useState, useEffect, useMemo } from "react"
import useCalculatorController from "./useCalculatorController"
import CalculatorController from "controllers/CalculatorController"

const useDisplay = () => {
  const calcController: CalculatorController = useCalculatorController()
  const [display, setDisplay] = useState<string>(calcController.getDisplay())

  const subscription = useMemo(() => {
    return calcController.onDisplayChange((display) => {
      setDisplay(display)
    })
  }, [calcController])

  useEffect(() => {
    return () => subscription.unsubscribe()
  }, [subscription])

  return display
}

export default useDisplay
