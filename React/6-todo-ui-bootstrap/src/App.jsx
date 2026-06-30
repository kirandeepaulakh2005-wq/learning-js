import { useState } from 'react';
import AppName from './component/AppName';
import AddTodo from './component/AddTodo';
import TodoItem from './component/TodoItem';
import TodoItems from './component/TodoItems';


function App() {


  return (
    <>
    <center>
   <AppName />
   <AddTodo />
   <TodoItems/>
    </center>
      </>

  )
}
export default App;
