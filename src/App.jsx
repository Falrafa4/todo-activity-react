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

  function handleChangeTodo() {
    console.log('Done clicked')
  }

  function handleAddTodo(title) {
    const newTodo = {
      id: id++,
      title: title,
      done: false
    };

    setTodos([...todos, newTodo]);
  }

  return (
    <main>
      <Header />
      <TodoForm onAddTodo={handleAddTodo} />
      <TodoList todos={todos} setTodos={setTodos} onChange={handleChangeTodo} />
    </main>
  )
}

export default App
