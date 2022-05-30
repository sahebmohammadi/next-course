import axios from "axios";
import { useEffect, useState } from "react";
import TodoForm from "../components/todos/AddNewTodo";
import TodoList from "../components/Todos/TodoList";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null); // [{},{}]

  useEffect(() => {
    axios
      .get("/api/todos")
      .then(({ data }) => {
        setData(data.todos);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  const deleteTodo = (id) => {
    axios
      .delete(`/api/todos/${id}`)
      .then((res) => {
        console.log(res.data);
        setData(data.filter((t) => t.id !== parseInt(id)));
        setLoading(false);
      })
      .catch((err) => console.log(err));
  };

  const addTodo = (e, todo) => {
    e.preventDefault();
    axios
      .post(`/api/todos/`, { todo })
      .then(({ data }) => {
        console.log(data);
        setData(data.todos);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  };

  if (loading) return <div>loading ...</div>;

  return (
    <div className="bg-gray-50 min-h-screen">
      <nav className=" w-full bg-white shadow-sm flex justify-center py-4 mb-6">
        <h1 className="font-bold">TodoList App using Next.js & TailwindCSS</h1>
      </nav>
      <div className="container p-2 xl:max-w-screen-xl mx-auto">
        <section className="flex items-center justify-center">
          {/* todoForm */}
          <TodoForm onAdd={addTodo} />
          {/* TodoList */}
          <TodoList data={data} onDelete={deleteTodo} />
        </section>
      </div>
    </div>
  );
}
