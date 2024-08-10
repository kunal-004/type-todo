import React, { useContext, useRef } from "react";
import classes from "./NewTodo.module.css";
import { TodoContext } from "../store/todo.context";

const NewTodo: React.FC = (props) => {
  const EnteredTextRef = useRef<HTMLInputElement>(null);
  const todoctx = useContext(TodoContext);

  function submitHandler(e: React.FormEvent) {
    e.preventDefault();
    const todoValue = EnteredTextRef.current!.value;

    if (!todoValue) return;
    todoctx.addItem(todoValue);
    EnteredTextRef.current!.value = "";
  }
  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <label htmlFor="todo">New Todo</label>
      <input
        type="text"
        placeholder="Add new todo"
        id="todo"
        ref={EnteredTextRef}
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default NewTodo;
