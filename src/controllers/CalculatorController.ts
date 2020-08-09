import StatefulSubject from "./StatefulSubject"

export type Operators = null | "add" | "subtract" | "divide" | "multiply"
type OperandType = number | null

export default class CalculatorController {
  private operand1 = new StatefulSubject<OperandType>(null)
  private operand2 = new StatefulSubject<OperandType>(null)
  private operator = new StatefulSubject<Operators>(null)
  private total: StatefulSubject<number>
  private display: StatefulSubject<string>
  private clearDisplay: boolean = false

  constructor() {
    this.total = new StatefulSubject<number>(0)
    this.display = new StatefulSubject<string>("")
  }

  private combineOperands() {
    this.operand1.next(this.total.getState())
    this.operand2.next(null)
    this.operator.next(null)
  }

  private setOperand1(str) {
    this.operand1.next(Number(str))
  }

  private setOperand2(str) {
    this.operand2.next(Number(str))
  }

  private add(op1: number, op2: number) {
    return op1 + op2
  }

  private subtract(op1: number, op2: number) {
    return op1 - op2
  }

  private divide(op1: number, op2: number) {
    return op1 / op2
  }

  private multiply(op1: number, op2: number) {
    return op1 * op2
  }

  //public methods

  // clicking '='
  public calculate() {
    const op1 = this.operand1.getState()
    const op2 = this.operand2.getState() || Number(this.display.getState())
    const operator = this.operator.getState()
    if (op1 == null || operator == null) {
      return
    }
    const evaluate: (op1: number, op2: number) => number = this[operator]
    const evaluation = evaluate(op1, op2)

    this.total.next(evaluation)
    this.display.next(evaluation.toString())
    this.clearDisplay = true
    this.combineOperands()
  }

  // clicking a number or .
  public setDisplay(str: string | ".") {
    if (this.clearDisplay) {
      this.display.next("")
      this.clearDisplay = false
    }
    this.display.next(this.display.getState() + str)
  }

  // clicking the "c" button
  public resetDisplay() {
    this.display.next("")
  }

  // clicking the "ac" button
  public resetAll() {
    this.operand1.next(null)
    this.operand2.next(null)
    this.operator.next(null)
    this.total.next(0)
    this.display.next("")
    this.clearDisplay = false
  }

  public getDisplay() {
    return this.display.getState()
  }
  public getTotal() {
    return this.total.getState()
  }
  public getOperator() {
    return this.operator.getState()
  }

  // clicking an operator
  public setOperator(operator: Operators) {
    const value = this.display.getState()
    if (this.operand1.getState() == null) {
      this.setOperand1(value)
      this.clearDisplay = true
    } else {
      this.setOperand2(value)
      this.calculate()
    }

    this.operator.next(operator)
  }

  // for hooks
  public onDisplayChange(callback: (display: string) => void) {
    return this.display.subscribe({
      next: callback,
    })
  }

  public onOperatorChange(callback: (operator: Operators) => void) {
    return this.operator.subscribe({
      next: callback,
    })
  }

  // for context
  public dispose() {
    this.total.complete()
    this.operand1.complete()
    this.operand2.complete()
    this.operator.complete()
    this.display.complete()
  }
}
