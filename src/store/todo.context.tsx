import React, { createContext, useState } from "react";
import TodoLi from "../models/Todo";

type ContextAliasObj = {
  items: TodoLi[];
  addItem: (text: string) => void;
  removeItem: (id: string) => void;
};

export const TodoContext = createContext<ContextAliasObj>({
  items: [],
  addItem: () => {},
  removeItem: () => {},
});

const TodosContextProvider: React.FC<{ children: any }> = (props) => {
  const [todos, setTodos] = useState<TodoLi[]>([]);

  const addTodoHandler = (text: string) => {
    const newTodo = new TodoLi(text);

    setTodos((prevTodos) => prevTodos.concat(newTodo));
  };

  const removeTodoHandler = (todoId: string) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== todoId));
  };

  const contextValue: ContextAliasObj = {
    items: todos,
    addItem: addTodoHandler,
    removeItem: removeTodoHandler,
  };

  return (
    <TodoContext.Provider value={contextValue}>
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodosContextProvider;
