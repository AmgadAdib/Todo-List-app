import { memo, useState, useCallback} from "react";
import { TodoType, ColumnsType } from './Interface';
import Add from './Add';
import Edit from './Edit';

const Column = ({todoList, columnName,  setTodoList}: ColumnsType) => {

    const [add, setAdd] = useState<boolean>(false)
    const [edit, setEdit] = useState<boolean>(false)
    const [todo, setTodo] = useState<TodoType>(
    {
    ID: 0,
    title: "",
    body: "",
    columnType: "Default",
    });

  const onUpdateTodo = useCallback((updatedTodo:TodoType) => {
    const updatedTodoList:TodoType[] = todoList.map((todo:TodoType) => {
          if (todo.ID === updatedTodo.ID)return updatedTodo;
          return todo;
        });
        setTodoList(updatedTodoList);
      },[todoList]);
        
        const deleteTodo = useCallback((todo: number) => () => {
          setTodoList(todoList.filter((currentTodo: {ID: number}) =>
           currentTodo.ID !== todo))
          }, [todoList]);

        const handleEdit = useCallback((item: TodoType) => () => {
          setEdit(true);
          setTodo(item);
        },[todoList]);

        const AddTodo = useCallback((Todo: TodoType) => 
          setTodoList([...todoList, Todo]),
          [todoList])
        
        const addButton = useCallback(() => 
        setAdd(true),
        [todoList]);

    return (
      <div className="column">
        <div className="head">
          <h3>{columnName}</h3>
          <button onClick={addButton}>Add</button>
        </div>
        <hr/>
        {add && <Add columnName={columnName} AddTodo={AddTodo} todoList={todoList} setAdd={setAdd}  />}
        {edit && <Edit todo={todo} onUpdateTodo={onUpdateTodo} setEdit={setEdit}  />}
          <div className="todo_container">
            {todoList.filter((currentTodo) => {
            if (currentTodo.columnType === columnName){
            return currentTodo;}
            else if (currentTodo.columnType === columnName){
            return currentTodo;}
            else if (currentTodo.columnType === columnName){
              return currentTodo;
            }}).map((currentTodo) => {
            return(
            <div className="todo" key={currentTodo.ID}>
              <div className="todo_Title">
                <h4>{currentTodo.title}</h4>
                <div className="btn">
                <button onClick={handleEdit(currentTodo)}>Edit</button>
                <button onClick={deleteTodo(currentTodo.ID)}>Delete</button>
                </div>
              </div>
              <p>{currentTodo.body}</p>
            </div>
            )})}
          </div>
      </div>
  )
}

export default memo(Column)