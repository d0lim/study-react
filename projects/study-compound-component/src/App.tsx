import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Toggle from "./components/Toggle";
import ToggleButton from "./components/Toggle/ToggleButton";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Toggle onToggle={(on) => console.log(on)}>
        <Toggle.On>
          <>The button is on</>
        </Toggle.On>
        <Toggle.Off>
          <>The button is off</>
        </Toggle.Off>
        <ToggleButton />
      </Toggle>
    </div>
  );
}

export default App;
