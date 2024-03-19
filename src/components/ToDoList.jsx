import React from "react";

const ToDoList = ({ list }) => {
  return (
    <div className="list">
      {list ? (
        <ul>
          {list.map(({ title, id }) => (
            <li key={id} className="list-item">
              <h3>{title}</h3>
              <button>X</button>
            </li>
          ))}
        </ul>
      ) : (
        <h2 className="alert">No ToDos Available, Start Adding...</h2>
      )}
    </div>
  );
};

export default ToDoList;
