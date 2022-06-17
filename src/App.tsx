import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Button } from "./components/Button";
import s from "./App.module.css";

function App() {
  let [count, setCount] = useState<number>(0);

  const onClickInc = () => {
    if (count < 5) {
      setCount(count + 1);
    }
  };

  const onClickReset = () => {
    setCount(0);
  };

  return (
    <div className={s.container}>
      <div>
        <span className={count === 5 ? s.redCount : s.count}>{count}</span>
      </div>
      <div>
        <Button name="inc" onClick={onClickInc} isDisabled={count === 5} />
        <Button name="reset" onClick={onClickReset} isDisabled={count === 0} />
      </div>
    </div>
  );
}

export default App;
