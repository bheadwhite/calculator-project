import CalculatorController from "./CalculatorController"
describe("calculator should...", () => {
  test("add and multiply to the running total", () => {
    const calc = new CalculatorController()

    calc.add(2)
    expect(calc.runningTotal.getState()).toBe(2)

    calc.multiply(4)
    expect(calc.runningTotal.getState()).toBe(8)
  })

  test("subtract and divide to the running total", () => {
    const calc = new CalculatorController(20)

    calc.subtract(10)
    expect(calc.runningTotal.getState()).toBe(10)

    calc.divide(5)
    expect(calc.runningTotal.getState()).toBe(2)
  })
})
