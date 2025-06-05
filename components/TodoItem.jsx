"use client";

import useTodoStore from "@/store/todoStore";

export default function TodoItem({ todo}) {
    const { deleteTodo, updateTodo } = useTodoStore();

    const handleToggle = async() => {
        await updateTodo(todo.id, {completed: !todo.completed});
    };

    const handleDelete = async() => {
        await deleteTodo(todo.id);
    };

    return(
        <li className="flex justify-between items-center bg-gray-100 px-4 py-3 rounded-xl shadow-sm">
            <div className={`flex items-stretch gap-2 ${todo.completed ? "line-through text-gray-400" : ""}`}>
                <input 
                    type="checkbox" 
                    checked={todo.completed}
                    onChange={handleToggle} 
                    className="cursor-pointer"
                />
                <span>{todo.title}</span>
            </div>

            <button 
                onClick={handleDelete} 
                className="text-red-600 text-md hover:underline cursor-pointer"
            >
                Sil
            </button>
        </li>
    );
}