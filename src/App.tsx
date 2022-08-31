import {memo, useEffect, useState} from 'react';
import Column from './components/Column';
import { todoContext } from './components/todoContext';
import {TodoType} from './components/Interface'
import './App.css';

function App() {

const [todoList, setTodoList] = useState<TodoType[]>([]);

  const historyData = localStorage.getItem('HistoryData');

  useEffect(() => {
    if (historyData !== null) {
      setTodoList(JSON.parse(historyData));}
    else {
      setTodoList([])}
    },[]) 

  useEffect(() => {
      localStorage.setItem('HistoryData', JSON.stringify(todoList));
    }, [todoList]);


  return (
    <div className="App">
      <h1>Project Management</h1>
      <div className="container">
        <todoContext.Provider value={{todoList, setTodoList}}>
          <Column columnName="To Do"/>
          <Column columnName="In Progress"/>
          <Column columnName="On Hold"/>
          <Column columnName="Done"/>
        </todoContext.Provider> 
      </div>
    </div>
  );
}

export default memo(App);