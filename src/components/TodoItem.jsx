import "./TodoItem.css";

export default function TodoItem({ title, done, onChange }) {
    return (
        <li>
            <input type="checkbox" checked={done && true} onChange={onChange} />
            {done ? <del>{title}</del> : title}
        </li>
    )
}