import React from "react";

const Todo = (props) => {
  return (
    <li
      className="flex justify-center items-center w-full rounded-lg border-2 border-indigo-600 text-slate-200 py-2 my-4 hover:line-through cursor-pointer"
      onClick={() => props.removeTodo()}
    >
      {props.text}
    </li>
  );
};

export default Todo;
