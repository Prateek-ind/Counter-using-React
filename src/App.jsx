import { useState } from "react";
import Button from "./Button";

const App = () => {
  const [count, setCount] = useState(0);
  const [inputNum, setInputNum] = useState(1);
  function decrease() {
    setCount((prevCount) => prevCount - inputNum);
  }
  function increase() {
    setCount((prevCount) => prevCount + inputNum);
  }
  function reset() {
    setCount(0);
  }

  function handleInput(e) {
    const val = e.target.value;

    if (val === "") {
      setInputNum(""); // Let it be empty
    } else {
      const cleaned = val.replace(/^0+(?!$)/, "");
      setInputNum(Number(cleaned));
    }
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="text-6xl font-bold mb-4">{count}</h1>
      <div>
        <Button clickHandler={decrease} value="-" />
        <Button clickHandler={increase} value="+" />
      </div>
      <div className="mt-4 mb-4 flex flex-row gap-2">
        <p>Increment/Decrement by</p>
        <input
          className="bg-white border-1 cursor-pointer rounded px-2 w-32 "
          type="text"
          inputMode="numeric"
          pattern="[0-9]*"
          value={inputNum}
          onChange={handleInput}
        />
      </div>
      <Button clickHandler={reset} value="reset" />
    </main>
  );
};

export default App;
