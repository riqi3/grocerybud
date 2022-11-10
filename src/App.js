import "./App.css";
import React, { useState, useEffect } from "react";
import Form from "./components/Form";
import List from "./components/List";

function App() {
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);
  const [editList, setEditList] = useState(null);

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);

  return (
    <>
      <div id="groc-container">
        <div id="list-container">
          <Form
            input={input}
            setInput={setInput}
            list={list}
            setList={setList}
            editList={editList}
            setEditList={setEditList}
          />
        </div>
        <div>
          <List 
          list={list} 
          setList={setList}
          setEditList={setEditList}
          />
        </div>
      </div>
    </>
  );
}

export default App;
