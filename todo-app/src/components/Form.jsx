import React from 'react'

export const Form = ({todos,setTodos,inputText,setInputText,setStatus }) => {
 
  const statusHandler=(e)=>{
    setStatus(e.target.value);
  }
 
  const inputTextHandler=(e)=>{
    // console.log(e.target.value);
    setInputText(e.target.value);
  }

  const submitTodoHandler=(e)=>{
    e.preventDefault();
    setTodos([...todos,{text:inputText, completed: false, id:Math.random()*1000 }]);
    setInputText("");
  }
  return (
    <form>
      <input onChange={inputTextHandler} type="text" className="todo-input" value={inputText}/>
      <button className="todo-button" type="submit" onClick={submitTodoHandler}>
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select onChange={statusHandler} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  )
}
