import { CheckIcon, PencilAltIcon, TrashIcon } from "@heroicons/react/outline";
import Link from "next/link";

const TodoList = ({ data, onDelete, onComplete }) => {
  if (!data.length) {
    return <h3 className="font-bold text-gray-600">todos has NOT yet been added !</h3>;
  }

  return (
    <div className="w-full max-w-screen-md bg-white p-2 md:p-4 rounded-xl">
      {data.map((todo) => {
        return (
          <div
            key={todo._id}
            className="flex items-center justify-between border border-gray-100 mb-4 p-3 md:p-4 rounded-xl"
          >
            <Link href={`/todos/${todo._id}`}>
              <a>
                <span className={`${todo.isCompleted ? "line-through" : ""}`}>{todo.title}</span>
              </a>
            </Link>
            <div className="flex gap-x-3 items-center">
              <button className="" onClick={() => onComplete(todo._id)}>
                {todo.isCompleted ? (
                  <CheckIcon className="w-6 h-6 stroke-green-400" />
                ) : (
                  <span className="w-5 h-5 block border-2 border-gray-500 rounded-full"></span>
                )}
              </button>
              <button onClick={() => onDelete(todo._id)}>
                <TrashIcon className="w-6 h-6 stroke-red-400" />
              </button>
              <Link href={`/todos/edit/${todo._id}`}>
                <a className="block">
                  <PencilAltIcon className="w-6 h-6 stroke-blue-400" />
                </a>
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TodoList;
