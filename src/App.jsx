import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'

let id = 0;
const initialTodos = [
  { id: id++, title: "Belajar React", done: false },
  { id: id++, title: "Mengerjakan PR", done: true },
  { id: id++, title: "Belajar Laravel", done: false },
]

function App() {
  const [todos, setTodos] = useState(initialTodos);

  function handleAddTodo(title) {
    const newTodo = {
      id: id++,
      title: title,
      done: false
    };

    setTodos([...todos, newTodo]);
  }

  function handleChangeTodo(todo) {
    const updatedTodo = todos.map(item => {
      if (item.id === todo.id) {
        // insert data baru
        return todo;
      } else {
        // insert data lama
        return item;
      }
    });
    setTodos(updatedTodo);
  }

  function handleDeleteTodo(todo) {
    setTodos(
      todos.filter(item => 
        item.id !== todo.id
      )
    )
  }

  return (
    <main>
      <Header />
      <TodoForm onAddTodo={handleAddTodo} />
      <TodoList todos={todos} setTodos={setTodos} onChange={handleChangeTodo} onDelete={handleDeleteTodo} />
    </main>
  )
}

export default App
