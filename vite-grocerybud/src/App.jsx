import "./App.css";
import React, { useState, useEffect } from "react";
import Form from "./components/Form";
import Alert from "./components/Alert";
import List from "./components/List";

function App() {
  const initialState = JSON.parse(localStorage.getItem("list")) || [];
  const [list, setList] = useState(initialState);
  const [input, setInput] = useState("");
  const [editList, setEditList] = useState(null);
  const [alert, setAlert] = useState({ show: false, msg: "", type: "" });

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);

  const clearList = () => {
    setList([]);
    showAlert(true, "danger", "All items were cleared");
  };

  const showAlert = (show = false, type = "", msg = "") => {
    setAlert({ show, type, msg });
  };

  return (
    <>
      <div id="groc-container">
        {alert.show && (
          <Alert {...alert} removerAlert={showAlert} list={list} />
        )}
        <h2>Grocery Bud</h2>
        <div id="input-container">
          <Form
            input={input}
            setInput={setInput}
            list={list}
            setList={setList}
            editList={editList}
            setEditList={setEditList}
            setAlert={setAlert}
          />
        </div>{" "}
        {/*-list container-*/}
        <div id="list-container">
          <List
            id="list-js"
            list={list}
            setList={setList}
            setEditList={setEditList}
            setAlert={setAlert}
          />
        </div>
        {list.length > 0 && (
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
