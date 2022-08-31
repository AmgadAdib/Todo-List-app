export interface TodoType {
    ID: number;
    title: string;
    body: string;
    columnType: string;
};

export interface  EditTodoType {
    todo: TodoType;
    onUpdateTodo: (obj: TodoType) => void;
    setEdit:   (value: boolean )=> void;
};

export interface  AddTodoType {
    columnName: string;
    todoList: TodoType[];
  setAdd: (value: boolean)  => void;
  AddTodo: (obj: TodoType) => void;
};

export interface  ColumnsType {
    todoList: TodoType[];
    setTodoList: (key: TodoType[]) => void;
};

export interface InputType {
    target:{value: string, name:string}
};

export interface ButtonType {
    preventDefault: () => void; 
};

export interface ColumnNameType { 
    columnName: string 
};
