import { useState, useEffect } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
      return JSON.parse(savedTasks);
    } else {
      return [];
    }
  });
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  });
  function addTask(taskName) {
    setTasks([...tasks, taskName]);
  }
  function deleteTask(taskToDelete) {
    const newTask = tasks.filter((task) => task !== taskToDelete);
    setTasks(newTask);
  }
  return (
    <div className="App">
      <h1>Мій React To-Do List</h1>
      <TaskForm onAddTask={addTask} />
      <TaskList tasks={tasks} onDeleteTask={deleteTask} />
    </div>
  );
}

export default App;
