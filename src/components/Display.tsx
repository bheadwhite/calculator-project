import React from "react"
import useDisplay from "hooks/useDisplay"

const Display = () => {
  const display = useDisplay()

  return <div>current display: {display}</div>
}

export default Display
