import React from "react";

const TodosList = ({ todos, setTodos }) => {
  const onTodolistChange = (event) => {
    event.preventDefault();
  };
  return (
    <div>
      {todos.map((todo) => (
        <li className="list-item" key={todo.id}>
          <input
            type="text"
            value={todo.title}
            className="list"
            onChange={onTodolistChange}
          />
        </li>
      ))}
    </div>
  );
};

export default TodosList;
