import TodoItem from "./TodoItem";
import EmptyImage from "../assets/empty.svg";
import "./TodoList.css";

export default function TodoList({ todos, handleReset, onChange, onDelete }) {
    function handleClick() {
        if (confirm("Are you sure to reset the todo list?")) {
            handleReset();
        } else {
            return;
        }
    }
    
    return (
        <div className="todo-list">
            <button onClick={handleClick}>
                <svg xmlns="http://www.w3.org/2000/svg" height="14px" viewBox="0 -960 960 960" width="14px" fill="#fff"><path d="M480-80q-75 0-140.5-28.5t-114-77q-48.5-48.5-77-114T120-440h80q0 117 81.5 198.5T480-160q117 0 198.5-81.5T760-440q0-117-81.5-198.5T480-720h-6l62 62-56 58-160-160 160-160 56 58-62 62h6q75 0 140.5 28.5t114 77q48.5 48.5 77 114T840-440q0 75-28.5 140.5t-77 114q-48.5 48.5-114 77T480-80Z"/></svg>
                Reset Todo
            </button>
            <ul>
                {todos.map((todo) => (
                    <TodoItem key={todo.id} todo={todo} onChange={onChange} onDelete={onDelete} />
                ))}
                {todos.length === 0 && <p className="empty-message">
                    <img src={EmptyImage} alt="Empty" />
                    No todos available.
                </p>}
            </ul>
        </div>
    )
}