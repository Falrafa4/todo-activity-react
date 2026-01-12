import { useEffect, useReducer } from 'react'
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

function todosReducer(todos, action) {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...todos,
        {
          id: id++,
          title: action.title,
          done: false
        }
      ];

    case "CHANGE_TODO":
      return todos.map(todo =>
        todo.id === action.id ? { ...todo, title: action.title, done: action.done } : todo
      );

    case "DELETE_TODO":
      return todos.filter(todo => todo.id !== action.id);

    case "RESET":
      return [];

    default:
      return todos;
  }
}

function App() {
  // const [todos, setTodos] = useState(initialTodos); //ini state
  const [todos, dispatch] = useReducer(todosReducer, initialTodos); //ini reducer

  useEffect(() => {
    document.title = `Total Aktivitas: ${todos.length}`;
  }, [todos]);

  function handleAddTodo(title) {
    dispatch({
      type: 'ADD_TODO',
      title: title
    })
  }

  function handleChangeTodo(todo) {
    dispatch({
      type: 'CHANGE_TODO',
      id: todo.id,
      title: todo.title,
      done: todo.done
    })
  }

  function handleDeleteTodo(todo) {
    dispatch({
      type: 'DELETE_TODO',
      id: todo.id
    })
  }

  function handleReset() {
    dispatch({
      type: 'RESET'
    })
  }

  return (
    <main>
      <Header />
      <TodoForm onAddTodo={handleAddTodo} />
      <TodoList todos={todos} handleReset={handleReset} onChange={handleChangeTodo} onDelete={handleDeleteTodo} />
    </main>
  )
}

export default App
