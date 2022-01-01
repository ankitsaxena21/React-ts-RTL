import React, { useState } from "react";

interface iProps {
    text: string;
    completed: boolean;
}

const Todo: React.FC = () => {
    const [item, setItem] = useState<iProps>({ text: "", completed: false });
    const [allItem, setAllItems] = useState<iProps[]>([]);

    const addTodo: React.FormEventHandler = (e) => {
        e.preventDefault();
        setAllItems([...allItem, item]);
        setItem({ text: "", completed: false });
    }
    return (
        <>
            <h2>Todo App</h2>
            <form onSubmit={addTodo} data-testid="add">
                <input data-testid="todo-input" type="text" value={item.text} onChange={(e) => setItem({ text: e.target.value, completed: false })} />
            </form>
            <ul style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                {allItem.map((todo, id) => (
                    <li key={id}>{todo.text}</li>
                ))}
            </ul>
        </>
    )
}

export default Todo;