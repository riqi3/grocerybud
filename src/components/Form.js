import React, { useEffect } from "react";
import { v4 as uuid4 } from "uuid";

const Form = ({ input, setInput, list, setList, editList, setEditList }) => {
  const updateList = (title, id, completed) => {
    const newList = list.map((list) =>
      list.id === id ? { title, id, completed } : list
    );
    setList(newList);
    setEditList("");
  };
  useEffect(() => {
    if (editList) {
      setInput(editList.title);
    } else {
      setInput("");
    }
  }, [setInput, editList]);
  const onInputChange = (event) => {
    setInput(event.target.value);
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    if (!editList) {
      setList([...list, { id: uuid4(), title: input, completed: false }]);
      setInput("");
    } else {
      updateList(input, editList.id, editList.completed);
    }
  };



  return (
    <form onSubmit={onFormSubmit}>
      <input
        type="text"
        placeholder="e.g. Eggs"
        className="task-input"
        value={input}
        required
        onChange={onInputChange}
      />
      <button type="submit" className="submit-btn">
        {editList ? 'Edit' : 'Submit'}
      </button>
    </form>
  );
};

export default Form;
