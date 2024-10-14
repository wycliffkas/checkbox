import React, { useState } from "react";
import "./style.css";

type HeaderProps = {
  onAddTodo: (name: string) => void;
};

const Header: React.FC<HeaderProps> = ({ onAddTodo }) => {
  const [taskName, setTaskName] = useState("");


  const handleAddTodo = () => {
    if (taskName.trim()) {
      onAddTodo(taskName);
      setTaskName("");
    }
  };


  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleAddTodo();
    }
  };

  return (
    <div className="todo-header">
      <input
        type="text"
        placeholder="Enter task name"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
};

export default Header;
