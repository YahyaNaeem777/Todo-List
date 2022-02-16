import React from "react";

const Todo=(props)=>{

    return( 
    <div className="todo-style">
        <button className="deleteItem" 
        onClick={()=>{
            props.onSelect(props.id);
        }}
        >X</button>       
        <li>{props.text}</li>
    </div>
     )}
export default Todo;