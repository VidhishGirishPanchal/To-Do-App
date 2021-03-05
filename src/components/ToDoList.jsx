import React, { useState } from 'react';
import "./App.css";
import DeleteIcon from '@material-ui/icons/Delete';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

function ToDoList(props){
    const [line, setLine] = useState(false);

    function cutIt(){
        setLine(true);
    }
   

 return (
     <>

     <li style={{textDecoration : line ? "line-through" : "none"}}>
     <span className="listli">
     <span onClick={cutIt} >
        <HighlightOffIcon className="cut-button" />
        </span>
        
      {props.text} 
        
      <button className="delete-button" 
     onClick={
        ()=>{
            props.onSelect(props.id);
        }
        }>
            <DeleteIcon />
        </button>
        </span>
        </li>
        
     </>
 );
    
}

export default ToDoList;

{/* <ToDoList 
    text={itemval}
    key = {index}
    id = {index}
/> */}