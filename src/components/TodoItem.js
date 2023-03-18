import React from 'react';
import { FaTrashAlt } from "react-icons/fa";

const TodoItem = ({todoObj, handleDelete}) => {

    return(
        <div className="flex items-center justify-between border-2 my-2 px-3 py-4">
              <p>{todoObj.content}</p>
              <span onClick={() => handleDelete(todoObj.id)} className="cursor-pointer" >
                <FaTrashAlt />
              </span>
            </div>
    )
}
export default TodoItem;