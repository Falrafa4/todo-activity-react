import TodoItem from "./TodoItem";
import "./TodoList.css";

export default function TodoList({ todos, onChange, onDelete }) {
    return (
        <div className="todo-list">
            <ul>
                {todos.map((todo) => (
                    <TodoItem key={todo.id} todo={todo} onChange={onChange} onDelete={onDelete} />
                ))}
                {todos.length === 0 && <p><em>Todo List kosong.</em></p>}
            </ul>
        </div>
    )
}