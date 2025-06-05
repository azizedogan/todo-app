"use client";

import { useState } from "react";
import useTodoStore from "@/store/todoStore";

export default function TodoForm() {
    const [title, setTitle] = useState("");
    const addTodo = useTodoStore((state) => state.addTodo);

    const onSubmit = async(e) => {
        e.preventDefault();

        if (!title.trim()) return;
        await addTodo(title);
        setTitle("");
    };

    return (
        <form onSubmit={onSubmit} className="flex gap-2">
            <input 
                className="flex-1 border border-gray-300 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400" 
                type="text" 
                value={title} 
                onChange={(e) => setTitle(e.target.value)} 
                placeholder="Yeni görev ekle"
            />
            <button className="bg-blue-500 hover:bg-blue-600 text-white text-lg px-6 py-3 rounded-xl transition-all cursor-pointer">
                Ekle
            </button>
        </form>
    );
}