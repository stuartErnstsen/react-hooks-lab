import { useState, useEffect } from 'react';
import List from './Components/List';
import AddTodo from './Components/AddTodo';
import './App.css';

function App() {
  const [todoList, setTodo] = useState([]);

  const addTodo = (todo) => {
    setTodo([todo, ...todoList])
  }

  useEffect(() => {
    console.log('list has changed')
  }, [todoList])

  return (
    <div className="App">
      <AddTodo addTodoFn={addTodo}/>
      <List todoList={todoList}/>
    </div>
  );
}

export default App;
