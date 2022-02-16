import "./App.css";
import Todo from "./Todo";
import { useState } from "react";

function App() {
  const [list, storeList] = useState("");
  const [listVal, setListVal] = useState([]);

  const gainValue = (e) => {
    storeList(e.target.value);
  };

  const addItemsList = () => {
    setListVal((newItemsValues) => {
      return [...newItemsValues, list];
    });
    storeList(" ");
  };

  const deleteItems = (id) => {
    console.log("delete Item");
    setListVal((deleteValues) => {
      return deleteValues.filter((arrElem, index) => {
        console.log(arrElem);
        return index !== id;
      });
    });
  };

  return (
    <div className="main_div">
      <div className="center_div">
        <h1>ToDo List</h1>
        <br />
        <input
          type="text"
          placeholder="Add a Items"
          name="list"
          onChange={gainValue}
          value={list}
        />
        <button className="addItem" onClick={addItemsList}>
          +
        </button>

        <ol>
          {/* <li>{listVal}</li> */}

          {listVal.map((itemValues, index) => {
            return (
              <Todo
                text={itemValues}
                key={index}
                id={index}
                onSelect={deleteItems}
              />
            );
          })}
        </ol>
      </div>
    </div>
  );
}

export default App;
