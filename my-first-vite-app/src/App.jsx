import { useState, useEffect } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import "./App.css";

function App() {
	const [tasks, setTasks] = useState(() => {
		const savedTasks = localStorage.getItem("tasks");
		return savedTasks ? JSON.parse(savedTasks) : [];
	});
	useEffect(() => {
		localStorage.setItem("tasks", JSON.stringify(tasks));
	});
	function addTask(taskName) {
		const newTask = {
			id: Date.now(),
			text: taskName,
		};
		setTasks([...tasks, newTask]);
	}
	function deleteTask(taskToDelete) {
		const newTask = tasks.filter((task) => task.id !== taskToDelete);
		setTasks(newTask);
	}
	return (
		<div className="App">
			<h1>Мій React To-Do List</h1>
			<p>Залишилось завдань: {tasks.length}</p>
			<TaskForm onAddTask={addTask} />
			<TaskList tasks={tasks} onDeleteTask={deleteTask} />
		</div>
	);
}

export default App;
