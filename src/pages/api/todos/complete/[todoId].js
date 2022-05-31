import dbConnect from "@/server/utils/dbConnect";
import Todo from "@/server/models/todo";

dbConnect();

export default async function handler(req, res) {
  const { method, query } = req;
  if (method === "PUT") {
    const todo = await Todo.findById(query.todoId);
    todo.isCompleted = !todo.isCompleted;
    await todo.save();
    const todos = await Todo.find({});
    return res.status(200).json({ message: "Done !", todos });
  }
}
