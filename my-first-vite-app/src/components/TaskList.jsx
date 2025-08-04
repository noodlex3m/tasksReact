function TaskList(props) {
	return props.tasks.length === 0 ? (
		<p>У вас немає завдань. Час відпочити!</p>
	) : (
		<ul>
			{props.tasks.map((task) => (
				<li key={task.id}>
					<span>{task.text}</span>
					<button onClick={() => props.onDeleteTask(task.id)}>Видалити</button>
				</li>
			))}
		</ul>
	);
}

export default TaskList;
