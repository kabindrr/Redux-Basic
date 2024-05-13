import { useState } from "react";
import "./App.css";

import { Display } from "./Components/Display";
import { ButtonContainer } from "./Components/ButtonContainer/ButtonContainer";

function App() {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
  };
  const decrease = () => {
    setCount(count - 1);
  };

  return (
    <>
      <Display count={count} />
      <ButtonContainer increase={increase} decrease={decrease} />
    </>
  );
}

export default App;
