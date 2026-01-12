import { useState } from "react";
import "./TodoItem.css";

export default function TodoItem({ todo, onChange, onDelete }) {
    const [isEditing, setIsEditing] = useState(false);
    let titleComponent, actionComponent;

    function handleListClick() {
        handleChangeDone({
            target: { checked: !todo.done }
        })
    }

    function handleChangeDone(e) {
        const newTodo = { ...todo, done: e.target.checked };
        onChange(newTodo);
    }

    function handleChangeTitle(e) {
        const newTodo = { ...todo, title: e.target.value }
        onChange(newTodo)
    }

    function handleDeleteTodo() {
        onDelete(todo);
    }

    if (isEditing) {
        titleComponent = (<><input type="text" value={todo.title} onChange={handleChangeTitle} onClick={(e) => e.stopPropagation()} /></>)
        actionComponent = (
            <div className="save-icon icon" onClick={(e) => {
                e.stopPropagation();
                setIsEditing(false);
            }}>
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#888888"><path d="M840-680v480q0 33-23.5 56.5T760-120H200q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h480l160 160Zm-80 34L646-760H200v560h560v-446ZM480-240q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35ZM240-560h360v-160H240v160Zm-40-86v446-560 114Z" /></svg>
            </div>
        )
    } else {
        titleComponent = (<>{todo.done ? <del>{todo.title}</del> : todo.title}</>)
        actionComponent = (
            <>
                <div className="edit-icon icon" onClick={(e) => {
                    e.stopPropagation();
                    setIsEditing(true);
                }}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#888888"><path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z" /></svg>
                </div>
            </>
        )
    }

    return (
        <li onClick={handleListClick}>
            <div className="todo-item">
                <input type="checkbox" checked={todo.done} onChange={handleChangeDone} />
                {titleComponent}
            </div>
            <div className="icons">
                {actionComponent}
                <div
                    className="delete-icon icon"
                    onClick={(e) => {
                        e.stopPropagation();
                        handleDeleteTodo();
                    }}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#888888">
                        <path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" />
                    </svg>
                </div>
            </div>
        </li>
    )
}