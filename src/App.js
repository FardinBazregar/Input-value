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
  return (
    <div>
      <Input
        value={input}
        onChange={(value) => {
          setInput(value);
        }}
      />

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
