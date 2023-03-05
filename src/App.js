import React, { useState } from "react";
import Todo from "./Todo";

function App() {
  const [todo, setTodo] = useState([
    "Working from home",
    "go to the bank",
    "Going to the gym",
    "Groceries",
    "Cinema",
    "clean the house",
  ]);
  const [input, setInput] = useState("");

  const addTodoHandler = () => {
    if (!input) return;
    setTodo([...todo, input]);
    setInput("");
    console.log(todo);
  };

  const removeTodoHandler = (idx) => {
    // const updatedTodo = todo.splice(idx, 1);
    const toRemove = todo.slice().splice(idx, 1);
    const updateTodo = [];

    for (let i = 0; i < todo.length; i++) {
      if (todo[i] !== toRemove[0]) updateTodo.push(todo[i]);
    }

    setTodo(updateTodo);
    console.log("It works ?");
  };

  return (
    <div className="bg-gray-900 h-screen flex  justify-center">
      <div className="">
        <div className="w-[450px] h-fit rounded-2xl bg-slate-700 mt-48 flex-col text-center ">
          <h1 className="text-xl text-slate-200 pt-8 pb-2 font-light">
            Add a To-Do :
          </h1>

          <input
            type="text"
            onChange={(e) => setInput(e.target.value)}
            value={input.length > 0 ? input : ""}
            className="w-64 h-8 rounded-lg outline-none bg-slate-500 text-slate-100 text-center font-light"
          />
          <div>
            <button
              className="bg-violet-600 hover:bg-violet-700 py-1 px-[99px] rounded-lg mt-4 text-slate-200 mb-8"
              onClick={addTodoHandler}
            >
              Confirm
            </button>
          </div>
        </div>
        <ul>
          {todo.map((txt, idx) => (
            <Todo text={txt} removeTodo={() => removeTodoHandler(idx)} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
