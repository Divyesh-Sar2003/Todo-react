import React,{useState} from 'react'

function Todoinput(props) {
  const [inputText,setInputText] = useState('');
  const   handelEnterPress = (e)=>{
    if(e.keyCode===13){
      props.addList(inputText)
      setInputText("");
    }
  }
  return (
    <>
        <div id="newtask">
            <input type="text" placeholder="Add Tasks" value={inputText} onChange={e =>{
              setInputText(e.target.value);
            }} onKeyUp={handelEnterPress}/>
            <button id="push" onClick={()=>
            {
              props.addList(inputText)
              setInputText("")
            }}>Add</button>
        </div>
        {/* <div id="tasks">
          <ul className='task'>
            <span>{inputText}</span>
            <button className='btn btn-danger'>Delete</button>
          </ul>
          
        </div> */
        }
    </>

  )
}

export default Todoinput