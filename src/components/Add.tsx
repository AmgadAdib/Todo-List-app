import { memo, useCallback, useState } from 'react';
import { InputType, ButtonType, AddTodoType } from './Interface'

const Add = ({columnName, todoList, setAdd, AddTodo}:AddTodoType) => {
    const [newTodo, setNewTodo] = useState({
            ID: todoList.length +1,
            title: '',
            body: '' ,
            columnType: columnName
    });

    const setNewData = useCallback((event: InputType) => {
        const newData:any = {...newTodo}
        newData[event.target.name] = event.target.value
        setNewTodo(newData)
    },[newTodo]);

    const addNewTodo = useCallback((btn: ButtonType)=>{
        btn.preventDefault();
        setAdd(false)
        AddTodo(newTodo)
    },[newTodo, AddTodo, setAdd]);

    const OnCloseForm = useCallback(() => setAdd(false), [setAdd]);

    return (
        <div className="move-todo">
            <label>Title:</label>
            <input type="text" required name='title' value={newTodo.title} onChange={setNewData} placeholder="Write your title..."/>
            <label>Body:</label>
            <textarea required name='body' value={newTodo.body} onChange={setNewData} placeholder="write you body..."/>
            <button onClick={addNewTodo}>Add Todo</button>
            <button onClick={OnCloseForm}>Cancel</button>
        </div>
    )
}

export default memo(Add)