import StatefulSubject from "./StatefulSubject"

export default class CalculatorController {
  //define some variables that we want to track
  public runningTotal: StatefulSubject<number> = new StatefulSubject(0)
  public currentDisplay: StatefulSubject<string> = new StatefulSubject("")
  private currentOperator:
    | "add"
    | "subtract"
    | "divide"
    | "multiply"
    | undefined = undefined

  constructor(startingValue?: number) {
    startingValue && this.runningTotal.next(startingValue)
  }

  private clearDisplay() {
    this.currentDisplay.next("")
  }

  getTotal() {
    return this.runningTotal.getState()
  }

  getDisplay() {
    return this.currentDisplay.getState()
  }

  appendDisplay(number: number | ".") {
    this.currentDisplay.next(this.currentDisplay.getState() + number.toString())
  }

  //define some methods that will mutate the variables
  add(num: number) {
    this.runningTotal.next(this.runningTotal.getState() + num)
  }

  subtract(num: number) {
    this.runningTotal.next(this.runningTotal.getState() - num)
  }

  divide(num: number) {
    this.runningTotal.next(this.runningTotal.getState() / num)
  }

  multiply(num: number) {
    this.runningTotal.next(this.runningTotal.getState() * num)
  }

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
