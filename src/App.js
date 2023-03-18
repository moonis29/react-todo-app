import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import TodoItem from "./components/TodoItem";
import Navbar from "./components/Navbar";
import { toast } from "react-toastify";
import GridDesign from "./components/GridDesign";

function App() {
  const [todos, setTodos] = useState([]);
  const [value, setValue] = useState("");
  const notify = () => toast.success('Item Added Successfully', {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    });
  const notifydelete = () => toast("Item deleted Successfully");

  const handleSubmit = (e) => {
    e.preventDefault();

    const todoObj = {
      content: value,
      id: uuid(),
    };
    if (value === "") {
      alert("Please Enter Valid Item");
    } else {
      setTodos([...todos, todoObj]);
      setValue("");
    }
  };

  const handleDelete = (id) => {
    const newTodos = [...todos];

    let todoObjIndex = newTodos.findIndex((element) => {
      return element.id === id;
    });

    newTodos.splice(todoObjIndex, 1);
    setTodos(newTodos);
  };

  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="grid place-items-center min-h-screen">
        <GridDesign />
      </div>
      <div className="container mx-auto w-full">
        <form onSubmit={handleSubmit} className="w-[90%] md:w-full mx-auto ">
          <div className="my-5">
            <input
              className="border-2 outline-none px-5 py-3 rounded-md w-full text-lg"
              placeholder="Enter Item"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
          </div>
          <div className="my-5">
            <button
              onClick={notify}
              type="submit"
              className="bg-cyan-500 text-[#ffff] text-xl rounded-md w-full px-5 py-3 capitalize hover:bg-cyan-600"
            >
              add todo
            </button>
          </div>
        </form>
        <hr className="my-5" />
        <div className="w-[90%] md:w-full mx-auto">
          {todos.map((todoObj, index) => {
            return (
              <TodoItem
                key={index}
                todoObj={todoObj}
                handleDelete={handleDelete}
                onClick={notifydelete}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
