import "./App.css";
import {useState} from "react"; 

function App() {

  const [count, setCount] = useState(0);

  const Increase = () => {
    setCount(count + 1);
  }
  const Decrease = () => {
    setCount(count - 1);
  }
  const Reset = () => {
    setCount(0);
  }

  return (
    <div className="App">
      <button onClick={Increase}>Increase</button>
      <button onClick={Decrease}>Decrease</button>
      <button onClick={Reset}>Set to zero</button>
      {count}
    </div>
  );
}
export default App;
