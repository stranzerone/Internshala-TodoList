import { useState } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';

function ToDoItem({ todo, deleteTodo, toggleCompleted, editTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);

  const handleEdit = () => {
    if (isEditing) {
      editTodo(todo.id, newText);
    }
    setIsEditing(!isEditing);
  };

  return (
    <li className="flex items-center justify-between bg-gray-100 p-3 rounded-lg">
      <div className="flex items-center">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleCompleted(todo.id)}
          className="mr-2"
        />
        {isEditing ? (
          <input
            type="text"
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
            className="p-1 rounded border border-gray-300 focus:outline-none"
          />
        ) : (
          <span className={`flex-grow ${todo.completed ? 'line-through text-gray-500' : ''}`}>
            {todo.text}
          </span>
        )}
      </div>
      <div className="flex items-center space-x-2">
        <button onClick={handleEdit} className="text-blue-500 hover:text-blue-700">
          <FaEdit />
        </button>
        <button onClick={() => deleteTodo(todo.id)} className="text-red-500 hover:text-red-700">
          <FaTrash />
        </button>
      </div>
    </li>
  );
}

export default ToDoItem;
