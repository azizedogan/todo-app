import { create } from "zustand";
import { 
    getTodos,
    addTodo, 
    deleteTodo, 
    updateTodo 
} from "@/services/todoServices";

const useTodoStore = create((set, get) => ({
    todos: [],
    loading: false,

    fetchTodos: async () => {
        set({ loading: true});
        const todos = await getTodos();
        set({ todos, loading: false });
    },

    addTodo: async (title) => {
        const newTodo = await addTodo(title);
        set({ todos: [newTodo, ...get().todos] });
    },

    deleteTodo: async(id) => {
        await deleteTodo(id);
        set({ todos: get().todos.filter((todo) => todo.id !== id) });
    },

    updateTodo: async(id, updatedData) => {
        const updated = await updateTodo(id, updatedData);
        set({
            todos: get().todos.map((todo) => 
            todo.id === id ? {...todo, ...updated} : todo
        ),
      });
    },
}));

export default useTodoStore;
