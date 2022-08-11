import React from "react";
import Todo from "./Todo";

export default function TodoList(props) {
  return (
      props.todolist.map((todo) => {
        return <Todo key={todo.todo_id} todo={todo} ToggleTodos = {props.ToggleTodos}/>;
      }
  ))
};