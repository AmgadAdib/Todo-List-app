import {memo, useCallback, useState} from 'react';
import {InputType, ButtonType, AddTodoType } from './Interface'

const Add = ({columnName, todoList, setAdd, AddTodo}:AddTodoType) => {
    const [newTodo, setNewTodo] = useState({
            ID: todoList.length +1,
            title: "",
            body: "",
            columnType: columnName
        })
    const setTitle = useCallback((event: InputType) => {
        setNewTodo({...newTodo, title: event.target.value})},[newTodo]);

    const setBody = useCallback((event: InputType) => {
        setNewTodo({...newTodo, body: event.target.value})},[newTodo]);

    const addNewTodo = useCallback((btn: ButtonType)=>{
        btn.preventDefault();
        setAdd(false)
        AddTodo(newTodo)
     },[newTodo, AddTodo, setAdd]);

    const OnCloseForm = useCallback(() => setAdd(false), [setAdd]);

    return (
        <div className="move-todo">
            <label>Title:</label>
            <input type="text" required value={newTodo.title} onChange={setTitle} placeholder="Write your title..."/>
            <label>Body:</label>
            <textarea required value={newTodo.body} onChange={setBody} placeholder="write you body..."/>
            <button onClick={addNewTodo}>Add Todo</button>
            <button onClick={OnCloseForm}>Cancel</button>
        </div>
    )
}

export default memo(Add)