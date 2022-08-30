import {memo, useCallback, useState} from 'react';
import {InputType, ButtonType, EditTodoType} from './Interface'

const Edit = ({todo,  onUpdateTodo, setEdit}:EditTodoType) => {
    const [editTodo, setEditTodo] = useState({
           ID: +todo.ID,
           title: todo.title,
           body: todo.body,
           columnType: todo.columnType
    });

    const changeColumnType = useCallback((event: InputType) => 
        setEditTodo({...editTodo, columnType: event.target.value}),
        [editTodo]);


    const onMoveTodo = useCallback((btn: ButtonType) => {
        btn.preventDefault();
        setEdit(false);
        onUpdateTodo(editTodo);
    },[editTodo, onUpdateTodo, setEdit]);

    const OnCloseForm = useCallback(() => setEdit(false), [setEdit]);

    return (
        <div className="move-todo">
            <select  onChange={changeColumnType} value={editTodo.columnType}>
                <option value="To Do">To Do</option>
                <option value="In Progress">In Progress</option>
                <option value="On Hold">On Hold</option>
                <option value="Done">Done</option>
            </select>
            <button onClick={onMoveTodo}>Move</button>
            <button onClick={OnCloseForm}>Cancel</button>
        </div>
    )
}

export default memo(Edit)