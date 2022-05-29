import { todos } from "../../../data/todos";

export default function handler(req, res) {
  return res.status(200).json({ todos });
}
