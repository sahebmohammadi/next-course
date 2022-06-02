import Layout from "@/containers/Layout";
import { getOneTodo } from "@/api/todos/[todoId]";
import dbConnect from "@/server/utils/dbConnect";

const TodoPage = ({ todo }) => {
  return (
    <Layout>
      <div className="">
        <h1 className="text-xl font-bold mb-4">Todo Detail Page</h1>
        <h2>
          <strong className="font-bold">title</strong> : {todo.title}
        </h2>
        <p>
          <strong className="font-bold">description</strong> : {todo.description}
        </p>
      </div>
    </Layout>
  );
};

export default TodoPage;

export async function getServerSideProps(context) {
  dbConnect();
  const { query } = context;
  // get one todo from DB !
  const todo = await getOneTodo(query);
  return {
    props: {
      todo: JSON.parse(JSON.stringify(todo)),
    },
  };
}
