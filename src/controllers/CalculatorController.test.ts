import CalculatorController from "./CalculatorController"

describe("calculator should...", () => {
  test("add and multiply to the running total", () => {
    const calc = new CalculatorController()

    calc.setDisplay("2")
    expect(calc.getDisplay()).toBe("2")
    calc.setOperator("add")
    calc.setDisplay("2")
    expect(calc.getDisplay()).toBe("2")
    calc.calculate()
    expect(calc.getTotal()).toBe(4)
  })

  test("subtract and divide to the running total", () => {
    const calc = new CalculatorController()

    calc.setDisplay("10")
    expect(calc.getDisplay()).toBe("10")
    calc.setOperator("subtract")
    calc.setDisplay("2")
    expect(calc.getDisplay()).toBe("2")
    calc.setOperator("divide")
    expect(calc.getDisplay()).toBe("8")
    calc.setDisplay("4")
    calc.calculate()
    expect(calc.getDisplay()).toBe("2")
  })

  test("multiple operators pressed after each other", () => {
    const calc = new CalculatorController()
    calc.setDisplay("10")
    calc.setOperator("add")
    calc.setOperator("subtract")
    expect(calc.getDisplay()).toBe("10")
  })
})
