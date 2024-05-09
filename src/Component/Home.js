import React, { useState } from 'react';

const TodoLists = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React', editable: false },
    { id: 2, text: 'Build a project', editable: false },
    { id: 3, text: 'Deploy to production', editable: false }
  ]);

  const handleEdit = (id) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, editable: true } : todo
      )
    );
  };

  const handleSave = (id, newText) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, text: newText, editable: false } : todo
      )
    );
  };

  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            {todo.editable ? (
              <input
                type="text"
                value={todo.text}
                onChange={(e) => handleSave(todo.id, e.target.value)}
                onBlur={() => handleSave(todo.id, todo.text)}
                autoFocus
              />
            ) : (
              <div>
                <p style={{color:"white"}}>{todo.text}</p>
                <button onClick={() => handleEdit(todo.id)}>Edit</button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoLists;
