import React from 'react';
import {connect} from 'react-redux'
import { addTodos, removeTodos,updateTodos, completeTodos } from "../redux/reducer";

      const mapStateToProps = (state) => {
  return {
    todos: state,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (obj) => dispatch(addTodos(obj)),
    removeTodo: (id) => dispatch(removeTodos(id)),
    updateTodo:(obj)=> dispatch(updateTodos(obj)),
    completeTodo:(id)=> dispatch(completeTodos(id)),
  };
}; 
function DisplayTodos() {
  return (
    <div>
    
    </div>


  )
}

export default connect(mapStateToProps,mapDispatchToProps) (DisplayTodos);
