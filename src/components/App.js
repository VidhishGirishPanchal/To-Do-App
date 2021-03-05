import React, { useState } from 'react';
import ToDoList from "./ToDoList";
import "./App.css";


function App(){

    const[inputList, setInputList] = useState("");
    const[items, setItems] = useState(["<-- To Cut", "To Delete -->"]);

    function deleteItem(id){

        setItems((oldItems, index)=>{
            return oldItems.filter((arrElements, index)=>{
                return index!== id;
            })
        })

    } 
    function itemEvent(event){
        setInputList(event.target.value)
    }

    function listOfItems(){
        setItems((oldItems)=>{
            return [...oldItems, inputList]
        
        
        });
        setInputList("");
    }

    return(
        <>
        <div className="main-div">
            <div className="center-div">
                <br />
                <h1>ToDo List</h1>
                <br />
               
                    <input type="text" placeholder="Add an Item" value={inputList} onChange={itemEvent} />
                    <button onClick={listOfItems} className="add-button">+</button>
                

            <ol>
            
               { items.map((itemval, index)=>{

                       return <ToDoList 
                           text = {itemval}
                           key = {index}
                            id = {index}
                            onSelect = {deleteItem}
                       />
                })}
                
            </ol>
            </div>
        </div>
        </>
    );
}

export default App;
