import React from 'react';
import Item from '../Item';

type ListProps = {
  todos: Array<{ id: string; name: string; completed: boolean }>;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
};

const List: React.FC<ListProps> = ({ todos, onToggle, onDelete }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <Item
          key={todo.id}
          title={todo.name}
          completed={todo.completed}
          onToggle={() => onToggle(todo.id)}
          onDelete={() => onDelete(todo.id)}
        />
      ))}
    </ul>
  );
};

export default List;
