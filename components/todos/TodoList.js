import { CheckIcon, PencilAltIcon, TrashIcon } from "@heroicons/react/outline";
import Link from "next/link";

const TodoList = ({ data, onDelete }) => {
  if (!data.length) {
    return <h3 className="font-bold text-gray-600">todos has NOT yet been added !</h3>;
  }
  return (
    <div className="w-full max-w-screen-md bg-white p-2 md:p-4 rounded-xl">
      {data.map((todo) => {
        return (
          <div
            key={todo.id}
            className="flex items-center justify-between border border-gray-100 mb-4 p-3 md:p-4 rounded-xl"
          >
            <Link href={`/todos/${todo._id}`}>
              <a>
                <span>{todo.title}</span>
              </a>
            </Link>
            <div className="flex gap-x-3 items-center">
              <button className="">
                <CheckIcon className="w-6 h-6 stroke-green-400" />
              </button>
              <button onClick={() => onDelete(todo._id)}>
                <TrashIcon className="w-6 h-6 stroke-red-400" />
              </button>
              <button>
                <PencilAltIcon className="w-6 h-6 stroke-blue-400" />
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TodoList;
