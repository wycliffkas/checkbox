import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import List from "./components/List";

type Todo = {
  id: string;
  name: string;
  completed: boolean;
};

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    const getTodos = async () => {
      const response = await fetch("http://localhost:3004/todos");
      const data = await response.json();
      setTodos(data);
    };

    getTodos();
  }, []);

  const addNewTodo = (name: string) => {
    const newTodo: Todo = {
      id: uuidv4(),
      name,
      completed: false,
    };

    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  // Toggle a single todo completion
  const toggleTodo = (id: string) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Delete a single todo
  const deleteTodo = (id: string) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  // Delete all completed todos
  const deleteCompletedTodos = () => {
    setTodos((prevTodos) => prevTodos.filter((todo) => !todo.completed));
  };

  // Function to toggle all todos to checked/unchecked
  const toggleAllTodos = (checked: boolean) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => ({ ...todo, completed: checked }))
    );
  };

  const completedCount = todos.filter((todo) => todo.completed).length;

  return (
    <div className="todo-container">
      <div className="todo-wrap">
        <Header onAddTodo={addNewTodo} />
        <List todos={todos} onToggle={toggleTodo} onDelete={deleteTodo} />
        <Footer
          total={todos.length}
          completedCount={completedCount}
          onDeleteCompleted={deleteCompletedTodos}
          onToggleAll={toggleAllTodos} // Pass the new function
        />
      </div>
    </div>
  );
}

export default App;

