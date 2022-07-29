import axios from "axios";
import { useState } from "react";
import TodoForm from "@/components/todos/AddNewTodo";
import TodoList from "@/components/Todos/TodoList";
import Layout from "@/containers/Layout";
import Todo from "@/server/models/todo";
import dbConnect from "@/server/utils/dbConnect";

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
    <Layout>
      <section className="flex md:flex-row md:items-start md:justify-center gap-x-8 flex-col gap-y-8">
        <TodoForm onAdd={addTodo} />
        <TodoList data={data} onDelete={deleteTodo} onComplete={completeHandler} />
      </section>
    </Layout>
  );
}

export async function getServerSideProps() {
  dbConnect();
  const todos = await Todo.find({});
  return {
    props: {
      todos: JSON.parse(JSON.stringify(todos)),
    },
  };
}
