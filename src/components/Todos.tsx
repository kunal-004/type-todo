import React, { useContext } from "react";

import TodoItem from "./TodoItem";
import classes from "./Todos.module.css";
import { TodoContext } from "../store/todo.context";

const Todos: React.FC = () => {
  const todoctx = useContext(TodoContext);
  return (
    <ul className={classes.todos}>
      {todoctx.items.map((item) => (
        <TodoItem
          key={item.id}
          text={item.text}
          onRemove={todoctx.removeItem.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};

export default Todos;
