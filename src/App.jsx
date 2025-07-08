import { useReducer } from "react";
import Button from "./Button";

const initialState = { count: 0, inputNum: 1 };

function counterReducer(state, action) {
  const updatedState = { ...state };
  if (action.type === "DECREMENT") {
    updatedState.count -= action.payload;
    return updatedState;
  }
  if (action.type === "INCREMENT") {
    updatedState.count += action.payload;
    return updatedState;
  }
  if (action.type === "RESET") {
    updatedState.count = 0;
    return updatedState;
  }
  if (action.type === "INPUT_NUM") {
    updatedState.inputNum = action.payload;
    return updatedState;
  }
  return state;
}

const App = () => {
  const [countState, countStateDispatch] = useReducer(
    counterReducer,
    initialState
  );

  function handleDecrement() {
    countStateDispatch({
      type: "DECREMENT",
      payload: countState.inputNum,
    });
  }
  function handleIncrement() {
    countStateDispatch({
      type: "INCREMENT",
      payload: countState.inputNum,
    });
  }
  function handleReset() {
    countStateDispatch({
      type: "RESET",
    });
  }

  function handleInput(e) {
    const val = e.target.value;

    if (val === "") {
      countStateDispatch({
        type: "INPUT_NUM",
        payload: "",
      }); // Let it be empty
    } else {
      const cleaned = val.replace(/^0+(?!$)/, "");
      countStateDispatch({
        type: "INPUT_NUM",
        payload: Number(cleaned),
      });
    }
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="text-6xl font-bold mb-4">{countState.count}</h1>
      <div>
        <Button clickHandler={handleDecrement} value="-" />
        <Button value="+" clickHandler={handleIncrement} />
      </div>
      <div className="mt-4 mb-4 flex flex-row gap-2">
        <p>Increment/Decrement by</p>
        <input
          className="bg-white border-1 cursor-pointer rounded px-2 w-32 "
          type="text"
          inputMode="numeric"
          pattern="[0-9]*"
          value={countState.inputNum}
          onChange={handleInput}
        />
      </div>
      <Button value="reset" clickHandler={handleReset} />
    </main>
  );
};

export default App;
