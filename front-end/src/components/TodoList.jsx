import React, { useState } from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';

function TodoList() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    const newTodos = [todo, ...todos];

    setTodos(newTodos);
  };

  const completeTodo = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const removeTodo = (id) => {
    const removeId = [...todos].filter((todo) => todo.id !== id);

    setTodos(removeId);
  };

  const editTodo = (id, newTodo) => {
    setTodos((oldTodo) => oldTodo.map((todo) => (todo.id === id ? newTodo : todo)));
  } 

  return (
    <div>
      <TodoForm
        onSubmit={addTodo}
      />
      <Todo
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        editTodo={editTodo}
      />
    </div>
  );
}

export default TodoList;
