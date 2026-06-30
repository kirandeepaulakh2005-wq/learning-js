 import TodoItem from "./TodoItem";
 const TodoItems =()=>{
      const todoItem=[{id:1, todoText:"Buy Milk",  todoDate:"30-july-20026"},
  {id:2, todoText: "Go to College",  todoDate:"weekday"},
  {id:3, todoText: "Exercise",  todoDate:"Everyday"},
];
    return <>{todoItem.map((item=><TodoItem todoText={item.todoText} todoDate={item.todoDate}/>))}
    </>
}

export default TodoItems;