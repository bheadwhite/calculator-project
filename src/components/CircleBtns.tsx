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
    background: "gray",
    padding: "20px",
    width: "15px",
    height: "15px",
  },

  zero: {
    borderRadius: "25px",
    background: "gray",
    padding: "20px",
    width: "70px",
    height: "15px",
  },

  rowFiveContainer: {
    display: "flex",
    margin: "220px 0px 0px -220px",
  },

  operators: {
    borderRadius: "25px",
    background: "orange",
    padding: "20px",
    width: "15px",
    height: "15px",
  },

  reset: {
    textAlign: "center",
    borderRadius: "25px",
    background: "lightgray",
    padding: "20px",
    width: "15px",
    height: "15px",
    alignContent: "center",
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
        <div className={classes.reset} onClick={() => calc.resetAll()}>
          AC
        </div>
        <div className={classes.rowOne} onClick={() => calc.setDisplay("7")}>
          7
        </div>
        <div className={classes.rowOne} onClick={() => calc.setDisplay("4")}>
          4
        </div>
        <div className={classes.rowOne} onClick={() => calc.setDisplay("1")}>
          1
        </div>
      </div>
      <div>
        <div className={classes.reset}>+/-</div>
        <div className={classes.rowTwo} onClick={() => calc.setDisplay("8")}>
          8
        </div>
        <div className={classes.rowTwo} onClick={() => calc.setDisplay("5")}>
          5
        </div>
        <div className={classes.rowTwo} onClick={() => calc.setDisplay("2")}>
          2
        </div>
      </div>
      <div>
        <div className={classes.reset}>%</div>
        <div className={classes.rowThree} onClick={() => calc.setDisplay("9")}>
          9
        </div>
        <div className={classes.rowThree} onClick={() => calc.setDisplay("6")}>
          6
        </div>
        <div className={classes.rowThree} onClick={() => calc.setDisplay("3")}>
          3
        </div>
      </div>
      <div>
        <div className={classes.operators} onClick={() => calc.setOperator("divide")}>
          /
        </div>
        <div className={classes.operators} onClick={() => calc.setOperator("multiply")}>
          x
        </div>
        <div className={classes.operators} onClick={() => calc.setOperator("subtract")}>
          -
        </div>
        <div className={classes.operators} onClick={() => calc.setOperator("add")}>
          +
        </div>
      </div>
      <div className={classes.rowFiveContainer}>
        <div className={classes.zero} onClick={() => calc.setDisplay("0")}>
          0
        </div>
        <div className={classes.rowFive} onClick={() => calc.setDisplay(".")}>
          .
        </div>
        <div className={classes.operators} onClick={() => calc.calculate()}>
          =
        </div>
      </div>
    </div>
  )
}

export default CircleBtns
