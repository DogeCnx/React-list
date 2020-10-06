import React from "react";
import { useTodo } from "../../contexts/ActionContext";

export function Listitem({ children, id, type }) {
  const [, { handleTodoClick, handleDoClick, handleDoneClick }] = useTodo();
  return (
    <ul className="list-container">
      <li className="list-item">
        <span className="list-content">{children}</span>
        {type !== "todo" && (
          <button className="btn" onClick={() => handleTodoClick(type)(id)}>
            Todo
          </button>
        )}
        {type !== "doing" && (
          <button className="btn" onClick={() => handleDoClick(id)}>
            Do
          </button>
        )}
        {type !== "done" && (
          <button className="btn" onClick={() => handleDoneClick(type)(id)}>
            Done
          </button>
        )}
      </li>
    </ul>
  );
}
export default Listitem;
