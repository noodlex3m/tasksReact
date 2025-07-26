import { useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([
    "Вивчити компоненти",
    "Створити To-Do List",
  ]);
  function addTask(taskName) {
    setTasks([...tasks, taskName]);
  }
  return (
    <div className="App">
      <h1>Мій React To-Do List</h1>
      <TaskForm onAddTask={addTask} />
      <TaskList tasks={tasks} />
    </div>
  );
}

export default App;
