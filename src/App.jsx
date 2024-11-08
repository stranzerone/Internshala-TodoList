import { useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import Header from './components/Headers';
import ToDoList from './components/ToDoList';
function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const addTodo = () => {
    if (newTodo.trim()) {
      setTodos([...todos, { id: Date.now(), text: newTodo, completed: false }]);
      setNewTodo('');
    }
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const toggleCompleted = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const editTodo = (id, newText) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, text: newText } : todo
    ));
  };

  return (
    <div className="App bg-gradient-to-b from-blue-500 to-indigo-600 min-h-screen text-white flex items-center justify-center">
      <div className="w-full max-w-md p-6 bg-white rounded-xl shadow-lg text-gray-900">
        <Header />
        <div className="flex gap-2 my-4">
          <input
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            placeholder="Add a new task"
            className="flex-grow p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button onClick={addTodo} className="p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
            <FaPlus />
          </button>
        </div>
        <ToDoList
          todos={todos}
          deleteTodo={deleteTodo}
          toggleCompleted={toggleCompleted}
          editTodo={editTodo}
        />
      </div>
    </div>
  );
}

export default App;
