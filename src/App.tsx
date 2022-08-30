import {memo, useEffect, useState} from 'react';
import Column from './components/Column';
import {TodoType} from './components/Interface'
import './App.css';


function App() {

const [data, setData] = useState<TodoType[]>([]);
  
  const historyData = localStorage.getItem('HistoryData');

  useEffect(() => {
    if (historyData !== null) {
      setData(JSON.parse(historyData));}
    else {
      setData([])}
    },[setData]) 

  useEffect(() => {
      localStorage.setItem('HistoryData', JSON.stringify(data));
  }, [data]);


  return (
    <div className="App">
      <h1>Project Management</h1>
      <div className="container">
        <Column todoList={data} columnName="To Do"  setTodoList={setData} />
        <Column todoList={data} columnName="In Progress"  setTodoList={setData} />
        <Column todoList={data} columnName="On Hold" setTodoList={setData} />
        <Column todoList={data} columnName="Done"  setTodoList={setData} />
      </div>
    </div>
  );
}

export default memo(App);