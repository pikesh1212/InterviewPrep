import { useState } from "react";

const Todo = ({ todo }) => {
  return (
    <>
      <h1>Todo:</h1>
      <ul>
        {todo && todo.map((item) => 
        <li>{item}</li>
        )}
        </ul>
    </>
  );
};
const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  return (
    <>
      <h1>Todo App</h1>
      <input
        type="text"
        placeholder="Enter Todo"
        onChange={(e) => setInput(e.target.value)}
      />
      <input
        type="button"
        value="Add"
        onClick={() => setTodos([...todos, input])}
      />
      <Todo todo={todos} />
    </>
  );
};
export default TodoApp;
