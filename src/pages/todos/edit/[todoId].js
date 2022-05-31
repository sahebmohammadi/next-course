import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";
import Layout from "@/containers/Layout";
import { getOneTodo } from "@/api/todos/[todoId]";

const TodoPage = ({ todo }) => {
  const [checked, setChecked] = useState(todo.isCompleted);
  const router = useRouter();
  const [formData, setFormData] = useState({ title: todo.title, description: todo.description });
  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .put(`/api/todos/${router.query.todoId}`, { todo: { ...formData, isCompleted: checked } })
      .then((res) => {
        router.push("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <Layout>
      <div className="flex items-center flex-col">
        <h1 className="text-xl font-bold mb-4">Todo Edit Page</h1>
        <form className="w-full max-w-md bg-white p-2 md:p-4 rounded-xl" onSubmit={submitHandler}>
          <div className="mb-4">
            <label className="text-gray-600 mb-1 block" htmlFor="todo-title">
              Title
            </label>
            <input
              name="title"
              placeholder="todo title ..."
              id="todo-title"
              className="border px-3 py-2 rounded-lg outline-none focus:ring-2 focus:ring-blue-400 focus:border-none w-full block transition duration-300 ease-out"
              type="text"
              value={formData.title}
              onChange={changeHandler}
            />
          </div>
          <div className="mb-4">
            <label className="text-gray-600 mb-1 block" htmlFor="todo-description">
              Description
            </label>
            <textarea
              value={formData.description}
              onChange={changeHandler}
              name="description"
              id="todo-description"
              className="border px-3 py-2 rounded-lg outline-none focus:ring-2 focus:ring-blue-400 focus:border-none w-full block transition duration-300 ease-out"
            ></textarea>
          </div>
          <div className="mb-8">
            <input
              className="rounded mr-2"
              type="checkbox"
              name="checked"
              id="checked"
              checked={checked}
              onChange={() => setChecked(!checked)}
            />

            <label htmlFor="checked">complete todo</label>
          </div>
          <div className="flex items-center gap-x-4">
            <button
              onClick={() => router.push("/")}
              type="button"
              className="w-full py-2 text-blue-500 border border-blue-500 rounded-lg  transition-all duration-300 ease-in-out"
            >
              Back
            </button>
            <button
              type="submit"
              className="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all duration-300 ease-in-out"
            >
              Update todo
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default TodoPage;

export async function getServerSideProps(context) {
  const { query } = context;
  // get one todo from DB !
  const todo = await getOneTodo(query);
  return {
    props: {
      todo: JSON.parse(JSON.stringify(todo)),
    },
  };
}
