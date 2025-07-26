import { useState } from "react";

function TaskForm(props) {
  const [input, setInput] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (input.trim() === "") return;

    // Викликаємо функцію, передану через props
    props.onAddTask(input);

    setInput(""); // Очищуємо поле
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Нове завдання"
      />
      <button type="submit">Додати</button>
    </form>
  );
}

export default TaskForm;
