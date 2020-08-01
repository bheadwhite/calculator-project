import StatefulSubject from "./StatefulSubject"

type Operators = null | "add" | "subtract" | "divide" | "multiply"

export default class CalculatorController {
  //define some variables that we want to track
  private firstEvaluation: boolean = false
  public runningTotal: StatefulSubject<number> = new StatefulSubject(0)
  public currentDisplay: StatefulSubject<string> = new StatefulSubject("")
  public activeOperator = new StatefulSubject(null) as StatefulSubject<
    Operators
  >

  constructor(startingValue?: number) {
    startingValue && this.runningTotal.next(startingValue)
  }

  private add(num1: number, total: number) {
    // this.runningTotal.next(this.runningTotal.getState() + num)
  }

  private subtract(num1: number, total: number) {
    // this.runningTotal.next(this.runningTotal.getState() - num)
  }

  private divide(num1: number, total: number) {
    // this.runningTotal.next(this.runningTotal.getState() / num)
  }

  private multiply(num1: number, total: number) {
    // this.runningTotal.next(this.runningTotal.getState() * num)
  }

  private evaluate() {
    const num1 = Number(this.currentDisplay.getState())
    const operator = this.activeOperator.getState()
    const total = this.runningTotal.getState()

    if (operator === "add") {
      this.add(num1, total)
    } else if (operator === "subtract") {
      this.subtract(num1, total)
    } else if (operator === "divide") {
      this.divide(num1, total)
    } else if (operator === "multiply") {
      this.multiply(num1, total)
    }

    this.clearDisplay()
  }

  private clearDisplay() {
    this.currentDisplay.next("")
  }

  //public methods
  getTotal() {
    return this.runningTotal.getState()
  }
  getDisplay() {
    return this.currentDisplay.getState()
  }
  appendDisplay(number: number | ".") {
    this.currentDisplay.next(this.currentDisplay.getState() + number.toString())
  }
  setActiveOperator(operator: Operators) {
    this.activeOperator.next(operator)
    if (this.firstEvaluation) {
    }
  }

  //callbacks
  onDisplayChange(callback: (display: string) => void) {
    return this.currentDisplay.subscribe({
      next: callback,
    })
  }

  onTotalChange(callback: (num: number) => void) {
    return this.runningTotal.subscribe({
      next: callback,
    })
  }

  dispose() {
    this.runningTotal.complete()
  }
}
