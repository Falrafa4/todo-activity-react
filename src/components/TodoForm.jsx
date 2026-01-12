import { useEffect, useRef, useState } from "react";
import "./TodoForm.css";

export default function TodoForm({ onAddTodo }) {
    const inputForm = useRef(null);
    const [todo, setTodo] = useState("");

    useEffect(() => {
        inputForm.current.focus();
    }, []);

    function handleChange(e) {
        setTodo(e.target.value);
    }

    function handleClick(e) {
        e.preventDefault();
        if (todo.trim() === '') {
            alert("Don't Empty!");
            return;
        }
        setTodo("");
        onAddTodo(todo);
    }

    return (
        <form action="">
            <input type="text" ref={inputForm} className="input-todo" value={todo} onChange={handleChange} />
            <button type="submit" onClick={handleClick}>Add</button>
        </form>
    )
}