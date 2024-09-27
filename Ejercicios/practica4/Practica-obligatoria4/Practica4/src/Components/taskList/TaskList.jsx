import React from "react";

function TaskList({ tasks, toggleTask, deleteTask }) {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <span
            onClick={() => toggleTask(task.id)}
            style={{
              textDecoration: task.completed ? "line-through" : "none",
              color: task.completed ? "lightgray" : "black",
              cursor: "pointer",
            }}
          >
            {task.name}
          </span>
          <button onClick={() => deleteTask(task.id)}>Borrar</button>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;