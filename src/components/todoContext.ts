import { createContext } from "react";
import { ColumnsType } from "./Interface";


export const todoContext = createContext<ColumnsType>({
    todoList: [],
    setTodoList: () => {},
  });