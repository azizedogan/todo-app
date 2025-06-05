import TodoForm from "@/components/TodoForm";
import TodoList from "@/components/TodoList";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Todo App</title>
      </Head>
      
      <div className="max-w-xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-2xl space-y-4">
        <h1 className="text-3xl font-bold text-gray-800">📝 Todo List</h1>
        <TodoForm />
        <TodoList />
      </div>
    </>
  );
}
