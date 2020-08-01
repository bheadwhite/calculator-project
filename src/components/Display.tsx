import React from "react"
import useRunningTotal from "hooks/useRunningTotal"
import CircleBtns from "components/CircleBtns"

const Display = () => {
  const total = useRunningTotal()

  return <div>{total}</div>
}

export default Display
