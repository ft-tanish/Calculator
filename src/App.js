import "./styles.css";
import { useEffect, useState } from "react";

export default function App() {
  const [numOne, setNumOne] = useState(0);
  const [numTwo, setNumTwo] = useState(0);
  const [operator, setOperator] = useState("add");
  const [result, setResult] = useState(0);

  const handleNumOne = (e) => {
    setNumOne(parseInt(e.target.value));
  };

  const handleNumTwo = (e) => {
    setNumTwo(parseInt(e.target.value));
  };

  const operationHandler = (e) => {
    setOperator(e.target.value);
  };

  const handleCalculate = () => {
    if (operator == "add") {
      setResult(numOne + numTwo);
    }
    if (operator == "sub") {
      setResult(numOne - numTwo);
    }
    if (operator == "multiply") {
      setResult(numOne * numTwo);
    }
    if (operator == "divide") {
      setResult(numOne / numTwo);
    }
  };

  useEffect(() => handleCalculate(), [numOne, numTwo, operator]);

  return (
    <div className="App">
      <div>
        Number1
        <input type="number" value={numOne} onChange={handleNumOne} />
      </div>
      <div>
        Number2
        <input type="number" value={numTwo} onChange={handleNumTwo} />
      </div>
      <div>
        Operation
        <select type="dropdown" value={operator} onChange={operationHandler}>
          <option value="add">+</option>
          <option value="sub">-</option>
          <option value="multiply">*</option>
          <option value="divide">/</option>
        </select>
      </div>
      <div>
        Result
        <input value={result} readOnly />
      </div>
    </div>
  );
}
