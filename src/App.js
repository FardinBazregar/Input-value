import { useState } from "react";

const Input = ({ value, onChange }) => {
  return (
    <div>
      <input
        value={value}
        onChange={(event) => {
          onChange(event.target.value);
        }}
      />
    </div>
  );
};
function App() {
  const [input, setInput] = useState("");
  const [btn, setBtn] = useState(false);
  const btnHandler = () => {
    setBtn(!btn);
  };
  return (
    <div>
      <Input
        value={input}
        onChange={(value) => {
          setInput(value);
        }}
      />
      <button onClick={btnHandler}>Show</button>
      {btn ? <h1>{input}</h1> : null}
      <Input
        value={input}
        onChange={(value) => {
          setInput(value);
        }}
      />
    </div>
  );
}

export default App;
