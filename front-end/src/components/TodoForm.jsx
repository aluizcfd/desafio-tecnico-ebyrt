import React, { useState } from 'react';

function TodoForm() {
  const [input, setInput] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    setInput('');
  };

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a todo"
        value={input}
        onChange={handleChange}
        name="text"
        className="todo-input"
      />
      <button type="submit" className="todo-button">Add!</button>
    </form>
  );
}

export default TodoForm;
