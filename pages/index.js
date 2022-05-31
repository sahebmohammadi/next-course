import axios from "axios";
import { useEffect, useState } from "react";
import TodoForm from "../components/todos/AddNewTodo";
import TodoList from "../components/Todos/TodoList";
import Todo from "../server/models/todo";

export default function Home({ todos }) {
  const [data, setData] = useState(todos); // [{},{}]

  const deleteTodo = (id) => {
    axios
      .delete(`/api/todos/${id}`)
      .then(({ data }) => {
        setData(data.todos);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  };

  const addTodo = (e, formData) => {
    e.preventDefault();
    axios
      .post(`/api/todos/`, { formData })
      .then(({ data }) => {
        setData(data.todos);
      })
      .catch((err) => console.log(err));
  };

  const completeHandler = (id) => {
    axios
      .put(`/api/todos/complete/${id}`)
      .then(({ data }) => {
        setData(data.todos);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <nav className=" w-full bg-white shadow-sm flex justify-center py-4 mb-6">
        <h1 className="font-bold">TodoList App using Next.js & TailwindCSS</h1>
      </nav>
      <div className="container p-2 xl:max-w-screen-xl mx-auto">
        <section className="flex md:flex-row md:items-start md:justify-center gap-x-8 flex-col gap-y-8">
          {/* todoForm */}
          <TodoForm onAdd={addTodo} />
          {/* TodoList */}
          <TodoList data={data} onDelete={deleteTodo} onComplete={completeHandler} />
        </section>
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const todos = await Todo.find({});
  return {
    props: {
      todos: JSON.parse(JSON.stringify(todos)),
    },
  };
}
