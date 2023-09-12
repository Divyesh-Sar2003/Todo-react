import React,{useState} from 'react'

function TodoEdit(props,updateList) {
  const [inputText,setInputText] = useState('');
  const   handelEnterPress = (e)=>{
    if(e.keyCode===13){
      props.updateList(inputText)
      setInputText("");
    }
  }
  return (
    <>
     {/* style={{display:[props.EditName === null]?'none':'block'}} */}
    <div id="edittask">
        <input type="text" placeholder="update tasks"
        value={props.EditName||inputText}
        onChange={e =>{ setInputText(e.target.value);}} 
        onKeyUp={handelEnterPress}/>
        <button onClick={() =>{
          props.updateList(inputText)
      setInputText("")
        }}>Update</button>
    </div>
    
</>
  )
}

export default TodoEdit 