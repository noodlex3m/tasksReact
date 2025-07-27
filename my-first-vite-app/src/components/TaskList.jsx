function TaskList(props) {
  return (
    <ul>
      {props.tasks.map((task, index) => (
        <li key={index}>
          {task}
          <button onClick={() => props.onDeleteTask(task)}>Видалити</button>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
