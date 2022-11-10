import './App.css';
import React, { useState, useEffect } from 'react';
import Form from './components/Form';


function App() {
  const[input, setInput] = useState('');
  const[list, setList] = useState([]);


  return (
    <>
    <form id='groc-container'>
      <div id='list-container'>
        <Form 
                input = {input}
                setInput ={setInput}
                list = {list}
                setList = {setList}
        />

      </div>

    </form>
    </>
  );
}

export default App;
