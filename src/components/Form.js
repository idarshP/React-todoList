import React from "react";
import { v4 as uuidv4 } from "uuid";

const Form = ({ input, setInput, todos, setTodos }) => {
  const onInputChangeHandler = (event) => {
    setInput(event.target.value);
  };
  const onFormSubmit = (event) => {
    event.preventDefault();
    setTodos(...todos, { id: uuidv4(), title: input, completed: false });
    setInput("");
  };
  return (
    <form onSubmit={onFormSubmit}>
      <input
        type="text"
        placeholder="Add task...."
        className="task-input"
        value={input}
        required
        onChange={onInputChangeHandler}
      />
      <button type="submit" className="add-button">
        Add
      </button>
    </form>
  );
};

export default Form;
