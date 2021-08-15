import React from 'react';

const TodoListItem = ({ todo, onToggle, onDelete }) => {
  const { id, text, checked } = todo;

  return (
    <div>
      ({id})
      <input type="checkbox" checked={checked} onChange={() => onToggle(id)} />
      <span>{text}</span>
      <button onClick={() => onDelete(id)}>삭제</button>
    </div>
  );
};

export default TodoListItem;
