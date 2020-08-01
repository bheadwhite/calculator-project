import StatefulSubject from "./StatefulSubject"

export default class CalculatorController {
  //define some variables that we want to track
  public runningTotal: StatefulSubject<number> = new StatefulSubject(0)

  constructor(startingValue?: number) {
    startingValue && this.runningTotal.next(startingValue)
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

  onTotalChange(callback: (num: number) => void) {
    return this.runningTotal.subscribe({
      next: callback,
    })
  }

  dispose() {
    this.runningTotal.complete()
  }
}
