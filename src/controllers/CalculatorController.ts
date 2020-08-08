import StatefulSubject from "./StatefulSubject"

type Operators = null | "add" | "subtract" | "divide" | "multiply"
type OperandType = number | null

export default class CalculatorController {
  private operand1 = new StatefulSubject<OperandType>(null)
  private operand2 = new StatefulSubject<OperandType>(null)
  private operator = new StatefulSubject<Operators>(null)
  private total: StatefulSubject<number>
  private display: StatefulSubject<string>

  constructor() {
    this.total = new StatefulSubject<number>(0)
    this.display = new StatefulSubject<string>("0")
  }

  private resetOperandsAndOperator() {
    this.operand1.next(null)
    this.operand2.next(null)
    this.operator.next(null)
  }

  private setOperand(str) {
    if (this.operand1.getState() == null) {
      this.operand1.next(Number(str))
    } else {
      this.operand2.next(Number(str))
    }
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

  private calculate() {
    const op1 = this.operand1.getState()
    const op2 = this.operand2.getState()
    const operator = this.operator.getState()
    if (op2 == null || op1 == null || operator == null) {
      return
    }
    const evaluate: (op1: number, op2: number) => number = this[operator]
    const evaluation = evaluate(op1, op2)

    this.total.next(evaluation)
    this.display.next(evaluation.toString())
    this.resetOperandsAndOperator()
  }

  appendDisplay(str: string) {
    this.display.next(this.display.getState() + str)
  }

  //public methods
  getDisplay() {
    return this.display.getState()
  }

  setActiveOperator(operator: Operators) {
    this.operator.next(operator)
  }

  //callbacks
  onDisplayChange(callback: (display: string) => void) {
    return this.display.subscribe({
      next: callback,
    })
  }

  onTotalChange(callback: (num: number) => void) {
    return this.total.subscribe({
      next: callback,
    })
  }

  dispose() {
    this.total.complete()
    this.operand1.complete()
    this.operand2.complete()
    this.operator.complete()
    this.display.complete()
  }
}
