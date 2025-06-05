import { getAPI, postAPI } from "./api";

export async function getTodos() {
    return await getAPI("/todos");
}

export async function addTodo(title) {
    return await postAPI("/todos", { title });
}

export async function updateTodo(id, data) {
    const res = await fetch(`/api/todos/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    return res.json();
}

export async function deleteTodo(id) {
    const res = await fetch(`/api/todos/${id}`, {
      method: "DELETE",
    });
    
    return res.json();
}