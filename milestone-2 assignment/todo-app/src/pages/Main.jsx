import React, { useState } from "react";
import Navbar from "../components/Navbar";

function Main() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  // Function to handle adding a new todo
  const handleAddTodo = () => {
    if (newTodo.trim() === "") return;
    const newTodoItem = {
      title: newTodo,
      status: "pending",
    };
    setTodos([...todos, newTodoItem]);
    setNewTodo("");
  };

  // Function to handle updating todo status
  const handleUpdateStatus = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].status =
      updatedTodos[index].status === "pending" ? "completed" : "pending";
    setTodos(updatedTodos);
  };

  // Function to handle removing a todo
  const handleRemoveTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <>
      <Navbar />
      <header className="flex">
        <div className="search-bar flex">
          <input
            type="text"
            placeholder="Learn Useref"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
          />
          <button onClick={handleAddTodo}>Add</button>
        </div>
      </header>
      <section>
        {todos.length > 0 ? (
          <ul className="todos-container">
            {todos.map((todo, index) => (
              <li key={index} className="todo">
                <p>
                  {index + 1}. {todo.title}
                </p>
                <span>Status: {todo.status}</span>
                <button onClick={() => handleUpdateStatus(index)}>
                  Update Status
                </button>
                <button onClick={() => handleRemoveTodo(index)}>Remove</button>
              </li>
            ))}
          </ul>
        ) : (
          <p className="not-found">No todos found.</p>
        )}
      </section>
    </>
  );
}

export default Main;
