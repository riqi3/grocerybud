import "./App.css";
import React, { useState, useEffect } from "react";
import Form from "./components/Form";
import List from "./components/List";

function App() {
  const initialState = JSON.parse(localStorage.getItem("list")) || [];
  const [list, setList] = useState(initialState);
  const [input, setInput] = useState("");
  const [editList, setEditList] = useState(null);

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);

  const clearList = () => {
    setList([]);
  };

  return (
    <>
      <div id="groc-container">
        <h2>Grocery Bud</h2>
        <div id="input-container">
          <Form
            input={input}
            setInput={setInput}
            list={list}
            setList={setList}
            editList={editList}
            setEditList={setEditList}
          />
        </div>{" "}
        {/*-list container-*/}
        <div id="list-container">
          <List
            id="list-js"
            list={list}
            setList={setList}
            setEditList={setEditList}
          />
        </div>
        {list.length > 0 &&(
          <div id="dabtn-container">
          <button id="delete-all-btn" onClick={clearList}>
            Delete All
          </button>
        </div>
        )}
      </div>
      {/*-groc container-*/}
    </>
  );
}

export default App;
