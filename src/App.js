import "./App.css";
import { useState } from "react";

function App() {

  const [todolist, settodolist] = useState([]);
  const [newtask, setnewTask] = useState("");

  const addtask = () => {
    const taskname = {
      id: todolist.length === 0 ? 1 : todolist[todolist.length - 1].id + 1,
      name: newtask

    }
    settodolist([...todolist, taskname]);
  };

  const handleOnChange = (event) => {
    setnewTask(event.target.value);
  };

  const deletetask = (id) => {
    settodolist(todolist.filter((task) => task.id !== id));
  };


  return (
    <div className="App">

      <div className="addtask bg-red-600">
        <input onChange={handleOnChange} />
        <button onClick={addtask}>Add Task</button>
      </div>
      <div className="list"></div>
      {todolist.map((task) => {
        return <div className="flex space-x-2">
          <h1>{task.name}</h1>
          <button onClick={() => deletetask(task.id)}>X</button>
        </div>
      }
      )}
    </div>

  );
}
export default App;
