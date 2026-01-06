import TodoItem from "./TodoItem";
import "./TodoList.css";

export default function TodoList({ todos, onChange }) {
    return (
        <div className="todo-list">
            <ul>
                {todos.map((todo) => (
                    <TodoItem key={todo.id} {...todo} onChange={onChange} />
                ))}
            </ul>
        </div>
    )
}