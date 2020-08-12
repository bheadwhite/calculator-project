import React from "react"
import useDisplay from "hooks/useDisplay"
import { makeStyles } from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
  display: {
    margin: "0px 1000px 0px 0px",
  },
}))

const Display = () => {
  const display = useDisplay()
  const classes = useStyles()

  return <h2 className={classes.display}>Current Total: {display}</h2>
}

export default Display
