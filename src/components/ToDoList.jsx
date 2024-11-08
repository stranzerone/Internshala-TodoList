import ToDoItem from './ToDoItem';

function ToDoList({ todos, deleteTodo, toggleCompleted, editTodo }) {
  return (
    <ul className="space-y-2">
      {todos.map(todo => (
        <ToDoItem
          key={todo.id}
          todo={todo}
          deleteTodo={deleteTodo}
          toggleCompleted={toggleCompleted}
          editTodo={editTodo}
        />
      ))}
    </ul>
  );
}

export default ToDoList;
