import { useState } from "react";

const TodoForm = ({ onAdd }) => {
  const [value, setValue] = useState("");

  return (
    <form
      className="w-full max-w-screen-md bg-white p-2 md:p-4 rounded-xl"
      onSubmit={(e) => onAdd(e, value)}
    >
      <input
        className="border"
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit">Add new todo</button>
    </form>
  );
};

export default TodoForm;
