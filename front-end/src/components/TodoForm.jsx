import React, { useState } from 'react';

function TodoForm(props) {
  const [input, setInput] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });

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
