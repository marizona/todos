import React, { useRef, useState } from "react";
import { connect } from "react-redux";


function Todos(props) {
  const [todo, setTodo] = useState("");
 
 const handleChange = (e) => {
    setTodo(e.target.value);
  };
  console.log("props from store", props);
  return (
    <>
      <div className="addTodos">
        <input
          type="text"
          onChange={(e) => handleChange(e)}
          className="todo-input"
        />
        <button
          className="add-btn"
          onClick={() =>
            props.addTodo({
              id: Math.floor(Math.random() * 1000),
              item: todo,
              completed: false,
            })
          }
        >
          Add
        </button>
        <br />
        <ul>
          {props.todos.map((item) => {
            return (
              
            );
          })}
        </ul>
      </div>
    </>
  );
}
//conect method to connect this component with redux store
export default connect(mapStateToProps, mapDispatchToProps)(Todos);
