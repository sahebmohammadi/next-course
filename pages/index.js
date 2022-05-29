import { CheckIcon, PencilAltIcon, TrashIcon } from "@heroicons/react/outline";

export default function Home() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <nav className=" w-full bg-white shadow-sm flex justify-center py-4 mb-6">
        <h1 className="font-bold">TodoList App using Next.js & TailwindCSS</h1>
      </nav>
      <div className="container p-2 xl:max-w-screen-xl mx-auto">
        <section className="flex items-center justify-center">
          <div className="w-full max-w-screen-md bg-white p-2 md:p-4 rounded-xl">
            <div className="flex items-center justify-between border border-gray-100 mb-4 p-3 md:p-4 rounded-xl">
              <span>Task 1</span>
              <div className="flex gap-x-3 items-center">
                <button className="">
                  <CheckIcon className="w-6 h-6 stroke-green-400" />
                </button>
                <button className="">
                  <TrashIcon className="w-6 h-6 stroke-red-400" />
                </button>
                <button>
                  <PencilAltIcon className="w-6 h-6 stroke-blue-400" />
                </button>
              </div>
            </div>
            <div className="flex items-center justify-between border border-gray-100 mb-4 p-3 md:p-4 rounded-xl">
              <span>Task 1</span>
              <div className="flex gap-x-3 items-center">
                <button className="">
                  <CheckIcon className="w-6 h-6 stroke-green-400" />
                </button>
                <button className="">
                  <TrashIcon className="w-6 h-6 stroke-red-400" />
                </button>
                <button>
                  <PencilAltIcon className="w-6 h-6 stroke-blue-400" />
                </button>
              </div>
            </div>
            <div className="flex items-center justify-between border border-gray-100 mb-4 p-3 md:p-4 rounded-xl">
              <span>Task 1</span>
              <div className="flex gap-x-3 items-center">
                <button className="">
                  <CheckIcon className="w-6 h-6 stroke-green-400" />
                </button>
                <button className="">
                  <TrashIcon className="w-6 h-6 stroke-red-400" />
                </button>
                <button>
                  <PencilAltIcon className="w-6 h-6 stroke-blue-400" />
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
