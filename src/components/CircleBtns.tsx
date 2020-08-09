import React from "react"
import useCalc from "hooks/useCalculatorController"
import { makeStyles } from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
  rowOne: {
    borderRadius: "25px",
    background: "gray",
    padding: "20px",
    width: "15px",
    height: "15px",
  },

  rowTwo: {
    borderRadius: "25px",
    background: "gray",
    padding: "20px",
    width: "15px",
    height: "15px",
  },

  rowThree: {
    borderRadius: "25px",
    background: "gray",
    padding: "20px",
    width: "15px",
    height: "15px",
  },

  rowFour: {
    borderRadius: "25px",
    background: "orange",
    padding: "20px",
    width: "15px",
    height: "15px",
  },

  rowFive: {
    borderRadius: "25px",
    background: "orange",
    padding: "20px",
    width: "15px",
    height: "15px",
    "& zero": {
      width: "35px",
    },
  },

  rowFiveContainer: {
    display: "flex",
    margin: "165px 0px 0px -165px",
  },

  operators: {
    borderRadius: "25px",
    background: "orange",
    padding: "20px",
    width: "15px",
    height: "15px",
  },

  daddyBox: {
    display: "flex",
    margin: "auto",
  },
}))

const CircleBtns = () => {
  const calc = useCalc()
  const classes = useStyles()

  return (
    <div className={classes.daddyBox}>
      <div>
        <div className={classes.rowOne} onClick={() => calc.appendDisplay(7)}>
          7
        </div>
        <div className={classes.rowOne} onClick={() => calc.appendDisplay(4)}>
          4
        </div>
        <div className={classes.rowOne} onClick={() => calc.appendDisplay(1)}>
          1
        </div>
      </div>
      <div>
        <div className={classes.rowTwo} onClick={() => calc.appendDisplay(8)}>
          8
        </div>
        <div className={classes.rowTwo} onClick={() => calc.appendDisplay(5)}>
          5
        </div>
        <div className={classes.rowTwo} onClick={() => calc.appendDisplay(2)}>
          2
        </div>
      </div>
      <div>
        <div className={classes.rowThree} onClick={() => calc.appendDisplay(9)}>
          9
        </div>
        <div className={classes.rowThree} onClick={() => calc.appendDisplay(6)}>
          6
        </div>
        <div className={classes.rowThree} onClick={() => calc.appendDisplay(3)}>
          3
        </div>
      </div>
      <div>
        <div className={classes.operators} onClick={() => calc.setActiveOperator("multiply")}>
          x
        </div>
        <div className={classes.operators} onClick={() => calc.setActiveOperator("subtract")}>
          -
        </div>
        <div className={classes.operators} onClick={() => calc.setActiveOperator("add")}>
          +
        </div>
      </div>
      <div className={classes.rowFiveContainer}>
        <div className={classes.rowFive} onClick={() => calc.appendDisplay(0)}>
          0
        </div>
        <div className={classes.rowFive} onClick={() => calc.appendDisplay(".")}>
          .
        </div>
        <div className={classes.rowFive}>=</div>
      </div>
      <div>
        {/* <div className={classes.rowFour} onClick={() => calc.appendDisplay(7)}>AC</div>
      <div className={classes.rowFour} onClick={() => calc.appendDisplay(8)}>Weird symbol</div>
      <div className={classes.rowFour} onClick={() => calc.appendDisplay(9)}>%</div> */}
        {/* <div className={classes.rowFour} onClick={() => calc.setActiveOperator("divide")}>
          /
        </div> */}
      </div>
    </div>
  )
}

export default CircleBtns
