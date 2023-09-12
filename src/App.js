import React, { useState } from 'react'
import "./App.css"
import Todoinput from './component/Todoinput'
import TodoList from './component/TodoList';
import TodoEdit from './component/TodoEdit'
function App() {
  const [listTodo,setListTodo] = useState([]);
  let addList = (inputText)=>{
    if(!inputText){
      alert('please add some task')
    }
    else{
      // const allData =  {id: new Date().getTime().toString()}
      setListTodo([...listTodo,inputText]);
      // console.log(allData.id);
    }
  }
  const deleteListItem = (key)=>{
    let newListTodo = [...listTodo];
    newListTodo.splice(key,1)
    setListTodo([...newListTodo])
  }
  const [EditItem , SetEditItem] = useState([]);
  const editListItem = (key) =>{
    console.log(EditItem,key.index);
    SetEditItem([...EditItem,key]);
  }
   const editItem = (inputText) =>{
      console.log(inputText);
      setListTodo([...listTodo,inputText]);
   }

  return (
    <>
    <div className="container">
      <h1 className="text-center">To-DO List</h1>
      <Todoinput addList={addList}/>
      <TodoEdit 
      EditName={EditItem}
      updateList={editItem}/>
      <div className='main'>
      {listTodo.map((listitem,i)=>{
        return(
          <TodoList key={i} index={i} 
          item={listitem} 
          deleteItem={deleteListItem}
          editItem={editListItem}/>
        )
        
      })}
  
      </div>
      
    </div>
    </>
  )
}
export default App