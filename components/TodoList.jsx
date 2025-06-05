"use client";

import { useEffect } from "react";
import useTodoStore from "@/store/todoStore";
import TodoItem from "./TodoItem";

export default function TodoList() {
    const { todos, fetchTodos, loading } = useTodoStore();

    useEffect(() => {
        fetchTodos();
    }, [fetchTodos]);

    useEffect(()=> {
        console.log(todos);
    }, [todos]);
 
    if(loading) return <p>Yükleniyor...</p>;

    return(
        <ul className="space-y-2">
            { todos && todos.length === 0 ? (
                <p>Henüz görev eklenmemiş.</p>
            ) : (
                todos.map((todo) => <TodoItem key={todo.id} todo={todo} />)
            )}
        </ul>
    );
}