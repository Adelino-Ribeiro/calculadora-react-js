import CalcButton from "./CalcButton";
import { useState } from "react";
import '../style.css';


function Calculator() {
  const [calc, setCalc] = useState({
    current: "0",
    total: "0",
    isInitial: true,
    preOperator: "",
  });

  function handleNumber(value) {
    let newValue = value;

    if (!calc.isInitial) newValue = calc.current + value;

    setCalc({
      current: newValue,
      total: calc.total,
      isInitial: false,
      preOperator: calc.preOperator,
    });
  }

  function handleOperator(value) {
    const total = doCalculation();

    setCalc({
      current: total.toString(),
      total: total.toString(),
      isInitial: true,
      preOperator: value,
    });
  }

  function doCalculation() {
    let total = parseInt(calc.total);

    debugger;

    console.log(calc);

    switch (calc.preOperator) {
      case "+":
        total += parseInt(calc.current);
        break;
      case "-":
        total -= parseInt(calc.current);
        break;
      case "X":
        total *= parseInt(calc.current);
        break;
      case "/":
        total /= parseInt(calc.current);
        break;
      default:
        total = parseInt(calc.current);
    }
    return total;
  }

  function renderDisplay() {
    return calc.current;
  }

  function handleClear() {
    setCalc({
      current: "0",
      total: "0",
      isInitial: true,
      preOperator: "",
    });
  }

  function handleEquals() {
    const total = doCalculation();

    setCalc({
      current: total.toString(),
      total: total.toString(),
      isInitial: true,
      preOperator: "=",
    });
  }

  return (
    <div className="calculator">
      <div className="display">{renderDisplay()}</div>

      <CalcButton value="7" onClick={handleNumber} />
      <CalcButton value="8" onClick={handleNumber} />
      <CalcButton value="9" onClick={handleNumber} />
      <CalcButton className="operator" value="/" onClick={handleOperator} />

      <CalcButton value="4" onClick={handleNumber} />
      <CalcButton value="5" onClick={handleNumber} />
      <CalcButton value="6" onClick={handleNumber} />
      <CalcButton className="operator" value="X" onClick={handleOperator} />

      <CalcButton value="1" onClick={handleNumber} />
      <CalcButton value="2" onClick={handleNumber} />
      <CalcButton value="3" onClick={handleNumber} />
      <CalcButton className="operator" value="-" onClick={handleOperator} />

      <CalcButton value="C" onClick={handleClear} />
      <CalcButton value="0" onClick={handleNumber} />
      <CalcButton value="=" onClick={handleEquals} />
      <CalcButton className="operator" value="+" onClick={handleOperator} />
    </div>
  );
}

export default Calculator;
