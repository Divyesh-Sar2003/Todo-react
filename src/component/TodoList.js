import React from 'react'

function TodoList(props) {
  return (
    <div id='tasks'>
        <span>{props.item}</span>
        <button onClick={e=>{
          props.deleteItem(props.index);
          alert("Task is deleted")
        }}><i className="fa-solid fa-trash-can  icon-delete"></i></button>
        <button>
        <i className="fa-solid fa-square-pen icon"></i>
        </button>       
    </div>
  )
}

export default TodoList